<template>
  <section class="main">
    <swiper class="slider swiper" :options="swiperOption">
      <swiper-slide class="slider slide-1">
        <div class="texto">
          <div class="title">
            HAZ TU VIDA MEJOR
          </div>
          <div class="subtitle">
            JOYAS GENUINAS
          </div>
          <nuxt-link to="/productos">
            <button type="button" class="btn btn-secondary">
              VER JOYAS
            </button>
          </nuxt-link>
        </div>
      </swiper-slide>
      <swiper-slide class="slider slide-2">
        <div class="texto">
          <div class="title">
            ELLA DIRA "SÍ"
          </div>
          <div class="subtitle">
            ANILLO DE COMPROMISO
          </div>
          <nuxt-link to="/productos">
            <button type="button" class="btn btn-secondary">
              VER ANILLOS
            </button>
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
          <nuxt-link to="/productos">
            <button type="button" class="btn btn-secondary">
              VER COLLARES
            </button>
          </nuxt-link>
        </div>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </swiper>

    <div class="contenido container marketing" style="margin-top:26px">
      <div class="row">
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/12931187_873954479400051_8645130464251015395_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeGw5Hp_VExEFGVwl3_MORixExKKVRv-fS8TEopVG_59L9Ccgrm2Osdzqus2o9pGiTL_L_b3jn6jytRRiib6Mu5X&_nc_ohc=PcHwXho9veUAX8i4p6r&_nc_ht=scontent.ftru2-3.fna&oh=adeb2e75eab1aa97a7b415c56cbcde13&oe=5EFF73E9"
            width="140"
            height="140"
            alt="anillo de trebol"
            loading="lazy"
          >
          <h2 class="subtitulo">
            Collares
          </h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p style="text-align: center;">
            <a class="btn btn-secondary" href="#" role="button">Ver Collares »</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            src="https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/26239627_1433138140148346_7865976743288717172_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_eui2=AeFg2sGMa-8C7F2qxAhSGuF32ToMeSSS7rDZOgx5JJLusN9mp8P7HrMskKh2ElKohN41avA2Zyfv71XBd9HvOAiu&_nc_ohc=dmQ5SEJyQ1AAX-WnlDK&_nc_ht=scontent.ftru2-1.fna&oh=40d273fcc320d4b645c1d5b1e6879f97&oe=5F024D0A"
            width="140"
            height="140"
            alt="maquillaje de flores"
            loading="lazy"
          >
          <h2 class="subtitulo">
            Maquillaje
          </h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p style="text-align: center;">
            <a class="btn btn-secondary" href="#" role="button">Ver Maquillaje »</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/77272478_2431629953632488_3608720200288960512_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeEGcXqPD7OjfrkENWib2nFhOjcLR2aY6BI6NwtHZpjoEhTrFCPOoN5QymSAA1QTauwPgrKk2xeKbukYhsuoIq2b&_nc_ohc=ufxg1uIhAA4AX8QM5cO&_nc_ht=scontent.ftru2-3.fna&oh=f39e2221671d1277c8c22f332f742186&oe=5F01246F"
            width="140"
            height="140"
            alt="accesorio de corazon con candatido san valentin"
            loading="lazy"
          >
          <h2 class="subtitulo">
            San Valentin♥
          </h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p style="text-align: center;">
            <a class="btn btn-secondary" href="#" role="button">Ver SanValentin »</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p
            class="lead"
          >
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/79262808_2453105371484946_4372149791044403200_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeHf3RdcEX0aqp9227PA1klcAICL7kKYsLkAgIvuQpiwud9jw8CdgmM7ApuiwqgcRoRAhawM_2oFlNm3BmJzkDAH&_nc_ohc=AVfiD-kM0xEAX_GwiNK&_nc_ht=scontent.ftru2-3.fna&oh=f3cb531a5b0523d18fa961ae3eb5d52e&oe=5EEB794C"
            width="500"
            height="500"
            alt="corazon con candadito romantico"
            loading="lazy"
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2" style="margin-top: 10%;">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p
            class="lead"
          >
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src="https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/75587542_2431602130301937_6748122495146000384_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_eui2=AeEnxXSmD4-YU6dq6AHmlq9yi5-cd2JOF7KLn5x3Yk4XsqISUZSa6GE3BNadE55Q-j1BbIlpFo1X_S2WVwmV_x8D&_nc_ohc=FdKLJDiizzcAX-QAZMa&_nc_ht=scontent.ftru2-2.fna&oh=d9c9c5ace193172f5de5afa21cfaf964&oe=5EEDDBC2"
            width="500"
            height="500"
            alt="aretes de perla"
            loading="lazy"
          >
        </div>
      </div>

      <hr class="featurette-divider">
    </div>
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
        effect: 'fade',
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
    color: $white;
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
        margin-bottom: $gap;
      }

      .text {
        max-width: 430px;
        line-height: 1.32;
      }
    }
  }
}
.bd-placeholder-img{
  margin: auto;
  display: block;
}
</style>
