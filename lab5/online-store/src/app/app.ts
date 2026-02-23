import { Component } from "@angular/core";
import { ProductService } from "./services/product.service";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [ProductListComponent, ProductItemComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];
  favorites: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategoryId = category.id;
    this.selectedProducts = this.productService.getProductsByCategory(category.id);
  }
  onDelete(productId: number): void {
    if (this.selectedCategoryId === null) return;

    this.productService.deleteProduct(productId);
    this.selectedProducts =
      this.productService.getProductsByCategory(this.selectedCategoryId);
  }

  onLike(productId: number): void {
    if (this.selectedCategoryId === null) return;

    this.productService.likeProduct(productId);
    this.selectedProducts =
      this.productService.getProductsByCategory(this.selectedCategoryId);
  }
  toggleFavorite(productId: number): void {
    const product = this.selectedProducts.find(p => p.id === productId)
      || this.favorites.find(p => p.id === productId);

    if (!product) return;

    product.isFavorite = !product.isFavorite;

    this.favorites = [
      ...this.selectedProducts.filter(p => p.isFavorite),
      ...this.favorites.filter(p => p.isFavorite && !this.selectedProducts.some(sp => sp.id === p.id))
    ];
  }

}
