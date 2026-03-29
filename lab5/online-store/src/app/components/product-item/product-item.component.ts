import { Component } from "@angular/core";
import { Product } from "../../models/product.model";
import { input, output } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-product-item",
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: "./product-item.component.html",
  styleUrl: "./product-item.component.css",
})
export class ProductItemComponent {

  product = input.required<Product>();

  like = output<number>();
  delete = output<number>();

  shareWhatsApp(p: Product): void {
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  shareTelegram(p: Product): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, "_blank");
  }
  favorite = output<number>();
}
