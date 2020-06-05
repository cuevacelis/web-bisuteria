<template>
  <section>
    <h3 class="titulo">
      {{ productos.Categoria }}
    </h3>
    <ul :class="productos.Categoria">
      <div class="album py-5">
        <div class="container">
          <div class="col-md-4">
            <div v-for="producto in productos.Articulos" :key="producto.id" class="card mb-4 box-shadow row">
              <img :src="producto.urlImagen" class="card-img-top" style="width: 100%; display: block;">
              <div class="card-body">
                <p class="card-text">
                  {{ producto.nombreProducto }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Comprar
                    </button>
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
  name: 'TodosProductosDeUnaCategoria',
  asyncData ({ params, error }) {
    return axios.get('/data/' + params.categorias + '.json')
      .then((res) => {
        return { productos: res.data }
      })
      .catch((e) => {
        error({ message: 'Producto no encontrado', statusCode: 404 })
      })
  },
  data () {
    return {
      categoria: this.$route.params.categorias
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
.titulo{
  align-items: center;
}
.card{
  border:3px solid rgba(0,0,0,.125);
}
.card-text{
  font-size: 25px;
}
</style>
