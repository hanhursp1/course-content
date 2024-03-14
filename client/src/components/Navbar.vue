<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink } from 'vue-router'
import { count, showCart } from '@/viewModel/cart';
import LoginBadge from '@/components/LoginBadge.vue'

let isActive: Ref<boolean> = ref(false)

function toggleMenu() {
  isActive.value = !isActive.value
}

function setMenuActive(val: boolean) {
  isActive.value = val
}

</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" @click="toggleMenu()" class="navbar-burger" :class="{'is-active':isActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active':isActive}">
    <div class="navbar-start">
      <RouterLink to="/" active-class="is-active" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/what" class="navbar-item">
        Click for lizard
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        Documentation
      </RouterLink>

      <RouterLink to="/products" class="navbar-item">
        Products
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item shift-with-cart" :class="{'enabled': showCart}">
        <div class="buttons">
          <button class="button" @click="showCart = !showCart">
            <i class="fas fas-shopping-cart"></i>
            <span class="tag is-primary">{{ count }}</span>
          </button>
        </div>
      </div>
      <div class="navbar-item">
        <LoginBadge/>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

.router-link-exact-active {
  border-bottom: 2px solid #00D2B4;
}

.router-link-active {
  border-bottom: 2px solid #00d2b3;
}

.shift-with-cart {
  transition: 0.2s linear;
}

.shift-with-cart.enabled {
  transform: translatex(-20rem);
}

</style>