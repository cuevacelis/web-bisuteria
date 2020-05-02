<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1>Productos</h1>
        <p class="lead text-muted">
          Joyería especializada con más de 10 años en el distrito de La Libertad. Joyas elaboradas en oro y plata peruana. Alianzas, Anillos de compromiso y mucho mas
        </p>
      </div>
    </section>
    <div class="lista-productos">
      <Aretes />
    </div>
  </div>
</template>

<script>
const Aretes = () => import('@/components/Aretes')
// const Lazy = () => import('@/components/lazy')
export default {
  components: {
    Aretes
    // Lazy
  }
}
</script>

<style>
</style>
