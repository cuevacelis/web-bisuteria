<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="slider slide-2">
        <div class="texto">
          <div class="title">
            ELLA DIRA "SÍ"
          </div>
          <div class="subtitle">
            ANILLO DE COMPROMISO
          </div>
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
        </div>
      </swiper-slide>
      <swiper-slide class="slider slide-3" />
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </swiper>

    <div class="container marketing" style="margin-top:26px">
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
            src="https://scontent.ftru2-1.fna.fbcdn.net/v/t1.0-9/89920171_2672160692912745_4511410785607483392_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeF259Oku1ya7WKj7x3a7-3tz7Oxr6D9D4TPs7GvoP0PhE3fKO2cMOTWsHSiwYenCVPgjss2nYYYezfMBdjLq2Km&_nc_ohc=kc_CfNqJK7MAX9SI788&_nc_ht=scontent.ftru2-1.fna&oh=aae584430e3135980f1b064422fd03a3&oe=5ECBEF13"
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
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/89238431_2672136692915145_5270236991760367616_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeGxPhNYpmFHwg4jc6ELXGHlNA_RlZ7J1WM0D9GVnsnVY2vIq9fqM5hLUQusKbBK_tNVDRjrUMJEnA_Wc-Ag8Mbx&_nc_ohc=qMaZ8WswuBIAX9OwAXp&_nc_ht=scontent.ftru2-3.fna&oh=87d1b6d0d8a4019f9b256c989bebf34a&oe=5ECBFDD6"
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
            src="https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/p720x720/72849107_2363049217157229_5437505124463280128_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeFSdiT5LErMTVxMiKSYk7x83jftGDs0M1feN-0YOzQzV3JXzUUJ_qDOZITQ0PsMspfhJqZlsnK4bRRrbROvFr_A&_nc_ohc=R9iCw3z3hWcAX8W5vVh&_nc_ht=scontent.ftru2-3.fna&_nc_tp=6&oh=f7d419e77538ec11af78632f963a172c&oe=5ECC31E6"
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
  background-image: url('https://scontent.ftru2-3.fna.fbcdn.net/v/t1.0-9/11012544_681101178685383_7415841693488236579_n.png?_nc_cat=101&_nc_sid=19026a&_nc_eui2=AeFiJJ1-PO_i_4zv0GbsfLz_1Zv3zJRdR1zVm_fMlF1HXJ7rwIJfcVGTbbDmUVCCO4dN_IJQye0mzRK1e23jcdXx&_nc_ohc=kvRUjT2txqIAX_3LTiO&_nc_ht=scontent.ftru2-3.fna&oh=fa783536f33be69bdcfcc3b2a90b572c&oe=5ECCB4C4');
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
