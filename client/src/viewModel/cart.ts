import { ref, computed } from "vue"
import { type Product } from "@/model/products"

export type CartItem = {
  product: Product,
  quantity: number
}
// selectedQty.value = (new Array<number>(products.value.length)).map(_ => 1)

const cart = ref([] as CartItem[])

export const refCart = () => cart

export function addToCart(product: Product) {
  addWithQuantity(product, 1)
}

export function addWithQuantity(product: Product, qty: number) {
  if ((qty|0) < 0) return;
  const item = cart.value.find(item => item.product.id === product.id)
  qty = (qty|0) == 0 ? (1|0) : qty|0
  if (item) {
    item.quantity += qty|0
    if (item.quantity > product.stock) item.quantity = product.stock;
  } else {
    cart.value.push({
      product, quantity: qty > product.stock ? product.stock : qty
    })
  }
}

export const total = computed(() => cart.value.reduce((total, item) => total + (item.product.price * item.quantity), 0))
export const count = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0))

export const showCart = ref(false)