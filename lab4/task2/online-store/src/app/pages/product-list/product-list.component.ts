
import { Component } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { PRODUCTS } from "../../data/products";
import { Product } from "../../models/product.model";
import { FormsModule } from "@angular/forms";



@Component({
  selector: "app-product-list",
  standalone: true,
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
  imports: [DecimalPipe, FormsModule]
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;
  query: string = "";

  get filteredProducts(): Product[] {
    const q = this.query.trim().toLowerCase();

    if (!q) {
      return this.products;
    }

    return this.products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }

  getStars(rating: number): number[] {
    const full = Math.floor(rating);
    return Array(full).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    const full = Math.floor(rating);
    return Array(5 - full).fill(0);
  }

  shareWhatsApp(p: Product): void {
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  shareTelegram(p: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, "_blank");
  }
  //add
  selectedImageIndex: Record<number, number> = {};

  getActiveImage(p: Product): string {
    const idx = this.selectedImageIndex[p.id] ?? 0;
    return p.images[idx] ?? p.image;
  }

  setImage(p: Product, index: number): void {
    this.selectedImageIndex[p.id] = index;
  }

  prevImage(p: Product): void {
    const current = this.selectedImageIndex[p.id] ?? 0;
    const next = (current - 1 + p.images.length) % p.images.length;
    this.selectedImageIndex[p.id] = next;
  }

  nextImage(p: Product): void {
    const current = this.selectedImageIndex[p.id] ?? 0;
    const next = (current + 1) % p.images.length;
    this.selectedImageIndex[p.id] = next;
  }

  isActive(p: Product, index: number): boolean {
    return (this.selectedImageIndex[p.id] ?? 0) === index;
  }
}


//addit
// добавь в класс ProductListComponent


