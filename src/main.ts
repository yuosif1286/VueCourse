
import BaseSearch from "@/components/UI/BaseSearch.vue";
import BaseContainer from "@/components/UI/BaseContainer.vue";
import App from './App.vue';
import {createApp} from "vue";

const app = createApp(App);

app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');
