<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal class="q-pa-md col row">
      <div class="img-container">
        <q-img :src="item.image" />
      </div>
      <div class="info-container">
        <div>
          <p class="text-primary">{{ item.title }}</p>
          <p>
            {{
              Number(item.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </p>
          <p @click="deleteProduct(item)">Excluir</p>
        </div>
        <div class="qtd-handler">
          <q-btn rounded dense color="primary" size="sx" icon="remove" />
          <p>{{ item.quantity }}</p>
          <q-btn
            rounded
            dense
            color="primary"
            size="sx"
            icon="add"
            @click="addProduct(item)"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import store from "../store";
import { api } from "@/services/api";

export default {
  name: "CartCard",
  props: ["item"],
  methods: {
    addProduct(product) {
      store.dispatch("addProduct", product);
    },
    async deleteProduct({ id }) {
      await api.delete(`cart/products/${id}`);

      store.dispatch("getCart");
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  height: 100%;
}

.img-container {
  width: 200px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  overflow: hidden;

  img {
    max-width: 20px;
  }
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
