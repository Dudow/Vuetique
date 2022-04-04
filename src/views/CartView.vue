<template>
  <div class="home">
    <Cart />
  </div>
</template>

<script lang="ts">
import Cart from "../components/Cart.vue";

export default {
  name: "CartView",
  components: {
    Cart,
  },
};
</script>
