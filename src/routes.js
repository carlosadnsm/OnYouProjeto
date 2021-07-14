import Home from './views/Home.vue';
import Survey from './views/Survey.vue';
import Analytics from './views/Analytics.vue';

export const routes = [
    {path: '', component: Home, title: 'Home'},
    {path: '/survey', component: Survey, title: 'Survey'},
    {path: '/analytics', component: Analytics, title: 'Analytics'}
];
//Array com as rotas e caminhos da Aplicação, importar as rotas no main.js