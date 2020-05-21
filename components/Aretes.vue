<template>
  <section class="Aretes">
    <vcl-facebook v-if="!myDataAretes" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <div v-else class="contenido__aretes">
      <h2 class="titulo__aretes">
        Aretes
      </h2>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.id">
          <a href="">
            <img :src="item.urlImagen" class="img__aretes">
            <p class="texto__aretes">
              {{ item.nombreImagen }}
            </p>
          </a>
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
        { nombreImagen: 'Aretes de Perla', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89258091_2672137536248394_7004168963361865728_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHS3ApOXwEwlwxztNUjD1VpLhve-myYVNAuG976bJhU0JHunbkj3OdYmXtQ8_IFBZqsZavWrorPpq3yrFNi2MC6&_nc_ohc=y7AsA_q-0T4AX9Wh06o&_nc_ht=scontent.ftru2-2.fna&oh=a5dacadb160f8ce0d0df9f44b3728d19&oe=5EEBEA65' },
        { nombreImagen: 'Arete2', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89255553_2672137422915072_7991289710842478592_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeHBZ0vCakyi0c4oRlaU3eAt_twg_MuFPD3-3CD8y4U8PcBK8Z2kYfxLQVmeDdKIz2FaRKWCDAqvZ02vXNVWupo2&_nc_ohc=4Sr0sGvyProAX8f50g3&_nc_ht=scontent.ftru2-1.fna&oh=8e3813101676d2f5674d9d18d6ae90a8&oe=5EEBEFAE' },
        { nombreImagen: 'Arete3', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89430467_2672137206248427_7443065898904059904_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHOOc9OTPmdcFKwtOcVrNc1Yk2PToEZfJpiTY9OgRl8miIecbSUU5qPTjI1Lnw1_xCAsBpGLc59hBVf-WySEkJZ&_nc_ohc=u7jCJyv6r0QAX_4zhZQ&_nc_ht=scontent.ftru2-2.fna&oh=76ba27b416bfa651ff616991a9babc7a&oe=5EECBE44' },
        { nombreImagen: 'Arete4', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89227356_2672137099581771_1494311945111601152_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeGQFTw5SqiWTqsxB2nVLxyxlvRraO2RzQWW9Gto7ZHNBU2LQeXnphJ0QVvAQsgez7Ti2aI7n-N4gSDGLltLMg5i&_nc_ohc=zaGZv6NGIFoAX9yKId7&_nc_ht=scontent.ftru2-1.fna&oh=18bbf466d4e21fa1e3f1565d33667662&oe=5EEA560C' },
        { nombreImagen: 'Arete5', urlImagen: 'https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/89286148_2672136959581785_1217372260591992832_n.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_eui2=AeEwcNbuOcJ8vXQ5-4Fr_6aeQbOgZG53Ai9Bs6BkbncCL6_NjCSLWXMjByqp0PqG0Dw7IhL5170las1bO7FOwbBJ&_nc_ohc=n9gWBDd8n_oAX-Uc35v&_nc_ht=scontent.ftru2-3.fna&oh=19b7f8dfa4ca63dd46087c4547596e78&oe=5EEA2285' },
        { nombreImagen: 'Arete6', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89343026_2672136889581792_9035239812021354496_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeFNX9NUX3NkA41FAmOuZskAG50ZCoQuYCIbnRkKhC5gImwtUf4823waZqKTxSS3pGfBI2ZzHHvzHJ14tf07Hn2m&_nc_ohc=kxYGpxx_dEMAX_1hJ4r&_nc_ht=scontent.ftru2-2.fna&oh=b2b820db1b563775845c53f5bafc73da&oe=5EEB464C' },
        { nombreImagen: 'Arete7', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89355466_2672136796248468_5518171619668787200_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeGYnEEV0uWR_3F77aipMHJYNtYLrIt9ql021gusi32qXZ8049pynrNi1oc01QEMNaYT_veSbRvIlOIK4J_o4iIo&_nc_ohc=V-ZXJyacr7IAX_fOijZ&_nc_ht=scontent.ftru2-2.fna&oh=dbfb4c558c0417c63330feeb0982145e&oe=5EEA4087' }
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 5,
        lazy: true,
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
.Aretes{
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.img__aretes{
  width: 100%;
  max-height: 320px;
}
.texto__aretes{
  color: black;
  font-size: inherit;
  line-height: 18px;
  margin: 5px 0 0;
  max-height: 36px;
  overflow: hidden;
  text-align: center
}
</style>
