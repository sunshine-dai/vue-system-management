<template>
    <div class="tmpl">
        <!--mint-ui实现首页轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <!--vue需要冒号绑定才可以使用-->
                <img :src="item.img" class="img" alt="轮播图">
            </mt-swipe-item>
        </mt-swipe>
        <!--利用mui设置九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
//                 list: [{
//                 			url: 'http://www.itcast.cn/subject/phoneweb/index.html',
//                 			img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
//                 		}, {
//                 			url: 'http://www.itcast.cn/subject/phoneweb/index.html',
//                 			img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
//                 		}]
                list:[]
            }
        },
        created(){
            this.getlunbo();
        },
        methods:{
            getlunbo(){
                var url ='http://webhm.top:8899/api/getlunbo';
                this.$http.get(url).then(res=>{
                    this.list = res.body.message;
                    console.log('ok')
                },res=>{
                    console.log('获取轮播图失败')
                })

            }
        }
    }
</script>
<style scoped>
    /*scoped表示该样式在该组件中才有用*/
    .mint-swipe {
        overflow: hidden;
        position: relative;
        height: 250px;
    }
    .img{
        height: 100%;
        width: 100%;
    }
    .mint-swipe-items-wrap {
        position: relative;
        overflow: hidden;
        height: 100%;
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
    .mint-swipe-items-wrap > div {
        position: absolute;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        width: 100%;
        height: 100%;
        display: none
    }
    .mint-swipe-items-wrap > div.is-active {
        display: block;
        -webkit-transform: none;
        transform: none;
    }
    .mint-swipe-indicators {
        position: absolute;
        bottom: 10px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .mint-swipe-indicator {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;
        margin: 0 3px;
    }
    .mint-swipe-indicator.is-active {
        background: #fff;
    }
    /*定义九宫格样式*/
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border-top:none;
        border-left:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:none;
        border-bottom:none;
    }
    .mui-icon{
        width: 50px;
        height: 50px;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
    }
    .mui-icon-home{
        background-image: url(../../../statics/images/loading.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-email{
        background-image: url(../../../statics/images/menu3.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-chatbubble{
        background-image: url(../../../statics/images/menu4.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-location{
        background-image: url(../../../statics/images/menu5.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-search{
        background-image: url(../../../statics/images/menu6.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-phone{
        background-image: url(../../../statics/images/menu9.png);
        -webkit-background-size:;
        background-size:cover;
    }
</style>