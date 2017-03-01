// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from 'pages/App';
import ElementUI from 'element-ui'
import router from '../router';

import store from 'entry/store'

Vue.use(ElementUI);

new Vue({
    store,
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
