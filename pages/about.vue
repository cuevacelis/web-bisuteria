<template>
  <div class="contenido">
    <div>
      <img src="https://www.elpaellador.com/en-construccion.png">
      <nuxt-link to="/" class="button--green">
        Volver al Inicio
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'AcercaDe - Jade Fashion'
    }
  }
}
</script>

<style>
  img{
    max-width: 100%;
  }
</style>
