import Vue from 'vue'
import App from './components/app.vue'

var vm = new Vue({
    el: '#app',
    render: f => f(App)
})