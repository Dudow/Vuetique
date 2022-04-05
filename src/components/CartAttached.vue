<template>
  <q-drawer
    v-model="isOpen"
    show-if-above
    bordered
    class="bg-grey-2"
    side="right"
  >
    <q-list bordered>
      <q-item v-ripple>
        <q-item-section>Cart Preview</q-item-section>
      </q-item>
      <q-item v-ripple v-for="row in cart.products" :key="row.price">
        <q-item-section class="col-7">{{ row.title }}</q-item-section>
        <q-item-section class="col">({{ row.quantity }})</q-item-section>
        <q-item-section avatar>
          {{
            Number(row.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item v-ripple class="text-orange">
        <q-item-section class="col-7">Total</q-item-section>
        <q-item-section class="col">({{ getTotalQtt }})</q-item-section>
        <q-item-section avatar>
          {{
            Number(getTotalPrice).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "CartAttached",
  props: {
    isOpen: Boolean,
  },
  async mounted() {
    await this.getCart();
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalPrice", "getTotalQtt"]),
  },
  methods: {
    ...mapActions(["getCart"]),
  },
};
</script>

<style>
.my-menu-link {
  color: white;
  background: #f2c037;
}
</style>
