import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 主页
const Home = resolve => require(['../components/Home.vue'], resolve);
// 登录页
const Login = resolve => require(['../components/Login.vue'], resolve);
// welcome
const Increse = resolve => require(['../components/Increse.vue'], resolve);

export default new Router({
    routes: [
        //重定向
        // {path: '/', redirect: '/home'},
        {
            path: '/home',
            alias: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/increse',
            name: 'Increse',
            component: Increse
        }, {
            path: '*',
            name: '404',
            component: {
                template: "<div>暂无路由页面</div>"
            }
        }
    ],
});
