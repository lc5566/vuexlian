/**
 * Created by zzl028 on 2017/3/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
    count:10,
    show:true
};

const mutations={
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    },
    toggle(state){
        state.show=!state.show;
    }
}

const actions={
    increment:({
        commit
    })=>{
        commit('increment')
    },
    decrement:({
        commit
    })=>{
        commit('decrement')
    },
    toggle:({
        commit
    })=>{
        commit('toggle')
    },
    getOdd:({
        commit
    })=>{
        commit('getOdd')
    },
    clickAsync:({
        commit
    })=>{
        new Promise((resolve)=>{
            setTimeout(function(){
                commit('increment');
                resolve();
            },1000);
        })
    }
}
const getters={
    count(state){
        return state.count
    },
    show(state){
        return state.show
    },
    getOdd(state){
        return state.count%2==0?'偶数':'奇数';
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})