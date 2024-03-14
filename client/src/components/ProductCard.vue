<script setup lang="ts">
import { type Product } from '@/model/products';
import { type Ref, ref } from 'vue';

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  addToCart: [product: Product, qty: number]
}>()

let qty = ref(0)

</script>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="product.thumbnail" :alt="product.title">
    </div>
    <div class="card-content">
      <p class="price">${{ product.price }}</p>
      <h1>{{ product.title }}</h1>
      <i>{{ product.brand }}</i>
      <p>{{ product.description }}</p>
      <button @click="emit('addToCart', product, qty)" class="button is-primary">Add to Cart</button>
      <br>
      <input type="number" v-model="qty" placeholder="Quantity">
    </div>
  </div>
</template>

<style scoped>
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
</style>