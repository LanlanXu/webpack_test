import Vue from 'vue';
import App from './App.vue'

let vue = new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App />'
});
console.log(vue)