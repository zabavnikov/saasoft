import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import Nora from '@primeuix/themes/nora'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Nora
    }
  })
  .mount('#app')
