import { createApp } from 'vue'
import { createPinia } from 'pinia';
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BalmUI); // Mandatory
app.use(BalmUIPlus); // Optional

app.mount('#app')
