<template>
  <v-app>
    <Header/>
      <nuxt />
    <Footer/>
  </v-app>
</template>

<script>
export default {
  components: {
      Header: () => import('@/components/Header'),
      Footer: () => import('@/components/Footer'),
    },
}
</script>

<style>
</style>