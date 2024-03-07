<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

import { type Product, getProducts } from "@/model/products"

const products = ref([] as Product[])

type CartItem = {
  product: Product,
  quantity: number
}

const selectedQty = ref([] as number[])
selectedQty.value = new Array<number>(products.value.length)

const cart = ref([] as CartItem[])

function addToCart(product: Product) {
  addWithQuantity(product, 1)
}

function addWithQuantity(product: Product, qty: number) {
  if (qty <= 0) return;
  const item = cart.value.find(item => item.product.id === product.id)
  if (item) {
    item.quantity += qty|0
  } else {
    cart.value.push({
      product, quantity: qty|0
    })
  }
}

products.value = getProducts()


</script>

<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="card">
      <div class="card-image">
        <img :src="product.thumbnail" :alt="product.title">
      </div>
      <div class="card-content">
        <p class="price">${{ product.price }}</p>
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <button @click="addWithQuantity(product, selectedQty[product.id - 1])" class="button is-primary">Add to Cart</button>
        <input type="number" v-model="selectedQty[product.id - 1]" placeholder="0">
      </div>
    </div>
    <div class="flyout">
      <h1 class="cart">
        Cart
      </h1>
      <ul class="cart">
        <li v-for="item in cart" :key="item.product.id">
          <img :src="item.product.thumbnail" :alt="item.product.title">
          {{ item.product.title }} x {{ item.quantity }} = $ {{ item.product.price * item.quantity }}
        </li>
      </ul>
      
    </div>
  </div>
</template>

<style scoped>

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card {
    flex-basis: 18rem;
  }

  h3 {
    font-weight: bold;
  }

  h1 {
    font-size: xx-large;
  }

  .price {
    font-weight: bold;
    font-size: xx-large;
    color: rgb(204, 64, 158);
  }

  .flyout {
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: -1px 0 5px 0 black;
    z-index: 100;
    transform: translateX(80%);
    transition: transform .3s;
    padding: 1rem;
  }

  .flyout.open, .flyout:hover {
    transform: translateX(0);
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