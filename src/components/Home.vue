<template>
  <q-intersection transition="scale" class="example-item">
    <q-page class="cards-container q-pa-xl">
      <Card
        v-for="cartItem in cart.products"
        :key="cartItem.id"
        :item="cartItem"
      />
    </q-page>
  </q-intersection>
</template>

<script>
import Card from "./Card.vue";
import store from "../store";
import { mapState } from "vuex";

export default {
  components: { Card },
  name: "Home",
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    getCart() {
      store.dispatch("getCart");
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  grid-column-gap: 1rem;
  row-gap: 2rem;
}
</style>
