<template>
  <section class="ErrorComponente">
    <div class="error-template jumbotron">
      <div class="container">
        <h1>Oops! 😅</h1>
        <p class="lead text-muted">
          Error: {{ error }}
        </p>
      </div>
      <div class="error-actions">
        <nuxt-link to="/" class="btn btn-primary btn-lg">
          Volver a Pagina Principal
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'blog',
  props: {
    error: {
      type: String,
      default: ''
    }
  },
  head () {
    return {
      title: 'Opps! - JadeFashion'
    }
  }
}
</script>
<style scoped>
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>
