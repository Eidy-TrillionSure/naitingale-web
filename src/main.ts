import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      },
      // zIndex: {
      //   modal: 1100, //dialog, drawer
      //   overlay: 1000, //select, popover
      //   menu: 1000, //overlay menus
      //   tooltip: 1100 //tooltip
      // },
      darkModeSelector: '.dark'
    }
  }
})

library.add(fas)
library.add(fab)
library.add(far)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
