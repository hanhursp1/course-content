import products from "@/data/products.json"

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

function getProducts(): Product[] {
  return products.items as Product[]
}

// function getProduct(product_id: number): Product {
//   return {} as Product
// }