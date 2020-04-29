<template>
  <header>
    <nav class="container navbar navbar-expand-lg navbar-light">
      <nuxt-link class="navbar-brand" to="/">
        <img src="@/assets/images/logo.png" alt="logo">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/products">
              Productos <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/cart">
              Promociones
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">
              Acerca De
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
</script>

<style scoped>
</style>
