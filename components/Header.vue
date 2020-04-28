<template>
    <header>
        <nav class="container navbar navbar-expand-lg navbar-light">
            <nuxt-link class="navbar-brand" to="/">
                <img src="@/assets/images/logo.png" alt="logo">
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="products">Joyas <span class="sr-only">(current)</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="cart">Promociones</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="about">Acerca De</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>


<script>
</script>

<style scoped>
</style>