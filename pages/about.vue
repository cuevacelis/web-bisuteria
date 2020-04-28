<template>
  <div>
    <Header/>

    <div class="contenido">
        <div>
          <nuxt-link to="/" class="button--green">Volver al Inicio</nuxt-link>
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

<style>
</style>
