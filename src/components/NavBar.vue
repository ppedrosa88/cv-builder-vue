   
<script setup lang="ts">
</script>

<template>
    <div class="nav">
        <router-link class="logo" :to="{ name:'main' }">
            <h3>CV Builder</h3>
        </router-link>
        <div class="sm-hidden">
            <router-link class="btn button" :to="{ name:'login' }">Iniciar sesión</router-link>
            <router-link class="btn button" :to="{ name:'register' }">Registrarse</router-link>
        </div>
    </div>
</template>

<style scoped>
.logo {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
}

.nav {
    background-color: white;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
}

.button {
    margin-left: 1rem;
    text-decoration: none;
}

.sm-hidden {
    display: none;
}

@media (min-width: 768px) {
    .sm-hidden {
        display: block;
    }
}

@media (max-width: 768px) {
    .nav {
        border-bottom: 0;
    }
}

</style>