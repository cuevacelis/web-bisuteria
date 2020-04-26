import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script';
/*import pluginPlantilla from  '../assets/js/plugins'
import MainPlantilla from '../assets/js/main'*/

Vue.use(LoadScript)
Vue.loadScript("https://code.jquery.com/jquery-1.11.1.min.js")
.then(() => {
    import('../assets/js/plugins')
    import('../assets/js/main')
})
.catch(() => {
    alert("Problema al cargar los scripts de la plantilla")
});

