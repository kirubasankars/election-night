import { createApp } from 'vue'
import App from './app.vue'
import store from './store'
import './index.css'

createApp(App).use(store).mount('#app')
