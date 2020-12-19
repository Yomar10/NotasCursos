
require('./bootstrap');

window.Vue = require('vue');


Vue.component('contenido-component', require('./components/ContenidoComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('principal-component', require('./components/PrincipalComponent.vue').default);
Vue.component('fila-component', require('./components/FilaComponent.vue').default);


const app = new Vue({
    el: '#app',
});
