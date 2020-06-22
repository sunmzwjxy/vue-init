<template>
    <div>
        <h2>{{name}}</h2>
        <router-link to="/foo/login">login</router-link>
        <router-link to="/foo/register">register</router-link>
        <router-view name="temp"></router-view>

        <div>
            <Side></Side>
        </div>

        <router-view name="temp2"></router-view>
    </div>
</template>

<script>
import Side from '../components/Account/Side.vue'
export default {
    data() {
        return {
            name: 'Foo component'
        }
    },
    components: {
        Side
    }
}
</script>

<style>

</style>