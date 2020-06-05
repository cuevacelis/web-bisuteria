<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="error-template">
            <h1>
              Oops!
            </h1>
            <h2>
              Parece que no se encontro lo que buscabas 😅
            </h2>
            <h3>
              Verifica la URL 💗
            </h3>
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
  layout: 'blog'
}
</script>
<style scoped>
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>
