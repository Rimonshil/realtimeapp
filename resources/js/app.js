
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
window.Vue=require('vue');

require('./bootstrap');

Vue.use(Vuetify)

import Home from './components/Home.vue';
import router from './Router/Router.js';
import User from './Helpers/User.js';
window.User=User;


new Vue({
    vuetify : new Vuetify(),
    el:'#app',
    router,
    components:{
        AppHome: Home
    }

});
  
