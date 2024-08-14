<script setup lang="ts">
import CVCard from '../components/CVCard.vue';

        
</script>
<template>
    <div class="container">
        <h1>Dashboard</h1>
            <div class="dashboard__content" >
                <CVCard v-for="cv in 12" :key="cv"/>
            </div>

    </div>
</template>


<style scoped>

.container {
    padding:2rem 3rem; ;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

}

h1 {
    font-size: 2rem;
    color: #333;
}

.dashboard__content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}

</style>