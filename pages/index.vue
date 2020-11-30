<template>
  <section class="main">
    <section class="contenido_slider_principal">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="dataSwiper in dataSwipers.informacion" :key="dataSwiper.id" class="slider" :style="'background-image:url('+dataSwiper.img+')'">
          <div class="texto">
            <div class="title">
              {{ dataSwiper.titulo }}
            </div>
            <div class="subtitle">
              {{ dataSwiper.subtitulo }}
            </div>
            <nuxt-link type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" :to="dataSwiper.urlButton">
              {{ dataSwiper.textoButton }}
            </nuxt-link>
          </div>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
        <div slot="button-next" class="swiper-button-next swiper-button-white" />
      </swiper>
    </section>

    <section class="contenido_texto_principal p-8">
      <section class="aviso_pagina_en_construccion">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Alerta!</strong>
          <span class="block sm:inline">Página en construcción.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      </section>
      <br>

      <section class="banner_informativo flex justify-center">
        <div class="bg-blue-100 border-t-4 border-blue-600 rounded-b text-teal-900 px-2 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1">
              <svg class="fill-current h-6 w-6 text-blue-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            </div>
            <div>
              <p class="font-bold py-1">
                Bisuteria al mejor precio💎
              </p>
              <p class="text-sm">
                JadeFashion ofrece la mejor bisuteria del mercado peruano (Perú-Trujillo) aquí encontraras aretes, relojes, collares, joyas elaboradas en oro y plata peruana.
              </p>
              <p class="text-sm">
                Alianzas, anillos de compromiso, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="collares m-4">
        <section class="titulo mb-4">
          <p class="text-lg text-3xl font-semibold">
            Relojes
          </p>
        </section>
        <section class="productos_inicio flex flex-wrap">
          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="producto mr-4 mb-8">
              <div class="principal-img">
                <div class="shadow w-64 h-64" />
                <img class="max-w-sm rounded-md w-64 h-64" src="http://ae01.alicdn.com/kf/H9c06364bc49143aaa4a01ca8920da3453.jpg_350x350.jpg_.webp" alt="Producto" loading="lazy">
              </div>
              <div class="footer-img">
                <div class="font-semibold text-xl mb-2 pt-2">
                  PEN 17,33
                </div>
                <div class="mb-2 ">
                  Reloj Inteligente
                </div>
              </div>
            </div>
          </section>

          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="producto mr-4 mb-8">
              <div class="principal-img">
                <div class="shadow w-64 h-64" />
                <img class="max-w-sm rounded-md w-64 h-64" src="https://ae01.alicdn.com/kf/Hdc7e873316364fa3b4ffae0e912f5e703/Women-Classic-Quartz-Wrist-Watch-Rhombus-Head-Frosted-PU-Leather-Band-Casual-Watch-H9.jpg_220x220xz.jpg_.webp" alt="Producto" loading="lazy">
              </div>
              <div class="footer-img">
                <div class="font-semibold text-xl mb-2 pt-2">
                  PEN 10
                </div>
                <div class="mb-2 ">
                  Reloj de Pulsera Clasico
                </div>
              </div>
            </div>
          </section>

          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="producto mr-4 mb-8">
              <div class="principal-img">
                <div class="shadow w-64 h-64" />
                <img class="max-w-sm rounded-md w-64 h-64" src="https://ae01.alicdn.com/kf/Hcd8a89a0f11645d38e8b0b2a24b8787dH/Classic-Women-s-Casual-Quartz-Leather-Band-Strap-Watch-Round-Analog-Clock-Wrist-Watches.jpg_220x220xz.jpg_.webp" alt="Producto" loading="lazy">
              </div>
              <div class="footer-img">
                <div class="font-semibold text-xl mb-2 pt-2">
                  PEN 20,50
                </div>
                <div class="mb-2 ">
                  Reloj clásico informal
                </div>
              </div>
            </div>
          </section>

          <section class="producto_inicio sm:w-1/2 md:w-1/3 xl:w-1/4">
            <div class="producto mr-4 mb-8">
              <div class="principal-img">
                <div class="shadow w-64 h-64" />
                <img class="max-w-sm rounded-md w-64 h-64" src="https://ae01.alicdn.com/kf/H20da08934ac44346bab09f154cd14f124/Princess-Elsa-Children-Watches-Kids-Spiderman-Colorful-Light-Source-Boys-Watch-Girls-Party-Gift-Clock-Wrist.jpg_220x220xz.jpg_.webp" alt="Producto" loading="lazy">
              </div>
              <div class="footer-img">
                <div class="font-semibold text-xl mb-2 pt-2">
                  PEN 6,48
                </div>
                <div class="mb-2 ">
                  Relojes de princesa Elsa para niñas
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <div class="sm:flex flex-none item-center justify-center bg-gray-500 text-white text-sm font-bold px-4 py-3 m-3" role="alert">
        <svg class="fill-current w-4 h-4 mt-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
        <p class="mr-4 mt-2">
          Mira todos los productos que tenemos para ti
        </p>
        <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
          Click Aqui
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

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
          delay: 1640,
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
      },
      dataSwipers: {
        informacion: [
          {
            id: '1',
            img: '/images/01.jpg',
            titulo: 'ELLA DIRA "SÍ"',
            subtitulo: 'ANILLO DE COMPROMISO',
            textoButton: 'VER ANILLOS',
            urlButton: '/productos'
          },
          {
            id: '2',
            img: '/images/0.jpg',
            titulo: 'HAZ TU VIDA MEJOR',
            subtitulo: 'JOYAS GENUINAS',
            textoButton: 'VER JOYAS',
            urlButton: '/productos'
          }
          /* {
            id: '3',
            img: 'https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/12924604_873954492733383_4881558672356992178_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeHSWEeZxxzH2wYLyIGpUG2aZjFAI2btqpZmMUAjZu2qluNXb5KY7G8JOfVuI_P2WsOakuhVBvYKXFVmOcf1tvUD&_nc_ohc=6NGsAB48oGsAX8475QI&_nc_ht=scontent.ftru2-1.fna&oh=4e5d4d3190c56b806cb67af29f00d971&oe=5F12E72B',
            titulo: 'COLLARES',
            subtitulo: 'COLLAR VIRGEN DE LA PUERTA',
            textoButton: 'VER COLLARES',
            urlButton: '/productos'
          } */
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow{
  background: #000;
  border-radius: 12px;
  opacity: .04;
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.slider {
  background-size: cover;
  background-position: center;
}
.swiper {
  width: 100%;
  height: 500px;
  .swiper-slide {
    flex-direction: column;
    text-align: center;
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
    }
  }
}
</style>
