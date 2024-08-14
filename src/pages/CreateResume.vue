<script setup lang="ts">
import ToolBar from '../components/ToolBar.vue';

        
</script>
<template>
    <div class="container">
        <div class="container__left">
            <ToolBar />
        </div>
        <div class="container__right">

        </div>
        <h1>Create Resume</h1>
    </div>
</template>


<style scoped>
.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
}
.container__left {
    width: 60%;
}
.container__right {
    width: 50%;
}

@media screen and (max-width: 768px) {
    
}

</style>