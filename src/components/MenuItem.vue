<template>
    <el-menu-item v-if="isLeaf" :index="router">
        <i :class=model.icon v-if="model.icon"></i>{{model.name}}
    </el-menu-item>
    <el-submenu v-else :index="router">
        <template slot="title">
            <i :class=model.icon v-if="model.icon"></i>{{model.name}}
        </template>
        <oa-menu-item v-for="(item, index) in model.children" :model=item></oa-menu-item>
    </el-submenu>
</template>
<style rel="stylesheet/stylus" lang="stylus">
</style>
<script type="text/babel">
    export default{
        name: 'oa-menu-item',
        props: {
            model: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data(){
            return {}
        },
        computed: {
            isLeaf: function () {
                return this.model.children ? this.model.children.length == 0 : true;
            },
            router: function () {
                return this.model.router ? this.model.router : this.model.id.toString();
            }
        },
        methods: {}
    }
</script>