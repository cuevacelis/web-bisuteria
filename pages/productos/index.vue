<template>
  <section class="contenido-productos jumbotron">
    <section class="texto-principal  text-center">
      <div class="container">
        <h1>Productos</h1>
        <p class="lead text-muted">
          Joyería especializada con más de 10 años en el distrito de La Libertad. Joyas elaboradas en oro y plata peruana. Alianzas, Anillos de compromiso y mucho mas
        </p>
      </div>
    </section>
    <section class="Productos">
      <Producto class="Producto" tipo="Aretes" />
      <Producto class="Producto" tipo="Aretes" />
    </section>
  </section>
</template>

<script>
const Producto = () => import('@/components/Producto')

export default {
  name: 'PageProductos',
  components: {
    Producto
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
.contenido-productos{
  margin: 0px;
}
.Producto{
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: white;
}
</style>
