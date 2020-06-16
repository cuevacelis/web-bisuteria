<template>
  <section class="main bg-gray-200">
    <section class="contenido_banner_principal">
      <swiper class="slider swiper" :options="swiperOption">
        <swiper-slide class="slider slide-1">
          <div class="texto">
            <div class="title">
              ELLA DIRA "SÍ"
            </div>
            <div class="subtitle">
              ANILLO DE COMPROMISO
            </div>
            <nuxt-link type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/productos">
              VER ANILLOS
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide class="slider slide-2">
          <div class="texto">
            <div class="title">
              HAZ TU VIDA MEJOR
            </div>
            <div class="subtitle">
              JOYAS GENUINAS
            </div>
            <nuxt-link type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/productos">
              VER JOYAS
            </nuxt-link>
          </div>
        </swiper-slide>
        <swiper-slide class="slider slide-3">
          <div class="texto">
            <div class="title">
              COLLARES
            </div>
            <div class="subtitle">
              COLLAR VIRGEN DE LA PUERTA
            </div>
            <nuxt-link type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" to="/productos">
              VER COLLARES
            </nuxt-link>
          </div>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
        <div slot="button-next" class="swiper-button-next swiper-button-white" />
      </swiper>
    </section>

    <section class="contenido_texto_principal p-8">
      <section class="banner_informativo flex justify-center">
        <div class="bg-teal-100  border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1">
              <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            </div>
            <div>
              <p class="font-bold py-1">
                Jade Fashion
              </p>
              <p class="text-sm">
                Compra aretes, relojes, collares, joyas elaboradas en oro y plata peruana.
              </p>
              <p class="text-sm">
                Alianzas, anillos de compromiso, etc.
              </p>
            </div>
          </div>
          <div class="flex justify-center py-1 pb-1">
            <nuxt-link type="button" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-700 rounded" to="/productos">
              Ver Productos
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="collares">
        <section class="titulo">
          <h1>Collares</h1>
        </section>
        <section class="productos_inicio flex flex-wrap">
          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="contenido-producto p-2 m-2 rounded-md bg-white shadow-lg">
              <img
                class="rounded-md"
                src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/12931187_873954479400051_8645130464251015395_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeGw5Hp_VExEFGVwl3_MORixExKKVRv-fS8TEopVG_59L9Ccgrm2Osdzqus2o9pGiTL_L_b3jn6jytRRiib6Mu5X&_nc_ohc=PcHwXho9veUAX8i4p6r&_nc_ht=scontent.ftru2-3.fna&oh=adeb2e75eab1aa97a7b415c56cbcde13&oe=5EFF73E9"
                alt="anillo de trebol"
                loading="lazy"
              >
              <h2 class="titulo_imagen">
                Collares
              </h2>
              <p class="precio">
                $50
              </p>
            </div>
          </section>
          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="contenido-producto p-2 m-2 rounded-md bg-white shadow-lg">
              <img
                class="rounded-md"
                src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/12931187_873954479400051_8645130464251015395_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeGw5Hp_VExEFGVwl3_MORixExKKVRv-fS8TEopVG_59L9Ccgrm2Osdzqus2o9pGiTL_L_b3jn6jytRRiib6Mu5X&_nc_ohc=PcHwXho9veUAX8i4p6r&_nc_ht=scontent.ftru2-3.fna&oh=adeb2e75eab1aa97a7b415c56cbcde13&oe=5EFF73E9"
                alt="anillo de trebol"
                loading="lazy"
              >
              <h2 class="titulo_imagen">
                Collares
              </h2>
              <p class="precio">
                $50
              </p>
            </div>
          </section>
          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="contenido-producto p-2 m-2 rounded-md bg-white shadow-lg">
              <img
                class="rounded-md"
                src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/12931187_873954479400051_8645130464251015395_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeGw5Hp_VExEFGVwl3_MORixExKKVRv-fS8TEopVG_59L9Ccgrm2Osdzqus2o9pGiTL_L_b3jn6jytRRiib6Mu5X&_nc_ohc=PcHwXho9veUAX8i4p6r&_nc_ht=scontent.ftru2-3.fna&oh=adeb2e75eab1aa97a7b415c56cbcde13&oe=5EFF73E9"
                alt="anillo de trebol"
                loading="lazy"
              >
              <h2 class="titulo_imagen">
                Collares
              </h2>
              <p class="precio">
                $50
              </p>
            </div>
          </section>
          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="contenido-producto p-2 m-2 rounded-md bg-white shadow-lg">
              <img
                class="rounded-md"
                src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/12931187_873954479400051_8645130464251015395_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeGw5Hp_VExEFGVwl3_MORixExKKVRv-fS8TEopVG_59L9Ccgrm2Osdzqus2o9pGiTL_L_b3jn6jytRRiib6Mu5X&_nc_ohc=PcHwXho9veUAX8i4p6r&_nc_ht=scontent.ftru2-3.fna&oh=adeb2e75eab1aa97a7b415c56cbcde13&oe=5EFF73E9"
                alt="anillo de trebol"
                loading="lazy"
              >
              <h2 class="titulo_imagen">
                Collares
              </h2>
              <p class="precio">
                $50
              </p>
            </div>
          </section>
        </section>
      </section>

      <section class="banner_todos_productos pt-10">
        <p>Mira todos los productos que tenemos para ti</p>
        <p>click aqui</p>
      </section>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'PaginaPrincipal',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        speed: 600,
        autoplay: {
          delay: 1600,
          disableOnInteraction: false
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        a11y: {
          prevSlideMessage: 'Anterior Diapositiva',
          nextSlideMessage: 'Siguiente Diapositiva'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitulo{
  text-align: center;
}
.slider {
  left: 0;
  top: 0;
  vertical-align: text-top;
  background-size: cover;
  background-position: center;
}
.slide-1 {
  background-image: url('/images/01.jpg');
}
.slide-2 {
  background-image: url('/images/0.jpg');
}
.slide-3 {
  background-image: url('https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/12924604_873954492733383_4881558672356992178_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeHSWEeZxxzH2wYLyIGpUG2aZjFAI2btqpZmMUAjZu2qluNXb5KY7G8JOfVuI_P2WsOakuhVBvYKXFVmOcf1tvUD&_nc_ohc=yaAj9CSHUgoAX8uxLLQ&_nc_ht=scontent.ftru2-1.fna&oh=8f81ac733c9d1a350d225679fe5511e3&oe=5EEB5A2B');
}

.swiper {
  width: 100%;
  height: 570px;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    box-sizing: border-box;
    padding: 0 80px;
    background-color: transparent;
    .texto {
      padding-top: 40px;
      .title {
        font-family: Novecentowide;
        color: #a5b0d6;
        font-size: 3vh;
        font-weight: 200;
        letter-spacing: 2.5px;
        line-height: 28px;
        padding-bottom: 15px;
      }

      .subtitle {
        font-family: Novecentowide;
        color: #fff;
        font-size: 5vh;
        line-height: 46px;
        letter-spacing: 9px;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      .text {
        max-width: 430px;
        line-height: 1.32;
      }
    }
  }
}
</style>
