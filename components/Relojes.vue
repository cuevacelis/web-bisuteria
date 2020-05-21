<template>
  <section class="Relojes">
    <vcl-facebook v-if="!myDataAretes" :speed="2" :primary="'#B1AFAF'" :secondary="'#999'" />
    <div v-else class="contenido__slider">
      <h2 class="titulo__slider">
        Relojes
      </h2>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.id">
          <nuxt-link to="">
            <img :src="item.urlImagen" class="imagen__slider">
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
        { nombreImagen: 'Reloj1', urlImagen: 'https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/89246259_2672160769579404_5690274111725502464_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeF4Y1y8VibV4Owyj5fHqAGOaGlbJphhjX5oaVsmmGGNfjHwbvxA8OCRYhK-Oajl-LlHi-GxmCQGLhi90y09k4Vc&_nc_ohc=prUcd9d0jvQAX-XncOP&_nc_ht=scontent.ftru2-3.fna&oh=36d9d49c8ccdb6d53495f21f90e5da4e&oe=5EE9EC97' },
        { nombreImagen: 'Reloj2', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89920171_2672160692912745_4511410785607483392_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeF259Oku1ya7WKj7x3a7-3tz7Oxr6D9D4TPs7GvoP0PhE3fKO2cMOTWsHSiwYenCVPgjss2nYYYezfMBdjLq2Km&_nc_ohc=KyhByG40MpAAX-3xwXd&_nc_ht=scontent.ftru2-1.fna&oh=e8f625826115349d65c9ed2614f0ee1b&oe=5EEB9313' },
        { nombreImagen: 'Reloj3', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89090689_2672159989579482_8918368645181079552_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_eui2=AeFDG43xxGZZlbc085kYUI4CpGduCeEgUtOkZ24J4SBS04Lbp7qoD05MAPbQPDfTWfAe0LSn6LZNROpb_JCn5JSr&_nc_ohc=9YJHCnRrvjYAX9jurKB&_nc_ht=scontent.ftru2-2.fna&oh=916bada71b46a13064791cb8ddc441b4&oe=5EED204E' },
        { nombreImagen: 'Reloj4', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89789722_2672159892912825_7107041732272848896_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFOwHsIt_TwLlbPKteFsq_dPNKggxpmp_480qCDGman_s7b_9VXpy6xNDdhuyMyz6IV6lp5yNSrEGJV1OeLcaNl&_nc_ohc=ipenTNY5fq8AX_u53Pq&_nc_ht=scontent.ftru2-2.fna&oh=12a2592c82cc6ea248d8a0c2abff019f&oe=5EECCB79' },
        { nombreImagen: 'Reloj5', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89199239_2672159812912833_89161777308237824_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeGju8zc6j4W7PDazClsjCx3j-KfO783zqCP4p87vzfOoAi4MNPmRluxMnE5DdepxJLIQA2BGF2hlK9Pbb1s59SY&_nc_ohc=JK35y_bFNmgAX_ouTzF&_nc_ht=scontent.ftru2-1.fna&oh=267d52e74472ef095cf688e4d241e0d8&oe=5EED2C43' },
        { nombreImagen: 'Reloj6', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89789722_2672159742912840_3891687746854453248_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeFc1M6kYapTSHiuJX1MXcX8IUXeNBSxR_ohRd40FLFH-l6V7O1jR5id_ZwCRErAih6YjZWA28tGUs8VuZNESVep&_nc_ohc=0DMFfayadgkAX8lieFL&_nc_ht=scontent.ftru2-1.fna&oh=c851f6fb587783c83922a61b1cf95a9b&oe=5EEACBB4' },
        { nombreImagen: 'Reloj7', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89153572_2672159636246184_6549235027958300672_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_eui2=AeHgP-ZCytBBwegH5qav1P_3eztTi4vjk797O1OLi-OTv8aYb8IqMZOSiwx50VSoS4hV_exrmcax-v90RhDF2lzh&_nc_ohc=Q2NrylNQ0Y4AX-Ijjk3&_nc_ht=scontent.ftru2-2.fna&oh=b893a80bef283dcd776b72d55d542d4f&oe=5EECF24A' },
        { nombreImagen: 'Reloj8', urlImagen: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89195444_2672159552912859_8094491238025134080_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeHd8VmJrjZ1dcFz_YhKyVdf31bmvNTLzV3fVua81MvNXeIrO6P5wtV10PZtDCMSI9qJBDaxWE2MmDzpkavPqwOm&_nc_ohc=18RTx0mdJzQAX_RARYF&_nc_ht=scontent.ftru2-1.fna&oh=3c72640dc8b6fd6dff1f8fbf808d5743&oe=5EEB286A' },
        { nombreImagen: 'Reloj9', urlImagen: 'https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/89195444_2672159469579534_1152257940749549568_n.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_eui2=AeH324-z_UQqCy3zc-tjp9kkB1THMU9LcwcHVMcxT0tzB8CGcEizWZcZMMk1rtOAcWvsBMoUPwCaSVX5-de0XhHA&_nc_ohc=YaaLTIR3-JsAX8B7Cmj&_nc_ht=scontent.ftru2-3.fna&oh=54c7ddf84c753b5bed20419245c62cbf&oe=5EEC5E60' },
        { nombreImagen: 'Reloj10', urlImagen: 'https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/89058048_2672158942912920_7858392238609399808_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeEDSpQxH-fXhlrj2nbHGiP-6ZJYa_rxHvvpklhr-vEe-ywYZLwgVkhINfA0UrWNdqFgXJe04wuHfGMAtMftrcsO&_nc_ohc=3rimZU5oXr0AX9d83OZ&_nc_ht=scontent.ftru2-3.fna&oh=820a3f4946f442188174a381943e2d92&oe=5EED0E7E' },
        { nombreImagen: 'Reloj11', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89337387_2672158862912928_7101914773977038848_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_eui2=AeE8Cn70xKumyhECiLt5QCMUlwCerVobx-SXAJ6tWhvH5EjiZlAyaK_p-PPcWuELYM7DHoMOLPuxKldZ7jMXo_7V&_nc_ohc=R6FcRlkeACYAX-AWdZR&_nc_ht=scontent.ftru2-2.fna&oh=66673af151cc04b705f8fb59354589b9&oe=5EECB65E' },
        { nombreImagen: 'Reloj12', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89356493_2672158736246274_804845625383321600_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_eui2=AeEVfKPbI49jYz8LAcSbbiTnMRrYraXcdKQxGtitpdx0pDgjln6MFBp-EUQ1HJ9kHJC_oOIpi37QpIjykIaBXTcI&_nc_ohc=9DMfMLZzrFkAX-QEjQl&_nc_ht=scontent.ftru2-2.fna&oh=702d057156dbd971f03ac67f4e4cc00e&oe=5EE9AA8E' },
        { nombreImagen: 'Reloj13', urlImagen: 'https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/89073604_2672158666246281_7661201270618718208_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeFp1ZUkquv6mIqGNRprvVo-dVYflqDc1_J1Vh-WoNzX8oSo8puz6VuOnFnL7R0p1qJ5oXGjLgD8uUApEtjR4a8X&_nc_ohc=wKKW3XJIrK8AX9-0dmu&_nc_ht=scontent.ftru2-2.fna&oh=f6d991d96570efbb1d34ba60111748e6&oe=5EEB4166' }
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
.Relojes{
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
