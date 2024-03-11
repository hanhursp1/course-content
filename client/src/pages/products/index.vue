<script setup lang="ts">
  import {
    ref, onMounted, computed
  } from 'vue'
  import type {
    Ref
  } from 'vue'

  import { type Product, getProducts } from "@/model/products"
  import ProductCard from '@/components/ProductCard.vue';
import FlyOut from '@/components/FlyOut.vue';

  const products = ref([] as Product[])

  type CartItem = {
    product: Product,
    quantity: number
  }
  // selectedQty.value = (new Array<number>(products.value.length)).map(_ => 1)

  const cart = ref([] as CartItem[])

  function addToCart(product: Product) {
    addWithQuantity(product, 1)
  }

  function addWithQuantity(product: Product, qty: number) {
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

  const total = computed(() => cart.value.reduce((total, item) => total + (item.product.price * item.quantity), 0))

  products.value = getProducts()


</script>

<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addWithQuantity" />
  </div>
  <FlyOut :is-open="true">
    <h1 class="cart">
      Cart
    </h1>
    <ul class="cart">
      <li v-for="item in cart" :key="item.product.id">
        <img :src="item.product.thumbnail" :alt="item.product.title">
        {{ item.product.title }} x {{ item.quantity }} = $ {{ item.product.price * item.quantity }}
      </li>
      {{ cart.length }} items totalling ${{ total.toFixed(2) }}
    </ul>
  </FlyOut>
</template>

<style scoped>

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .cart {
    list-style: none;
    padding: 0;
  }

  .cart img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
</style>