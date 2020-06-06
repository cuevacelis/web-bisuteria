<template>
  <section>
    <vcl-instagram v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <p v-else-if="$fetchState.error">
      Error al Obtener Datos: {{ $fetchState.error.message }}
    </p>
    <div v-else class="container">
      <div v-for="producto in productos.Articulos" :key="producto.id">
        <div v-if="producto.id == id">
          <img :src="producto.urlImagen" class="card-img-top" style="width: 100%; display: block;">
          <div>
            {{ producto.nombreProducto }}
          </div>
          <p> aqui iria la descripcion del producto</p>
          <a type="button" class="btn btn-sm btn-outline-secondary" :href="'https://api.whatsapp.com/send?phone=51983475092&text=Hola!%20JadeFashion,%20deseo%20comprar%20el%20producto%20' + producto.nombreProducto + '%20,:)'">Comprar</a>
        </div>
      </div>
    </div>
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
      title: 'prueba'
    }
  }
}
</script>

<style>
</style>
