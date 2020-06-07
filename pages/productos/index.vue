<template>
  <section class="contenido-productos jumbotron">
    <section class="texto-principal text-center">
      <div class="container">
        <h1>Productos</h1>
        <p class="lead text-muted">
          Encuentra todo tipo de bisuteria y al mejor precio 💰.
        </p>
        <p class="lead text-muted">
          Compra aretes, relojes,collares,etc.
        </p>
      </div>
    </section>
    <section class="Productos">
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
.Producto{
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: white;
}
</style>
