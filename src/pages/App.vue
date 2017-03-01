<!--<template>-->
    <!--<div id="app" class="wrapper" :class="{'hide-navbar':!menu_state}">-->
        <!--<div class="page-navigation">-->
            <!--<el-menu theme="dark" router @select="handleSelect">-->
                <!--<li class="menu-header">-->
                    <!--<div class="info">-->
                        <!--<div class="avatar">-->
                            <!--<div class="img" type="image" :style="{backgroundImage:'url('+avatar+')'}"></div>-->
                        <!--</div>-->
                        <!--<div class="user-name">王晨浩</div>-->
                        <!--<el-dropdown trigger="click">-->
                            <!--<span class="el-dropdown-link">-->
                                <!--管理员<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>-->
                            <!--</span>-->
                            <!--<el-dropdown-menu slot="dropdown">-->
                                <!--<el-dropdown-item>修改密码</el-dropdown-item>-->
                                <!--<el-dropdown-item>安全退出</el-dropdown-item>-->
                            <!--</el-dropdown-menu>-->
                        <!--</el-dropdown>-->
                    <!--</div>-->
                    <!--<el-button size="large" type="text" class="close" v-on:click.stop="menu_state=false">-->
                        <!--<i class="fa fa-close"></i>-->
                    <!--</el-button>-->
                <!--</li>-->
                <!--<oa-menu-item v-for="(item, index) in menuData" :model=item></oa-menu-item>-->
            <!--</el-menu>-->
        <!--</div>-->
        <!--<div class="page-wrapper">-->
            <!--<div class="header">-->
                <!--<div class="navbar">-->
                    <!--<ul class="nav navbar-nav">-->
                        <!--<li class="icon">-->
                            <!--<el-button size="large" type="text" v-on:click.stop="onMenuStateChange">-->
                                <!--<i class="fa fa-bars"></i>-->
                            <!--</el-button>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<el-form>-->
                                <!--<el-form-item class="search" prop="search">-->
                                    <!--<el-input type="search" placeholder="请输入你要查找的内容"-->
                                              <!--auto-complete="off"></el-input>-->
                                <!--</el-form-item>-->
                            <!--</el-form>-->
                        <!--</li>-->
                    <!--</ul>-->
                    <!--<ul class="nav navbar-right">-->
                        <!--<li class="icon">-->
                            <!--<el-dropdown>-->
                                <!--<el-badge is-dot>-->
                                    <!--<el-button size="large" class="animated swing" type="text">-->
                                        <!--<i class="fa fa-envelope-o"></i>-->
                                    <!--</el-button>-->
                                <!--</el-badge>-->
                                <!--<el-dropdown-menu slot="dropdown">-->
                                    <!--<el-dropdown-item>-->
                                        <!--<div class="dropdown-messages-box">-->
                                            <!--<a href="#">-->
                                                <!--<div class="avatar">-->
                                                    <!--<div class="img" type="image"-->
                                                         <!--:style="{backgroundImage:'url('+avatar+')'}"></div>-->
                                                <!--</div>-->
                                            <!--</a>-->
                                            <!--<div class="media-body">-->
                                                <!--<strong>小四</strong>这个在日本投降书上签字的军官，建国后一定是个不小的干部吧？-->
                                                <!--<br>-->
                                                <!--<small class="text-muted">3天前 2014.11.8</small>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</el-dropdown-item>-->
                                    <!--<el-dropdown-item divided>-->
                                        <!--<div class="dropdown-messages-box">-->
                                            <!--<a href="#">-->
                                                <!--<div class="avatar">-->
                                                    <!--<div class="img" type="image"-->
                                                         <!--:style="{backgroundImage:'url('+avatar+')'}"></div>-->
                                                <!--</div>-->
                                            <!--</a>-->
                                            <!--<div class="media-body">-->
                                                <!--<strong>小四</strong>这个在日本投降书上签字的军官，建国后一定是个不小的干部吧？-->
                                                <!--<br>-->
                                                <!--<small class="text-muted">3天前 2014.11.8</small>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</el-dropdown-item>-->
                                <!--</el-dropdown-menu>-->
                            <!--</el-dropdown>-->
                        <!--</li>-->
                        <!--<li class="icon">-->
                            <!--<el-dropdown>-->
                                <!--<el-badge is-dot>-->
                                    <!--<el-button size="large" class="animated swing" type="text">-->
                                        <!--<i class="fa fa-bell"></i>-->
                                    <!--</el-button>-->
                                <!--</el-badge>-->
                                <!--<el-dropdown-menu slot="dropdown">-->
                                    <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
                                    <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
                                    <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
                                    <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
                                    <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
                                <!--</el-dropdown-menu>-->
                            <!--</el-dropdown>-->
                        <!--</li>-->
                    <!--</ul>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="content">-->
                <!--<transition name="custom-classes-transition"-->
                            <!--enter-active-class="animated bounceInRight"-->
                            <!--leave-active-class="animated bounceOutLeft">-->
                    <!--<keep-alive>-->
                        <!--<router-view>-->
                            <!--暂无路由页面-->
                        <!--</router-view>-->
                    <!--</keep-alive>-->
                <!--</transition>-->
            <!--</div>-->
            <!--<div class="footer">-->
                <!--<div class="explain">-->
                    <!--© 2016-2017-->
                    <!--<a target="_blank" href="https://github.com/wangchenhao">chenhao.wang</a>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import data from 'assets/menuData'-->
    <!--import OaMenuItem from 'components/MenuItem.vue'-->

    <!--export default {-->
        <!--created: function () {-->
            <!--//绑定窗口改变方法。-->
            <!--window.onresize = () => {-->
                <!--//this.menu_state = document.body.offsetWidth > 768;-->
            <!--};-->
        <!--},-->
        <!--data: function () {-->
            <!--return {-->
                <!--menuData: data,-->
                <!--menu_state: document.body.offsetWidth > 768,-->
                <!--avatar: "http://www.qqjia.com/z/10/tu12038_12.jpg"-->
            <!--}-->
        <!--},-->
        <!--components: {-->
            <!--OaMenuItem-->
        <!--},-->
        <!--methods: {-->
            <!--handleSelect: function () {-->
                <!--if (document.body.offsetWidth < 768) {-->
                    <!--this.menu_state = false;-->
                <!--}-->
            <!--},-->
            <!--onMenuStateChange: function () {-->
                <!--this.menu_state = !this.menu_state;-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->

<!--<style lang="stylus" rel="stylesheet/stylus">-->
    <!--@import '~normalize.css';-->
    <!--@import '~animate.css';-->
    <!--@import '~font-awesome/css/font-awesome.css'-->
    <!--@import '~element-ui/lib/theme-default/reset.css';-->
    <!--@import '~element-ui/lib/theme-default/index.css';-->

    <!--* {-->
        <!--box-sizing: border-box;-->
    <!--}-->

    <!--:focus {-->
        <!--outline: none;-->
    <!--}-->

    <!--html, body {-->
        <!--width 100%-->
        <!--height 100%-->
        <!--overflow hidden-->
        <!-- -webkit-font-smoothing: antialiased;-->
        <!-- -moz-osx-font-smoothing: grayscale;-->
    <!--}-->

    <!--.text-muted {-->
        <!--color: #666;-->
    <!--}-->

    <!--.avatar {-->
        <!--width: 5em;-->
        <!--height: 5em;-->
        <!--border-radius: 50%;-->
        <!--overflow: hidden;-->
        <!--margin: 10px auto;-->
        <!--border: 1px solid rgba(0, 0, 0, .12);-->
        <!--box-shadow: 0 0 5px #fff;-->
        <!--.img {-->
            <!--width 100%-->
            <!--height 100%-->
            <!--background-repeat: no-repeat;-->
            <!--background-size: 100%;-->
            <!--background-position: center;-->
        <!--}-->
    <!--}-->

    <!--.fa {-->
        <!--margin-right: 10px;-->
        <!--speak: none;-->
        <!--font-style: normal;-->
        <!--font-weight: 400;-->
        <!--font-variant: normal;-->
        <!--text-transform: none;-->
        <!--line-height: 1;-->
        <!--display: inline-block;-->
        <!--vertical-align: baseline;-->
    <!--}-->

    <!--.wrapper {-->
        <!--width 100%-->
        <!--height 100%-->
        <!--overflow hidden-->
        <!--font-size 0-->
        <!--&.hide-navbar {-->
            <!--.page-navigation {-->
                <!--width 0px-->
                <!--.el-menu {-->
                    <!--display none-->
                <!--}-->
            <!--}-->
            <!--.page-wrapper {-->
                <!--width 100%-->
            <!--}-->
        <!--}-->
        <!--.page-navigation, .page-wrapper {-->
            <!--font-size initial-->
            <!--display inline-block-->
            <!--height 100%-->
            <!--transition width .5s-->
            <!--overflow-x hidden-->
            <!--overflow-y auto-->
        <!--}-->
        <!--.page-navigation {-->
            <!--width 230px-->
            <!--background-color #324157-->
            <!--.menu-header {-->
                <!--position relative-->
                <!--.close {-->
                    <!--position absolute-->
                    <!--top 0-->
                    <!--right 10px-->
                    <!--display none-->
                <!--}-->
            <!--}-->
            <!--.info {-->
                <!--padding: 10px 10px 20px;-->
                <!--text-align center-->
                <!--border-bottom: 1px solid rgba(255, 255, 255, 0.3);-->
                <!--background-color #1f2d3d-->
                <!--.user-name {-->
                    <!--color #fff-->
                    <!--font-weight: bolder;-->
                <!--}-->
            <!--}-->
        <!--}-->
        <!--.page-wrapper {-->
            <!--width calc(100% - 230px)-->
            <!--background-color #f2f2f2-->
            <!--overflow hidden-->
        <!--}-->
    <!--}-->

    <!--@media (max-width: 768px) {-->
        <!--.wrapper {-->
            <!--.page-navigation {-->
                <!--position fixed-->
                <!--max-width 50vw-->
                <!--z-index 1-->
                <!--.menu-header .close {-->
                    <!--display block-->
                <!--}-->
            <!--}-->
            <!--.page-wrapper {-->
                <!--width 100% !important-->
            <!--}-->
        <!--}-->
    <!--}-->

    <!--.page-wrapper {-->
        <!--.header {-->
            <!--border-bottom 1px solid #bfcbd9-->
            <!--height 49px-->
            <!--padding 5px-->
            <!--background-color #e4e4e4-->
            <!--overflow hidden-->
        <!--}-->
        <!--.content {-->
            <!--position relative-->
            <!--height calc(100% - 85px)-->
            <!--overflow hidden-->
            <!--.page {-->
                <!--position absolute-->
                <!--top 0-->
                <!--left 0-->
                <!--right 0-->
                <!--bottom 0-->
            <!--}-->
        <!--}-->
        <!--.footer {-->
            <!--border-top 1px solid #bfcbd9-->
            <!--background-color #ffffff-->
            <!--height 35px-->
            <!--padding 10px 20px-->
            <!--overflow hidden-->
            <!--.explain {-->
                <!--float right-->
                <!--font-size: 13px;-->
            <!--}-->
        <!--}-->
    <!--}-->

    <!--.navbar, .nav {-->
        <!--&:before {-->
            <!--display table-->
        <!--}-->
        <!--&:after {-->
            <!--content " "-->
            <!--display table-->
            <!--clear both-->
        <!--}-->
        <!--li {-->
            <!--position: relative;-->
            <!--display: block;-->
            <!--float left-->
        <!--}-->
    <!--}-->

    <!--.nav {-->
        <!--.icon {-->
            <!--padding 0 10px-->
        <!--}-->
    <!--}-->

    <!--.search {-->
        <!--margin-bottom 0-->
        <!--input {-->
            <!--border none-->
            <!--background-color transparent-->
        <!--}-->
    <!--}-->

    <!--.navbar {-->
        <!--.navbar-nav {-->
            <!--float left-->
        <!--}-->
        <!--.navbar-left {-->
            <!--float left !important-->
        <!--}-->
        <!--.navbar-right {-->
            <!--float right !important-->
        <!--}-->
    <!--}-->

    <!--.page {-->
        <!--&.ibox {-->
            <!--margin-bottom 0-->
            <!--.ibox-title {-->
                <!--border-top-width 0-->
                <!--height 30px-->
                <!--min-height auto-->
                <!--padding 8px-->
            <!--}-->
            <!--.ibox-content {-->
                <!--height calc(100% - 30px)-->
            <!--}-->
        <!--}-->
    <!--}-->

    <!--.ibox {-->
        <!--clear: both;-->
        <!--margin-bottom: 25px;-->
        <!--margin-top: 0;-->
        <!--padding: 0;-->
        <!--.ibox-title {-->
            <!--background-color: #fff;-->
            <!--border-color: #e7eaec;-->
            <!--border-image: none;-->
            <!--border-style: solid solid none;-->
            <!--border-width: 4px 0 0;-->
            <!--color: inherit;-->
            <!--margin-bottom: 0;-->
            <!--padding: 14px 15px 7px;-->
            <!--min-height: 48px;-->
            <!--h5 {-->
                <!--display: inline-block;-->
                <!--font-size: 14px;-->
                <!--margin: 0 0 7px;-->
                <!--padding: 0;-->
                <!--text-overflow: ellipsis;-->
                <!--float: left;-->
            <!--}-->
            <!--.ibox-tools {-->
                <!--display: inline-block;-->
                <!--float: right;-->
                <!--margin-top: 0;-->
                <!--position: relative;-->
                <!--padding: 0;-->
            <!--}-->
        <!--}-->
        <!--.ibox-content {-->
            <!--background-color: #fff;-->
            <!--color: inherit;-->
            <!--padding: 15px 20px 20px;-->
            <!--border-color: #e7eaec;-->
            <!--border-image: none;-->
            <!--border-style: solid solid none;-->
            <!--border-width: 1px 0;-->
        <!--}-->
    <!--}-->

    <!--.dropdown-messages-box {-->
        <!--width 300px-->
        <!--font-size 0-->
        <!--& > a, & > .media-body {-->
            <!--display inline-block-->
            <!--font-size 14px-->
            <!--vertical-align middle-->
            <!--line-height 1.15-->
        <!--}-->
        <!--.media-body {-->
            <!--width calc(100% - 5em)-->
            <!--padding 5px 10px-->
        <!--}-->
    <!--}-->
<!--</style>-->
<template>
    <div id="app">
        <h3>welcome vuex</h3>
        <input type="button" value="增加" @click="increment"/>
        <input type="button" value="减少" @click="decrement"/>
        <input type="button" value="状态" @click="toggle"/>
        <input type="button" value="异步" @click="clickAsync"/>
        <div>
            现在的数字为:{{count}}
        </div>
        <div v-show="show">
            显示
        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus">
</style>
<script type="text/babel">
    import {mapGetters,mapActions} from 'vuex'
    export default{
        computed:mapGetters([
            'count',
            'show'
        ]),
        methods:mapActions([
            'increment',
            'decrement',
            'toggle',
            'clickAsync'
        ])
    }
</script>