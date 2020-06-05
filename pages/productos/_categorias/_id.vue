<template>
  <section>
    <div class="container">
      <div v-for="producto in productos.Articulos" :key="producto.id">
        <div v-if="producto.id == params.id">
          <img :src="producto.urlImagen" class="card-img-top" style="width: 100%; display: block;">
          <div>
            {{ producto.nombreProducto }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageDeUnProductoEnEspecifico',
  asyncData ({ params, error }) {
    return axios.get('/data/' + params.categorias /* +'params.id' */+ '.json')
      .then((res) => {
        return { productos: res.data, params }
      })
      .catch((e) => {
        error({ message: 'Producto no encontrado', statusCode: 404 })
      })
  },
  data () {
    return {
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
