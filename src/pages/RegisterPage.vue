<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref<string>();
const surname = ref<string>();
const email = ref<string>();
const password = ref<string>();
const terms = ref<boolean>();

const router = useRouter()

const onSubmit = async () => {

    
    try {
        if(!terms.value) {
            console.log('Debes aceptar los terminos y condiciones')
            return 
        }
        // TODO: Crear usuario
        console.log(name.value, surname.value, email.value, password.value)
        router.push({ name: 'login' })

    } catch (error) {
        console.log(error)
        // Todo: Mostrar error al usuario
    }

}

</script>

<template>
    <div class="register">
        <div class="register__box">
            <div class="register__title">
                <h3>Registro</h3>    
                <p>¿Tienes cuenta en CV Builder? <span>
                    <router-link class="link text-sm bold" :to="{ name:'login' }">Inicia sesión</router-link>
                </span></p>
            </div>
            <div class="divider"></div>

            <form @submit.prevent="onSubmit" class="register__form">
                <input v-model="name" id="name" type="text" placeholder="Nombre">
                <input v-model="surname" id="surname" type="text" placeholder="Apellidos">
                <input v-model="email" id="email" type="email" placeholder="Email">
                <input v-model="password" id="password" type="password" placeholder="Contraseña">
                <div class="register__terms text-sm">
                    <div class="label__checkbox">
                        <input v-model="terms" type="checkbox" id="accept-terms" name="accept-terms">
                        <label for="accept-terms">Acepto los términos y condiciones</label>
                    </div>
                </div>
                <input type="submit" value="Regístrate gratis">
            </form>
        </div>
    </div>
</template>


<style scoped>
.register {
    width: 100%;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
}

.register__box {
    width: 40rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2em 2.5rem;
}

.register__title {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.register__title h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.register__title p {
    margin-bottom: 0.2rem;
}

.register__form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register__form input[type="text"],
.register__form input[type="password"],
.register__form input[type="email"],
.register__form input[type="submit"] {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}

.register__form .register__terms {
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
    .register__box {
        width: 100%;
        height: 100%;
        justify-content: center;
    }

}

</style>