import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://badsite.com/';

const app = createApp(App).use(router)
app.use( store, router )
app.mount('#app')
