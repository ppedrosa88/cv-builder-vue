<script setup lang="ts">
import { menuItems } from '../helpers/menu-items';

        
</script>
<template>
    <div class="sidebar">
        <div class="logo">
            <h3 class="bold">CVB</h3>
        </div>
        <div class="sidebar__menu">
            <router-link class="link" :to="{ name: item.name }" v-for="item in menuItems" :key="item.id">{{ item.icon }}</router-link>
        </div>
    </div>
</template>


<style scoped>

.sidebar {
    min-height: 100vh;
    width: 5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
}

.sidebar__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>