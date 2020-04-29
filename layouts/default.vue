<template>
  <div>
    <Header />
    <div class="contenido">
      <transition name="test" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
const Header = () => import('@/components/Header')
const Footer = () => import('@/components/Footer')
export default {
  components: {
    Header,
    Footer
  },
  transition: {
    name: 'test',
    mode: 'out-in'
  }
}
</script>

<style>

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
