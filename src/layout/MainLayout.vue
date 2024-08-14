<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '../components/NavBar.vue'

</script>

<template>
    <div class="main">
        <NavBar />
        <router-view />
    </div>
</template>


<style scoped>
main {
    width: 100vw;
}
</style>