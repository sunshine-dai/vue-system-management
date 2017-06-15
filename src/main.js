// 1导入相关的包
import Vue from 'vue';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource'

//导入mint-ui包和css文件
import mintUi from 'mint-ui';
import 'mint-ui/lib/style.min.css';

// 导入miu相关文件
import '../statics/mui/css/mui.css';
import '../statics/mui/css/icons-extra.css';
// import '../statics/mui/js/mui.min.js'

//导入css文件
import '../statics/css/sites.css';
//导入相关组件
import App from './App.vue';
import Home from './components/Home/Home.vue';
import shopcar from './components/shopcar/shopcar.vue';
import member from './components/member/member.vue';
import search from './components/search/search.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import photolist from './components/photo/photolist.vue'


//2在Vue中加载vue-router
Vue.use(vueRouter);
Vue.use(vueResource); //使用vue-resource对象  才能在vue对象实例上挂在$http
// 定义共有过滤器   tolowercase1过滤器名字  必须定义在main.js里面
Vue.use(mintUi);

//全局过滤器格式化时间
import moment from 'moment'
Vue.filter('fmtdate', function(input,datefmtstring) {
        //格式化时间，自己实现太复杂，需要使用 moment插件
        return moment(input).format(datefmtstring);
    })
    //一个组件中，私有过滤器和全局过滤器的名字相同，私有过滤器优先级更高


// 3定义路由规则
let router = new vueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { name: 'root', path: '/', redirect: '/Home' }, //设置根目录下默认首页 访问直接跳转到首页
        { name: 'Home', path: '/Home', component: Home },
        { name: 'member', path: '/member', component: member },
        { name: 'shopcar', path: '/shopcar', component: shopcar },
        { name: 'search', path: '/search', component: search },
        { name: 'newslist', path: '/news/newslist', component: newslist },
        { name: 'newsinfo', path: '/news/newsinfo/:id', component: newsinfo },
        { name: 'photolist', path: '/photo/photolist', component: photolist},//图片分享


    ]
});

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})
