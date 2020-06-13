<template>
  <section class="contenido_web">
    <Header />
    <div class="contenido_principal">
      <fade-transition :duration="800">
        <nuxt />
      </fade-transition>
    </div>
    <Footer />
  </section>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
const Header = () => import('@/layouts/Header')
const Footer = () => import('@/layouts/Footer')
export default {
  components: {
    FadeTransition,
    Header,
    Footer
  }
}
</script>

<style>
.contenido_principal{
  padding-top: 65px;
}
</style>
