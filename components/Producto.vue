<template>
  <section class="Producto m-6 bg-white">
    <section v-if="$fetchState.pending" class="loading">
      <vcl-facebook :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    </section>
    <section v-else-if="$fetchState.error" class="loading_error">
      <div class="mssg_error">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p class="font-bold">
            Error al Obtener Datos!
          </p>
          <p>{{ $fetchState.error.message }}</p>
        </div>
      </div>
    </section>
    <section v-else :class="productos.Categoria">
      <div class="Contenido_Producto">
        <section class="Header_Producto">
          <span class="titulo__slider">
            {{ productos.Categoria }}
          </span>
          <nuxt-link :to="'/productos/'+productos.Categoria">
            <span class="text-blue-600">
              Ver más
            </span>
          </nuxt-link>
        </section>
        <section class="Body_Producto">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="producto in productos.Articulos" :key="producto.id">
              <nuxt-link :to="'/productos/'+ productos.Categoria + '/' + producto.id">
                <img :src="producto.urlImagen">
                <p class="texto__slider">
                  {{ producto.nombreProducto }}
                </p>
              </nuxt-link>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
            <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
            <div slot="button-next" class="swiper-button-next swiper-button-white" />
          </swiper>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { VclFacebook } from 'vue-content-loading'
import 'swiper/css/swiper.css'

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
    this.productos = await this.$http.$get(this.url + '/data/' + this.tipo + '.json')
  },
  data () {
    return {
      url: 'https://web-bisuteria.now.sh',
      productos: [],
      swiperOption: {
        lazy: true,
        loop: true,
        breakpoints: {
          200: {
            slidesPerView: 2,
            spaceBetween: 4
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 8
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 12
          },
          1600: {
            slidesPerView: 7,
            spaceBetween: 14
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
  computed: {
    reversedMessage () {
      // `this` apunta a la instancia vm
      return this.message.split('').reverse().join('')
    }
  },
  activated () {
    if (this.$fetchState.timestamp <= (Date.now() - 600000)) {
      this.$fetch()
    }
  },
  fetchOnServer: false
}
</script>

<style>
.swiper-slide {
  text-align: center;
}
.titulo__slider{
  color: #444;
  font-weight: 400;
  font-size: 2rem;
}
.texto__slider{
  color: rgb(24, 24, 24);
  font-size: inherit;
  margin: 5px 0 0;
  max-height: 36px;
  overflow: hidden;
}
</style>
