import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Iphone 15 pro",
    description: "Apple iPhone 15 Pro features a powerful A17 Pro chip and a titanium design.",
    price: 900000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc6/h71/86302551736350.jpg?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h4d/hf0/86319889678366.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hb3/ha6/86319889711134.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/ha6/h49/86319889743902.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-sinii-113138331/?c=750000000",
    likes:0,
    categoryId: 1,
    isFavorite: false
  },
  {
    id: 2,
    name: "Наушники Apple AirPods 4 белый",
    description: "хороший наушник",
    price: 60821,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h4d/hf0/86319889678366.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hb3/ha6/86319889711134.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/ha6/h49/86319889743902.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000",
    likes:0,
    categoryId: 3,
    isFavorite: false
  },
  {
    id: 3,
    name: "Iphone 17 pro",
    description: "Apple iPhone 17 Pro features a powerful A17 Pro chip and a titanium design.",
    price: 900000,
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h4d/hf0/86319889678366.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/hb3/ha6/86319889711134.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/ha6/h49/86319889743902.jpg?format=gallery-medium"],
    link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
    likes:0,
    categoryId: 4,
    isFavorite: false
  }
];
