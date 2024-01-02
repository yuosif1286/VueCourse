import { createApp } from 'vue';

import App from './App.vue';
import indexStore from './store/indexStore'


const app = createApp(App)
app.use(indexStore);
app.mount('#app');
