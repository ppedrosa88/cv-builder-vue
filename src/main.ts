import './style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60,
                refetchOnReconnect: 'always'
            }
        }
    }
})

app.mount('#app')
