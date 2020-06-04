<template>
  <section>
    <p>aun falta :V</p>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageDeUnProductoEnEspecifico',
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
      title: 'prueba'
    }
  }
}
</script>

<style>
</style>
