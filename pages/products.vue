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
        <Aretes />
        <!--<SanValentin />
        <Brazaletes />
        <Collares />
        <Headpiece />
        <Maquillaje />
        <Mascarillas />
        <Perlas />
        <Relojes />-->
      </section>
    </section>
  </div>
</template>

<script>
const Aretes = () => import('@/components/Aretes')
/* const SanValentin = () => import('@/components/San-valentin')
const Brazaletes = () => import('@/components/Brazaletes')
const Collares = () => import('@/components/Collares')
const Headpiece = () => import('@/components/Headpiece')
const Maquillaje = () => import('@/components/Maquillaje')
const Mascarillas = () => import('@/components/Mascarillas')
const Perlas = () => import('@/components/Perlas')
const Relojes = () => import('@/components/Relojes') */

export default {
  components: {
    Aretes
    /* SanValentin,
    Brazaletes,
    Collares,
    Headpiece,
    Maquillaje,
    Mascarillas,
    Perlas,
    Relojes */
  },
  data () {
    return {
    }
  },
  head () {
    return {
      title: 'JF Productos'
    }
  }
}
</script>

<style>
</style>
