<template>
  <q-page class="cards-container q-pa-xl">
    <CartCard />
    <CartCard />
    <CartCard />
  </q-page>
</template>

<style scoped lang="scss">
.cards-container {
  display: grid;
  grid-template-rows: repeat(auto-fit, 180px);
  grid-column-gap: 1rem;
  row-gap: 1rem;
}
</style>

<script>
import CartCard from "./CartCard.vue";
export default {
  components: { CartCard },
  name: "Cart",
};
</script>
