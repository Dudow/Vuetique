<template>
  <q-page class="cards-container q-pa-xl">
    <Card />
    <Card />
    <Card />
  </q-page>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  grid-column-gap: 1rem;
  row-gap: 2rem;
}
</style>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "Home",
};
</script>
