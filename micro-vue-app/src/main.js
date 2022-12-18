import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

window.renderVueApp = (containerId) => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(containerId);
};

window.unmountVueApp = (containerId) => {
  const root = document.getElementById(containerId);

  if (root) {
    root.remove();
  }
};

if (!document.getElementById('VueApp-container')) {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#VueApp-container');
}
