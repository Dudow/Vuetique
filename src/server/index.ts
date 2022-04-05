import { createServer, Model } from "miragejs";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export function makeServer() {
  const server = createServer({
    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    seeds(server) {
      server.db.loadData({
        products: [
          {
            id: 1,
            title: "Kindle",
            image:
              "https://t.ctcdn.com.br/ZW7-H9fbxIHGrQrpB55tlFjhJwE=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413095.png",
            price: 400,
            quantity: 2,
          },
          {
            id: 2,
            title: "Violin",
            image:
              "https://http2.mlstatic.com/D_NQ_NP_641180-MLB43416908232_092020-O.jpg",
            price: 3600,
            quantity: 2,
          },
        ],
      });
    },

    routes() {
      this.namespace = "api/cart";

      this.get("/", () => {
        return this.schema.all("product");
      });

      this.patch("/products/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        return "changed";
      });

      this.delete("/products/:id");
    },
  });

  return server;
}
