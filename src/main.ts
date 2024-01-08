import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Create the Vue app instance
const app = createApp(App);

// Create a Pinia instance and use it for state management
const pinia = createPinia();
app.use(pinia);

// Mount the app to the element with the id 'app' in the HTML file
app.mount('#app');
