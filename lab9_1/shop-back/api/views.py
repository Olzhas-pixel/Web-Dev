from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

# -------------------------------
# CategoryViewSet
# -------------------------------
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    # /api/categories/<id>/products/
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


# -------------------------------
# ProductViewSet
# -------------------------------
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # Подключаем фильтры поиска и сортировки
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']
    ordering = ['name']

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category')
        is_active = self.request.query_params.get('is_active')

        if category is not None:
            queryset = queryset.filter(category_id=category)
        if is_active is not None:
            if is_active.lower() in ['true', '1']:
                queryset = queryset.filter(is_active=True)
            elif is_active.lower() in ['false', '0']:
                queryset = queryset.filter(is_active=False)
        return queryset

    # /api/products/active/
    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = self.get_queryset().filter(is_active=True)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)