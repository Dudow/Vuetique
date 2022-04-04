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
      <q-item v-ripple v-for="row in rows" :key="row.price">
        <q-item-section class="col-7">{{ row.name }}</q-item-section>
        <q-item-section class="col">({{ row.qtd }})</q-item-section>
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
        <q-item-section class="col">({{ totalQtd }})</q-item-section>
        <q-item-section avatar>
          {{
            Number(totalPrice).toLocaleString("en-US", {
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
const rows = [
  {
    name: "Frozen Yogurt",
    price: 159,
    qtd: 1,
  },
  {
    name: "Ice cream sandwich",
    price: 237,
    qtd: 1,
  },
  {
    name: "Eclair",
    price: 262,
    qtd: 1,
  },
  {
    name: "Cupcake",
    price: 305,
    qtd: 1,
  },
  {
    name: "Gingerbread",
    price: 356,
    qtd: 1,
  },
  {
    name: "Jelly bean",
    price: 375,
    qtd: 1,
  },
  {
    name: "Lollipop",
    price: 392,
    qtd: 1,
  },
  {
    name: "Honeycomb",
    price: 408,
    qtd: 1,
  },
  {
    name: "Donut",
    price: 452,
    qtd: 1,
  },
  {
    name: "KitKat",
    price: 518,
    qtd: 1,
  },
];

export default {
  name: "CartAttached",
  props: {
    isOpen: Boolean,
  },
  setup() {
    return {
      rows,
    };
  },
  data() {
    return {
      totalPrice: 0,
      totalQtd: 0,
    };
  },
  methods: {
    getTotalPrice() {
      let tempTotal = 0;

      rows.map((row) => {
        tempTotal = tempTotal + row.price;
      });

      this.totalPrice = tempTotal;
    },
    getTotalQtd() {
      let tempTotal = 0;

      rows.map((row) => {
        tempTotal = tempTotal + row.qtd;
      });

      this.totalQtd = tempTotal;
    },
  },
  mounted() {
    this.getTotalPrice();
    this.getTotalQtd();
  },
};
</script>

<style>
.my-menu-link {
  color: white;
  background: #f2c037;
}
</style>
