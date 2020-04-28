import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript)
Vue.loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js")
.then(() => {
    Vue.loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js")
})
.catch(() => {
    alert("Problema al cargar los scripts de la plantilla")
});