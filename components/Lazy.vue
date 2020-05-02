<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-2.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-3.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-4.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-5.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <swiper-slide>
      <img data-src="https://swiperjs.com/demos/images/nature-6.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white" />
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
    <div slot="button-next" class="swiper-button-next swiper-button-white" />
    <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'SwiperExampleLazyLoadingImage',
  title: 'Lazy loading images',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        // Enable lazy loading
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
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

<style lang="scss" scoped>
  @import '~/assets/scss/base.scss';
  .swiper-slide {
    text-align: center;
    background: #444 !important;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
</style>
