import { Component, input, output } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductItemComponent } from "../../components/product-item/product-item.component";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {
  products = input.required<Product[]>();

  // events to parent (App) if you want service updates there later
  deleteProduct = output<number>();
  likeProduct = output<number>();
  favoriteProduct = output<number>();

  view: Product[] = [];

  ngOnInit(): void {
    this.view = [...this.products()];
  }

  ngOnChanges(): void {
    this.view = [...this.products()];
  }

  onDelete(id: number): void {
    this.view = this.view.filter((p) => p.id !== id);
    this.deleteProduct.emit(id);
  }

  onLike(id: number): void {
    const p = this.view.find((x) => x.id === id);
    if (p) {
      p.likes += 1;
    }
    this.likeProduct.emit(id);

  }
  onFavorite(id: number): void {
    this.favoriteProduct.emit(id);
  }
}
