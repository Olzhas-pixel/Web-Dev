export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;     // KZT
  rating: number;    // 1..5 (decimal ok)
  image: string;
  images: string[];
  link: string;      // kaspi.kz product url
}
