<template>
    <div>
      <Header/>

      <div class="contenido">
        <nav id="menu">
          <div class="container">
            <div class="trigger"></div>
            <ul>
              <li><nuxt-link to="products">Nueva Coleccion</nuxt-link></li>
              <li><nuxt-link to="products">Pendientes</nuxt-link></li>
              <li><nuxt-link to="products">Anillos</nuxt-link></li>
              <li><nuxt-link to="products">Tarjetas de Regalo</nuxt-link></li>
              <li><nuxt-link to="products">Promociones</nuxt-link></li>
              <li><nuxt-link to="products">Collares</nuxt-link></li>
            </ul>
          </div>
        </nav>

        <div id="slider">
          <ul>
            <li v-bind:style="{'background-image': 'url(' + require('../assets/images/0.jpg') + ')'}">
              <h3>HAZ TU VIDA MEJOR</h3>
              <h2>Diamantes Genuinos</h2>
              <a href="#" class="btn-more">Read more</a>
            </li>
            <li class="purple" v-bind:style="{'background-image': 'url(' + require('../assets/images/01.jpg') + ')'}">
              <h3>ELLA DIRA "SI"</h3>
              <h2>Anillo de Compromiso</h2>
              <a href="#" class="btn-more">Read more</a>
            </li>
          </ul>
        </div>

        <div id="body">
          <div class="container">
            <div class="last-products">
              <h2>Last added products</h2>
              <section class="products">
                <article>
                  <img src="../assets/images/1.jpg" alt="">
                  <h3>Excepteur sint occaecat</h3>
                  <h4>$1 850.00</h4>
                  <a href="cart.html" class="btn-add">Add to cart</a>
                </article>
                <article>
                  <img src="../assets/images/11.jpg" alt="">
                  <h3>Lorem ipsum dolor</h3>
                  <h4>$990.00</h4>
                  <a href="cart.html" class="btn-add">Add to cart</a>
                </article>
                <article>
                  <img src="../assets/images/12.jpg" alt="">
                  <h3>cupidatat non proident</h3>
                  <h4>$1 200.00</h4>
                  <a href="cart.html" class="btn-add">Add to cart</a>
                </article>
                <article>
                  <img src="~/assets/images/13.jpg" alt="">
                  <h3>Duis aute irure</h3>
                  <h4>$2 650.00</h4>
                  <a href="cart.html" class="btn-add">Add to cart</a>
                </article>
                <article>
                  <img src="~/assets/images/14.jpg" alt="">
                  <h3>magna aliqua</h3>
                  <h4>$3 500.00</h4>
                  <a href="cart.html" class="btn-add">Add to cart</a>
                </article>
              </section>
            </div>
            <section class="quick-links">
              <article v-bind:style="{'background-image': 'url(' + require('../assets/images/2.jpg') + ')'}">
                <a href="#" class="table">
                  <div class="cell">
                    <div class="text">
                      <h4>Lorem ipsum</h4>
                      <hr>
                      <h3>Dolor sit amet</h3>
                    </div>
                  </div>
                </a>
              </article>
              <article class="red" v-bind:style="{'background-image': 'url(' + require('../assets/images/3.jpg') + ')'}">
                <a href="#" class="table">
                  <div class="cell">
                    <div class="text">
                      <h4>consequatur</h4>
                      <hr>
                      <h3>voluptatem</h3>
                      <hr>
                      <p>Accusantium</p>
                    </div>
                  </div>
                </a>
              </article>
              <article v-bind:style="{'background-image': 'url(' + require('../assets/images/4.jpg') + ')'}">
                <a href="#" class="table">
                  <div class="cell">
                    <div class="text">
                      <h4>culpa qui officia</h4>
                      <hr>
                      <h3>magnam aliquam</h3>
                    </div>
                  </div>
                </a>
              </article>
            </section>
          </div>
          <!-- / container -->
        </div>
      </div>
      
      <Footer/>
  </div>
</template>

<script>
  const Header = () => import('../components/Header')
  const Footer = () => import('../components/Footer')
  
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 20rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

</style>