<template>
  <section :class="items.Tipo">
    <vcl-facebook v-if="$fetchState.pending" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <p v-else-if="$fetchState.error">
      Error al Obtener Datos: {{ $fetchState.error.message }}
    </p>
    <div v-else class="contenido__slider">
      <nuxt-link :to="'/productos/'+items.Categoria">
        <h2 class="titulo__slider">
          {{ items.Categoria }}
        </h2>
      </nuxt-link>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in items.Articulos" :key="item.id">
          <nuxt-link :to="'/productos/'+ items.Categoria + '/' + item.nombreProducto">
            <figure class="figure__slider">
              <img :data-src="item.urlImagen" class="swiper-lazy imagen__slider">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-black imagen__preload" />
            </figure>
            <p class="texto__slider">
              {{ item.nombreProducto }}
            </p>
          </nuxt-link>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
        <div slot="button-next" class="swiper-button-next swiper-button-white" />
      </swiper>
    </div>
  </section>
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
    this.items = await this.$http.$get(location.origin + '/data/' + this.tipo + '.json')
  },
  data () {
    return {
      items: [],
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
  },
  activated () {
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  }
}
</script>

<style>
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
