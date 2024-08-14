<script setup lang="ts">
import SideBar from '../components/SideBar.vue';

        
</script>
<template>
    <div class="dashboard">
        <SideBar />
        <div class="dashboard__content">
            <RouterView />
        </div>
    </div>
</template>


<style scoped>

.dashboard {
    width: 100vw;
    min-height: 100vh;
    display: flex;
}

.dashboard__content {
    width: 100%;
}

</style>