import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Login from '../components/Account/Login.vue'
import Register from '../components/Account/Register.vue'
import Second from '../components/Account/Second.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/foo', component: Foo, children: [
        {
            path: 'login',
            components: {
                temp: Login,
                temp2: Second
            }
        },
        {
            path: 'register',
            components: {
                temp: Register,
                temp2: Second
            }
        }
    ]},
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

export default router