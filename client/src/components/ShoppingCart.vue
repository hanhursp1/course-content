<script setup lang="ts">
import { refCart, addWithQuantity, total } from '@/viewModel/cart'

const cart = refCart()
</script>
<template>
  <div>
    <h1 class="cart title">
      Cart
    </h1>
    <ul class="cart">
      <li v-for="item in cart" :key="item.product.id">
        <img :src="item.product.thumbnail" :alt="item.product.title">
        {{ item.product.title }} x {{ item.quantity }} = $ {{ item.product.price * item.quantity }}
      </li>
      {{ cart.length }} items totalling ${{ total.toFixed(2) }}
    </ul>
  </div>
</template>

<style scoped>
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