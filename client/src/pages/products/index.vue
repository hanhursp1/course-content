<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import type { Ref } from 'vue'
  import { type Product, getProducts } from "@/model/products"
  import ProductCard from '@/components/ProductCard.vue'
  import FlyOut from '@/components/FlyOut.vue'
  import { addWithQuantity, showCart } from '@/viewModel/cart'
  import ShoppingCart from '@/components/ShoppingCart.vue'

  
  const products = ref([] as Product[])
  products.value = getProducts()

</script>

<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addWithQuantity" />
  </div>
  <FlyOut :is-open="showCart" >
    <ShoppingCart />
  </FlyOut>
</template>

<style scoped>

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>