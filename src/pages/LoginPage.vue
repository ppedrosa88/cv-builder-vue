<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref();
const password = ref();

const router = useRouter()

const onSubmit = async () => {
    try {
    
        // TODO: Loguear usuario
        router.push({ name: 'dashboard' })
    } catch (error) {
        console.log(error)
    }
}


</script>

<template>
    <div class="login">
        <div class="login__box">
            <div class="login__title">
                <h3>Iniciar sesión</h3>    
                <p>¿Es tu primera vez en CV Builder?</p>
                <router-link class="link text-sm bold" :to="{ name:'register' }">Crea una cuenta aquí</router-link>
            </div>
            <div class="divider"></div>

            <form @submit.prevent="onSubmit" class="login__form">
                <input v-model="email" id="email" type="email" placeholder="Email">
                <input v-model="password" id="password" type="password" placeholder="Contraseña">
                <div class="login__remember text-sm">
                    <div class="label__checkbox">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Recuérdame</label>
                    </div>
                    <router-link class="link bold" :to="{ name:'register' }">He olvidado la contraseña</router-link>
                </div>
                <input type="submit" value="Inicia sesión">
            </form>
        </div>
    </div>
</template>


<style scoped>
.login {
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    /* place-items: center; */
}

.login__box {
    min-width: 25rem;
    max-width: 950px;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2em 2.5rem;
}

.login__title {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.login__title h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.login__title p {
    margin-bottom: 0.2rem;
}

.login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login__form input[type="email"],
.login__form input[type="password"],
.login__form input[type="submit"] {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}

.login__form .login__remember {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.label__checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

@media screen and (max-width: 576px) {
    .login__box {
        width: 100%;
        height: 100%;
        justify-content: center;
    }

}

</style>