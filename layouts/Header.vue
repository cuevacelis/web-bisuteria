<template>
  <header class="mi-navbar fixed bg-white px-6 border-b border-gray-200 shadow-md inset-x-0 sm:flex items-center">
    <section class="navbar_principal">
      <div class="flex items-center justify-between">
        <section class="logo items-center pr-6 lg:pr-8">
          <button @click="isOpenSubMenu = false">
            <nuxt-link class="flex items-center" to="/">
              <img
                src="/images/logo1-min.png"
                width="60"
                height="60"
                alt="logo"
                loading="lazy"
              >
              <span class="text-2xl text-gray-800">Jade Fashion</span>
            </nuxt-link>
          </button>
        </section>
        <section class="icono-menu items-center sm:hidden">
          <button type="button" class="block text-gray-500 hover:text-dark focus:outline-none" @click="isOpenSubMenu = !isOpenSubMenu">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpenSubMenu" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpenSubMenu" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </section>
      </div>
    </section>
    <nav :class="isOpenSubMenu ? 'block' : 'hidden'" class="pt-2 pb-4 sm:flex sm:p-0">
      <button class="block" @click="isOpenSubMenu = false">
        <nuxt-link class="text-gray-700 px-2 py-2" to="/productos">
          Productos
        </nuxt-link>
      </button>
      <button class="block" @click="isOpenSubMenu = false">
        <nuxt-link class="block text-gray-700 px-2 py-2" to="/promociones">
          Promociones
        </nuxt-link>
      </button>
      <button class="block" @click="isOpenSubMenu = false">
        <nuxt-link class="text-gray-700 px-2 py-2" to="/about">
          ¿Quienes Somos?
        </nuxt-link>
      </button>
    </nav>
  </header>
</template>

<script>
// import 'plugins/scriptsPlantilla'
export default {
  data () {
    return {
      isOpenSubMenu: false
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.mi-navbar{
  z-index: 3;
}
</style>
