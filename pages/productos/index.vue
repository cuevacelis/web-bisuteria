<template>
  <section class="contenido-productos">
    <section class="texto-principal-productos text-center">
      <div class="">
        <h1>Productos</h1>
        <p class="lead text-muted">
          Todos los productos de Joyeria en un solo lugar y al mejor precio. 💰
        </p>
      </div>
    </section>
    <section class="Productos">
      <Producto tipo="Aretes" />
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
</style>
