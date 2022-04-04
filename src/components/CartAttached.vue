<template>
  <q-drawer
    v-model="isOpen"
    show-if-above
    bordered
    class="bg-grey-2"
    side="right"
  >
    <q-table
      title="Cart Preview"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
      hide-header
      hide-bottom
    />
  </q-drawer>
</template>

<script>
const columns = [
  {
    required: true,
    align: "left",
    field: "name",
  },
  {
    align: "center",
    field: "calories",
    format: (val) =>
      `${Number(val).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}`,
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
  {
    name: "total",
    calories: 21,
  },
];

let total = 0;
rows.map((row) => {
  total = total + row.calories;
});

export default {
  name: "CartAttached",
  props: {
    isOpen: Boolean,
  },
  setup() {
    return {
      columns,
      rows,
      initialPagination: {
        page: 1,
        rowsPerPage: 30,
      },
      total,
    };
  },
};
</script>

<style>
.my-menu-link {
  color: white;
  background: #f2c037;
}
</style>
