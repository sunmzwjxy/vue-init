<template>
    <div>
        <h1>APP component</h1>
        <router-link to="/foo">Foo</router-link>
        <router-link to="/bar">Bar</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'jimmy components'
        }
    }
}
</script>

<style>

</style>