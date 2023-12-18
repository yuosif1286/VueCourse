import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import BaseCard  from "@/components/BaseCard.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals  from "@/components/ManageGoals.vue";

const app = createApp(App);

//Global Component

app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('base-card', BaseCard);
app.component('active-goals',ActiveGoals);
app.component('manage-goals',ManageGoals);


app.mount('#app');
