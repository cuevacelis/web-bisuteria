<template>
  <div class="contenido-productos">
    <section class="texto-principal jumbotron text-center">
      <div class="container">
        <h1>Productos</h1>
        <p class="lead text-muted">
          Joyería especializada con más de 10 años en el distrito de La Libertad. Joyas elaboradas en oro y plata peruana. Alianzas, Anillos de compromiso y mucho mas
        </p>
      </div>
    </section>
    <section class="productos">
      <section class="lista__productos">
        <Productos tipo="Aretes" />
      </section>
    </section>
  </div>
</template>

<script>
const Productos = () => import('@/components/Productos')

export default {
  name: 'PageProductos',
  components: {
    Productos
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Productos - Jade Fashion'
    }
  }
}
</script>

<style>
</style>
