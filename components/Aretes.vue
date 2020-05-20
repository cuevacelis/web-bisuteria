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
        { nombreImagen: 'Arete1', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89258091_2672137536248394_7004168963361865728_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHS3ApOXwEwlwxztNUjD1VpLhve-myYVNAuG976bJhU0JHunbkj3OdYmXtQ8_IFBZqsZavWrorPpq3yrFNi2MC6&_nc_ohc=D6FpJPFGsmUAX-kQAjZ&_nc_ht=scontent.ftru2-2.fna&oh=b8a834be72ca3fe1722a09cced0fcc4a&oe=5ED03AE5' },
        { nombreImagen: 'Arete2', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete3', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete4', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete5', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete6', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete7', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete8', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete9', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete10', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete11', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' },
        { nombreImagen: 'Arete12', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89846169_2672137309581750_161852105928212480_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFgmBjYHLpy3K77FwNPk2GhciYcEouAE7lyJhwSi4ATubEJFFugR-Hd0chIb--5x3Q0HwHbGXUQ5x_vntnWq50g&_nc_ohc=VXeMSA1b-XAAX_pJP__&_nc_ht=scontent.ftru2-2.fna&oh=6e1a8dc84f96b03db952a859581c8d30&oe=5ED054AE' }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
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
  width: 50%;
  max-height: 240px;
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
