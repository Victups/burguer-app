import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

createApp(App).use(router).mount('#app')
const vuetify = createVuetify({
    components,
    directives,
})