<template>
  <section class="CategoriaDeProductos">
    <vcl-instagram v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <p v-else-if="$fetchState.error">
      <ErrorDeComponents />
      Error al Obtener Datos: {{ $fetchState.error.message }}
    </p>
    <div v-else>
      <h3 class="titulo">
        {{ productos.Categoria }}
      </h3>
      <ul class="Producto">
        <section :class="productos.Categoria">
          <div class="container">
            <div class="row">
              <div v-for="producto in productos.Articulos" :key="producto.id" class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img :src="producto.urlImagen" class="card-img-top" style="width: 100%; display: block;">
                  <div class="card-body">
                    <p class="card-text">
                      {{ producto.nombreProducto }}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a type="button" class="btn btn-sm btn-outline-secondary" :href="'https://api.whatsapp.com/send?phone=51983475092&text=Hola!%20JadeFashion,%20deseo%20comprar%20el%20producto%20' + producto.nombreProducto + '%20,:)'">Comprar</a>

                        <nuxt-link type="button" class="btn btn-sm btn-outline-secondary" :to="'/productos/'+ productos.Categoria + '/' + producto.id">
                          Mas Información
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ul>
    </div>
  </section>
</template>

<script>
import { VclInstagram } from 'vue-content-loading'
const ErrorDeComponents = () => import('@/components/componentes_de_control/ErrorDeComponents')
export default {
  name: 'TodosProductosDeUnaCategoria',
  components: {
    VclInstagram,
    ErrorDeComponents
  },
  async fetch () {
    this.productos = await this.$http.$get(this.url + '/data/' + this.$route.params.categorias + '.json')
  },
  data () {
    return {
      productos: [],
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
.Producto{
  padding-left: 15px;
  padding-right: 15px;
}
.titulo{
  align-items: center;
}
.card{
  border:3px solid rgba(0,0,0,.125);
}
.card-text{
  font-size: 25px;
}
.comprar{
  color: unset;
  text-decoration: none;
}
</style>
