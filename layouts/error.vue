<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>
              Oops!
            </h1>
            <h1 v-if="error.statusCode === 404">
              Pagina no encontrada ,error 404! 😱
            </h1>
            <h1 v-if="error.statusCode === 500">
              Problemas con el servidor 😭 error 500, llamen a los de Sistemas 🕵
            </h1>
            <div class="error-actions">
              <nuxt-link to="/" class="btn btn-primary btn-lg">
                <span class="glyphicon glyphicon-home" />
                Volver a Pagina Principal
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
<style scoped>
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>
