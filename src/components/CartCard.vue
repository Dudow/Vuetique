<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal class="q-pa-md col row">
      <div class="img-container">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </div>
      <div class="info-container">
        <div>
          <p class="text-primary">Nome</p>
          <p>25</p>
        </div>
        <div class="qtd-handler">
          <q-btn rounded dense color="primary" size="sx" icon="remove" />
          <p>25</p>
          <q-btn rounded dense color="primary" size="sx" icon="add" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CartCard",
};
</script>

<style scoped lang="scss">
.row {
  height: 100%;
}

.img-container {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.info-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  .qtd-handler {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      margin: 0;
      padding: 6px 12px;
      border-radius: 6px;
      background-color: #ccc;
    }
  }
}
</style>
