import { createApp } from 'vue';

import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';


const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams', beforeEnter: function(to, from, next) {console.log(to, from); next();}},
    {name: 'teams-list', path: '/teams', component: TeamsList, children: [
      {name: 'team-details', path:':id', components: {default: TeamMembers, footer: TeamFooter}, props: true}
    ]},
    {name: 'users-list', path: '/users', component: UsersList},
  ]
});
router.beforeEach(function(to, from, next) {
  console.log(to, from);
  if(to.name==='users-list') {
    next();
  }
  next('/users')
})

app.use(router)

app.mount('#app');
