import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/fontawesome.css';
import './assets/css/reset.css';
import './assets/scss/validation.scss';
import './assets/scss/fonts.scss';

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule],
  });
});
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
