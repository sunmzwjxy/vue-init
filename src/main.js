import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'

// import m2, { title as title123, content } from './js/test.js'

var vm = new Vue({
    el: '#app',
    router,
    render: f => f(App)
})


/*
    ES6
    import ... from ''
    export default and export

    Node
    var ... = require('')
    module.exports & exports
 */