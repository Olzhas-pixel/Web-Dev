import { Injectable } from "@angular/core";
import { PRODUCTS } from "../data/products";
import { CATEGORIES } from "../data/categories";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = structuredClone(PRODUCTS);
  private categories: Category[] = structuredClone(CATEGORIES);

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }
}
