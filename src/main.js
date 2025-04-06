import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia";

import './assets/styles/main.css'



const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount('#app');