<template>
  <section class="CategoriaDeProductos">
    <section v-if="$fetchState.pending" class="loading">
      <vcl-instagram v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    </section>

    <section v-else-if="$fetchState.error" class="loading_error">
      <ErrorDeComponents :error="$fetchState.error.message " />
    </section>

    <section v-else :class="productos.Categoria">
      <section class="Parte_Superior">
        <h1 class="titulo text-center">
          {{ productos.Categoria }}
        </h1>
      </section>
      <section class="Contenido_Productos">
        <section class="Lista flex flex-wrap">
          <div v-for="producto in productos.Articulos" :key="producto.id" class="Card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <div class="Card_Producto m-6">
              <nuxt-link :to="'/productos/'+ productos.Categoria + '/' + producto.id">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" :src="producto.urlImagen" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2" :to="'/productos/'+ productos.Categoria + '/' + producto.id">
                      {{ producto.nombreProducto }}
                    </div>
                    <div class="mt-5 border-t border-grey-light pt-2  text-xs text-grey hover:text-red uppercase no-underline tracking-wide">
                      Más Información
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </section>
      </section>
    </section>
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
.titulo{
  align-items: center;
}
.card-text{
  font-size: 25px;
}
.comprar{
  color: unset;
  text-decoration: none;
}
</style>
