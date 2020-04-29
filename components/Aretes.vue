/* eslint-disable vue/require-v-for-key */
<template>
  <div class="Aretes">
    <h3 class="titulo_seccion">
      Aretes
    </h3>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in items" :key="item.id" :style="{ backgroundColor:'#882a2a' }">
        {{ item.nombreImagen }}
        <img :src="item.urlImagen" style="width:100%">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      items: [
        { nombreImagen: 'arete1', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89258091_2672137536248394_7004168963361865728_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHS3ApOXwEwlwxztNUjD1VpLhve-myYVNAuG976bJhU0JHunbkj3OdYmXtQ8_IFBZqsZavWrorPpq3yrFNi2MC6&_nc_ohc=D6FpJPFGsmUAX-kQAjZ&_nc_ht=scontent.ftru2-2.fna&oh=b8a834be72ca3fe1722a09cced0fcc4a&oe=5ED03AE5' },
        { nombreImagen: 'arete2', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
  .titulo_seccion{
    text-align: center;
  }
</style>
