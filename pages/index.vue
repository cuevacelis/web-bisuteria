<template>
  <div class="main">
    <swiper class="slider swiper" :options="swiperOption">
      <swiper-slide class="slider slide-2">
        <div class="texto">
          <div class="title">
            ELLA DIRA "SÍ"
          </div>
          <div class="subtitle">
            ANILLO DE COMPROMISO
          </div>
          <nuxt-link to="/products">
            <button type="button" class="btn btn-secondary">
              Ver Anillo
            </button>
          </nuxt-link>
        </div>
      </swiper-slide>
      <swiper-slide class="slider slide-1">
        <div class="texto">
          <div class="title">
            HAZ TU VIDA MEJOR
          </div>
          <div class="subtitle">
            DIAMANTES GENUINOS
          </div>
          <nuxt-link to="/products">
            <button type="button" class="btn btn-secondary">
              Ver Joyas
            </button>
          </nuxt-link>
        </div>
      </swiper-slide>
      <swiper-slide class="slider slide-3">
        <div class="texto">
          <div class="title">
            JADE FASHION
          </div>
          <div class="subtitle">
            MIRA TODOS LOS PRODUCTOS
          </div>
          <nuxt-link to="/products">
            <button type="button" class="btn btn-secondary">
              Ver Productos
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
            src="https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/48359486_1835382333257256_931420476259958784_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeF27zwo5vfWpQJu_rthCAieq2qHAa_thX-raocBr-2Ff8JybAXS8YsO_z-3N295us1YJ5ie-RuHweH1g0u0feoo&_nc_ohc=bBhQvrjxhCAAX8WD4b2&_nc_ht=scontent.ftru2-1.fna&oh=24ecbb949f339dea3e135308dfc62b65&oe=5ECB4247"
            width="140"
            height="140"
            alt="anillo de trebol"
          >
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">View details »</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            src="https://scontent.ftru2-2.fna.fbcdn.net/v/t1.0-9/26169350_1431848840277276_4031138427698201783_n.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHY9ChfQQYkHCBOq5n6GqMVL5RiZVJbC10vlGJlUlsLXZFIKkyEtcIwk_CJ3o11aUZzouBXrrsRdQz_z_bqjyCa&_nc_ohc=ahFNyHPo7zQAX-_p0Rd&_nc_ht=scontent.ftru2-2.fna&oh=abb8170b1a7cf0d174668b3883a86084&oe=5ECEEAAC"
            width="140"
            height="140"
            alt="maquillaje de flores"
          >
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">View details »</a>
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/77272478_2431629953632488_3608720200288960512_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_eui2=AeEGcXqPD7OjfrkENWib2nFhOjcLR2aY6BI6NwtHZpjoEhTrFCPOoN5QymSAA1QTauwPgrKk2xeKbukYhsuoIq2b&_nc_ohc=tBcZd2WK1ZAAX-R7W3t&_nc_ht=scontent.ftru2-3.fna&oh=e14a43c0384dea0f24f1d216f15348f3&oe=5ECDB9EF"
            width="140"
            height="140"
            alt="accesorio de corazon con candatido san valentin"
          >
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">View details »</a>
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
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
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
          >
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one.
            <span class="text-muted">Checkmate.</span>
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
            src="https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/26239627_1433138140148346_7865976743288717172_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_eui2=AeFg2sGMa-8C7F2qxAhSGuF32ToMeSSS7rDZOgx5JJLusN9mp8P7HrMskKh2ElKohN41avA2Zyfv71XBd9HvOAiu&_nc_ohc=-RkjwwWrCZ4AX9dd4Id&_nc_ht=scontent.ftru2-1.fna&oh=58d949a652be3d4345f2197a9d2e99f2&oe=5EEA920A"
            width="500"
            height="500"
            alt="accesorios para el cabello"
          >
        </div>
      </div>

      <hr class="featurette-divider">
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleParallax',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        speed: 600,
        effect: 'fade',
        lazy: true,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  title: 'Parallax'
}
</script>

<style lang="scss" scoped>
.slider {
  left: 0;
  top: 0;
  vertical-align: text-top;
  background-size: cover;
  background-position: center;
}
.slide-1 {
  background-image: url('../assets/images/0.jpg');
}
.slide-2 {
  background-image: url('../assets/images/01.jpg');
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
