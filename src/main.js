// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'

import Home from './components/home'
// import 'jquery/dist/jquery.min.js'
import detail from './components/goodsDetail'
import Msg from './components/Message'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('dCurrency', function(value) {
    return '￥' + value
})


Vue.filter('dTofixed', function(value) {
    var isNum = parseFloat(value);
    if (!isNum) {
        alert("请输入数字")
        return "请输入数字";
    } else {
        var value = Math.round(isNum * 100) / 100;
        var item = value.toString().split(".");
        if (item.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (item.length > 1) {
            if (item[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    }
})
const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Homew
}, {
    path: '/detail',
    component: detail,
    children: [{
        path: 'Msg',
        component: Msg
    }]
}];


const router = new VueRouter({
    routes
});

var app = new Vue({
    el: '#app',
    router,
})