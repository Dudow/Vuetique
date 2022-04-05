<template>
  <q-page class="cards-container q-pa-xl">
    <CartCard
      v-for="cartItem in cart.products"
      :key="cartItem.id"
      :item="cartItem"
    />
  </q-page>
</template>

<script>
import CartCard from "./CartCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { CartCard },
  name: "Cart",
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["getCart"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped lang="scss">
.cards-container {
  display: grid;
  grid-template-rows: repeat(auto-fit, 180px);
  grid-column-gap: 1rem;
  row-gap: 1rem;
}
</style>
