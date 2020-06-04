<template>
  <section>
    <p>xd</p>
    <p>
      {{ productos.Categoria }}
    </p>
    <ul :class=" productos.Categoria">
      <li v-for="producto in productos.Articulos" :key="producto.id">
        <p>
          {{ producto.nombreProducto }}
        </p>
        <img
          :src="producto.urlImagen"
        >
      </li>
    </ul>
    <div />
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PaginaDeProductosDeCiertaCategoria',
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get('http://localhost:3000/data/' + params.Categoria + '.json')
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
      title: this.productos.Categoria + ' - Jade Fashion'
    }
  }
}
</script>

<style>
</style>
