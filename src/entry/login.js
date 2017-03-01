// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui'
import Login from 'pages/Login'

Vue.use(ElementUI);

new Vue({
    el: '#app',
    template: '<Login/>',
    components: {Login},
});