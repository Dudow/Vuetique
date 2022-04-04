<template>
  <q-drawer v-model="isOpen" show-if-above bordered class="bg-grey-2">
    <q-list padding class="rounded-borders">
      <q-item-label header>Pages</q-item-label>
      <q-item
        clickable
        to="/"
        exact
        active-class="my-menu-link"
        class="q-mx-lg rounded-borders q-mb-sm"
      >
        <q-item-section avatar>
          <q-icon name="shopping_bag" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        to="/cart"
        exact
        active-class="my-menu-link"
        class="q-mx-lg rounded-borders"
      >
        <q-item-section avatar>
          <q-icon name="shopping_cart" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cart</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isOpen: Boolean,
  },
};
</script>

<style>
.my-menu-link {
  color: white;
  background: #f2c037;
}
</style>
