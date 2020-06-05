<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Pagina no encontrada error 404 😱
    </h1>
    <h1 v-if="error.statusCode === 500">
      Problemas con el servidor 😭 error 500, llamen a los de Sistemas 🕵
    </h1>

    <nuxt-link to="/">
      <p>Vuelve a la Pagina Principal</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
