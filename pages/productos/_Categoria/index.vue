<template>
  <section>
      <h3>
        {{ productos.Categoria }}
      </h3>
      <ul :class=" productos.Categoria">
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow row" v-for="producto in productos.Articulos" :key="producto.id">
                  <img src="producto.urlImagen" class="card-img-top" style="height: 225px; width: 100%; display: block;">
                  <div class="card-body">
                    <p class="card-text">{{ producto.nombreProducto }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Reservar</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
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
