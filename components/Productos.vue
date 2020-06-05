<template>
  <div>
    <section v-if="$fetchState.pending" class="Cargando_Datos">
      <vcl-facebook :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    </section>
    <section v-else-if="$fetchState.error" class="error_carga">
      <p>
        Error al Obtener Datos: {{ $fetchState.error.message }}
      </p>
    </section>
    <section v-else :class="productos.Tipo">
      <div class="contenido__slider">
        <nuxt-link :to="'/productos/'+productos.Categoria">
          <h2 class="titulo__slider">
            {{ productos.Categoria }}
          </h2>
        </nuxt-link>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="producto in productos.Articulos" :key="producto.id">
            <nuxt-link :to="'/productos/'+ productos.Categoria + '/' + producto.id">
              <figure class="figure__slider">
                <img :data-src="producto.urlImagen" class="swiper-lazy imagen__slider">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-black imagen__preload" />
              </figure>
              <p class="texto__slider">
                {{ producto.nombreProducto }}
              </p>
            </nuxt-link>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
          <div slot="button-next" class="swiper-button-next swiper-button-white" />
        </swiper>
      </div>
    </section>
    <div />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { VclFacebook } from 'vue-content-loading'

export default {
  components: {
    Swiper,
    SwiperSlide,
    VclFacebook
  },
  props: {
    tipo: {
      type: String,
      default: ''
    }
  },

  async fetch () {
    this.productos = await this.$http.$get('/data/' + this.tipo + '.json')
  },
  data () {
    return {
      productos: [],
      swiperOption: {
        lazy: true,
        loop: true,
        breakpoints: {
          200: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 10
          },
          1600: {
            slidesPerView: 7,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
.Cargando_Datos{
  margin: 25px;
}
.Producto{
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.imagen__slider{
  width: 100%;
  max-height: 280px;
}
.imagen__preload{
  justify-content: center;
  align-items: center;
}
.texto__slider{
  color: black;
  font-size: inherit;
  line-height: 18px;
  margin: 5px 0 0;
  max-height: 36px;
  overflow: hidden;
  text-align: center
}
</style>
