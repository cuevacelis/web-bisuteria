<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light border-bottom box-shadow">
      <nuxt-link class="navbar-brand" to="/">
        <img
          src="/images/logo1-min.png"
          width="60"
          height="60"
          alt="logo"
          loading="lazy"
        >
        JadeFashion
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/productos">
              Productos <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/promociones">
              Promociones
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">
              ¿Quienes Somos?
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
}
.navbar{
  padding-bottom: 0;
  padding-top: 0;
}
</style>
