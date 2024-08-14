<script setup lang="ts">
        
</script>
<template>
    <div class="card">
        <h3 class="card__title">Title</h3>
        <p class="card__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, aperiam.</p>
        <div class="card__actions">
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
</template>


<style scoped>
.card {
    width: 100%;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.card__description {
    margin-bottom: 1rem;
}

.card__actions {
    display: flex;
    justify-content: end;
    gap: 0.5rem;

    & button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
}

</style>