import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import createStore from '@/store';
import ConsultaForm from '@/views/ConsultaForm.vue';

const app = createApp(App)
app.use(router)
app.use(createStore)
app.component('ConsultaForm', ConsultaForm);

app.mount('#app')
