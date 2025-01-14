import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Aura from '@primevue/themes/aura'
import { all } from '@vee-validate/rules'
import PrimeVue from 'primevue/config'
import { defineRule } from 'vee-validate'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      },
      darkModeSelector: '.dark'
    }
  }
})

library.add(fas)
library.add(fab)
library.add(far)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
