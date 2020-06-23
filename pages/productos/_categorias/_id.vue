<template>
  <section class="ProductoEnEspecifico">
    <section v-if="$fetchState.pending" class="loading">
      <vcl-instagram v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    </section>

    <section v-else-if="$fetchState.error" class="loading_error">
      <ErrorDeComponents :error="$fetchState.error.message " />
    </section>

    <section v-else>
      <div v-for="producto in productos.Articulos" :key="producto.id">
        <div v-if="producto.id == id">
          <section class="Contenido_Producto_Especifico m-6">
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-3">
                <img :src="producto.urlImagen" :srcset="producto.urlImagen" :alt="producto.nombreProducto" class="img-fluid">
              </div>
              <div class="row-span-1 col-span-2">
                <form class="form-horizontal" action="/cart/add/3514285" method="post" enctype="multipart/form-data" name="buy">
                  <div class="form-group price_elem row">
                    <label class="col-sm-3 col-md-3 form-control-label nopaddingtop">Precio:</label>
                    <div class="col-sm-8 col-md-9">
                      <span id="product-form-price" class="product-form-price">$80.000</span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Cantidad:</label>
                    <div class="col-sm-8 col-md-9">
                      <input
                        id="input-qty"
                        type="number"
                        class="qty form-control"
                        name="qty"
                        maxlength="5"
                        value="1"
                      >
                    </div>
                  </div>

                  <div class="form-group product-stock product-available row visible">
                    <label class="col-sm-3 col-md-3 form-control-label" />
                    <div class="col-sm-8 col-sm-offset-3 col-md-9 col-md-offset-3">
                      <!--<input type="submit" class="adc btn btn-primary" value="Add to Shopping Cart">-->
                      <a type="button" class="btn btn-secondary" :href="'https://api.whatsapp.com/send?phone=51983475092&text=Hola!%20JadeFashion,%20deseo%20comprar%20el%20producto%20' + producto.nombreProducto + '%20,:)'">Comprar por Whatsapp</a>

                      <!--<a href="javascript:history.back()" class="btn btn-link btn-sm" title="Continue Shopping">← Continue Shopping</a>-->
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3 col-md-3 form-control-label">Descripcion:</label>
                    <div class="col-sm-8 col-md-9 description" />
                  </div>

                  <input type="hidden" value="LQjgrs0/x+30ZDY01BM/OCaRZZpbPAp8UoPiYgLfDuQ=" name="authenticity_token">
                </form>
              </div>
              <div class="row-span-2 col-span-2 ">
                <p>Descripcion:</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { VclInstagram } from 'vue-content-loading'

export default {
  name: 'PageDeUnProductoEnEspecifico',
  components: {
    VclInstagram
  },
  async fetch () {
    this.productos = await this.$http.$get(this.url + '/data/' + this.$route.params.categorias + '.json')
    this.id = this.$route.params.id
  },
  data () {
    return {
      productos: [],
      id: [],
      url: 'https://web-bisuteria.now.sh'
    }
  },
  head () {
    return {
      title: this.productos.Categoria + ' - Jade Fashion'
    }
  }
}
</script>

<style>
.Contenido-Principal{
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
}
.Otros-Articulos{
  background-color: white;
  padding: 20px;
}
</style>
