<template>
  <div v-if="loading" class="loading-page">
    <div class="loader">
      Cargando...
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.loading-page {
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(241, 239, 239, 0.8);
  font-size: 30px;
  font-family: sans-serif;
}

$color-loader: #ce4233;

.loader {
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: helvetica, arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: $color-loader;
  letter-spacing: 0.2em;

  &::before, &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: $color-loader;
    position: absolute;
    animation: load .7s infinite alternate ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

@keyframes load {
  0% { left: 0; height: 30px; width: 15px }
  50% { height: 8px; width: 40px }
  100% { left: 235px; height: 30px; width: 15px}
}
</style>
