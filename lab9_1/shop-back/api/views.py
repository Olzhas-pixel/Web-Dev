# from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = Product.objects.get(id=id)
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id
    }
    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = Category.objects.get(id=id)
    data = {
        "id": category.id,
        "name": category.name
    }
    return JsonResponse(data)


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)
# Create your views here.
