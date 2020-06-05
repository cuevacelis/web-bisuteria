<template>
  <section>
    <div class="container">
      <div v-for="producto in productos.Articulos" :key="producto.id">
        <div v-if="producto.nombreProducto =='Aretes de Perla'">
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
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(location.origin + '/data/' + params.Categoria + '.json')
      return { productos: data }
    } catch (e) {
      error({ message: 'Producto no encontrado', statusCode: 404 })
    }
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
