<template>
  <q-card class="my-card card">
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
      <div class="absolute-bottom">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </div>
    </q-img>

    <q-card-actions>
      <q-btn outline color="amber" label="Buy" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  height: fit-content;
}
</style>
