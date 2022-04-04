<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Vuetique </q-toolbar-title>

        <div>
          <q-btn
            round
            color="amber"
            icon="shopping_cart"
            class="q-mr-lg"
            @click="rightDrawerOpen = !rightDrawerOpen"
          />
        </div>
      </q-toolbar>
    </q-header>

    <Navbar :isOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <CartAttached :isOpen="rightDrawerOpen" />
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";
import CartAttached from "./components/CartAttached.vue";

export default {
  name: "LayoutDefault",

  components: {
    Navbar,
    HomeView,
    CartAttached,
    HomeView,
  },
  setup() {
    return {
      leftDrawerOpen: ref(false),
      rightDrawerOpen: ref(false),
    };
  },
};
</script>
