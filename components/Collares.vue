<template>
  <section class="Brazaletes">
    <vcl-facebook v-if="!myDataAretes" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <div v-else class="contenido__slider">
      <h2 class="titulo__slider">
        Brazaletes
      </h2>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.id">
          <nuxt-link to="">
            <img :data-src="item.urlImagen" class="swiper-lazy imagen__slider">
            <div class="swiper-lazy-preloader" />
            <p class="texto__slider">
              {{ item.nombreImagen }}
            </p>
          </nuxt-link>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev" />
        <div slot="button-next" class="swiper-button-next" />
      </swiper>
    </div>
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
  data () {
    return {
      myDataAretes: null,
      items: [
        { nombreImagen: 'item1', urlImagen: '' },
        { nombreImagen: 'item2', urlImagen: '' }
      ],
      swiperOption: {
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
            spaceBetween: 5
          },
          1120: {
            slidesPerView: 5,
            spaceBetween: 5
          },
          1300: {
            slidesPerView: 6,
            spaceBetween: 5
          }
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    this.myDataAretes = 'Cargado'
  }
}
</script>

<style>
.Brazaletes{
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.imagen__slider{
  width: 100%;
  max-height: 280px;
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
