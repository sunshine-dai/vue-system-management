<template>
    <div class="tmpl">
        <!--图片分类区域-->
           <div class="cla">
               <ul class="classify">
                   <li>
                       <a @click="getimglist(0)">全部</a>
                   </li>
                   <li v-for="item in catelist"@click="getimglist(item.id)">
                       <a >{{item.title}}</a>
                   </li>
               </ul>
           </div>
        <!--图片列表区域-->
            <ul class="photolist">
                <li v-for="item in list">
                    <img v-lazy="item.img_url">
                    <div class="imgdescribe">
                        <p>{{item.title}}</p>
                        <span>{{item.zhaiyao}}</span>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
    import common from '../../kits/common.js'
    import { Indicator } from 'mint-ui';
    export default{
        data(){
            return {
                catelist:[],
                list:[]
            }
        },
        created(){
            this.getclassify();
            this.getimglist(0)
        },
        methods:{
//            获取图片分类信息
            getclassify(){
                let url =common.apihost+'/api/getimgcategory';
                this.$http.get(url).then(res=>{
                        this.catelist = res.body.message;
                },res=>{
                    console.log('获取图片分类数据失败')
                })

            },
//            获取图片列表
            getimglist(cateid){
//                console.log(cateid)
                let url = common.apihost+'/api/getimages/'+cateid;
//                获取图片列表前弹出加载中
                Indicator.open('加载中...');
                this.$http.get(url).then(res=>{
                    this.list = res.body.message;
//                    console.log(this.list)
//                     获取完取消加载中
                    Indicator.close();
                },res=>{
                    console.log('获取图片列表失败')
                })


            }
        }
    }
</script>
<style scoped>
    /*图片列表样式*/
    .photolist{
        padding:0;
        margin:0;
        list-style:none;
    }
    .photolist img{
        width:100%;
        height:250px;
    }
    .classify{
        padding:0 ;
        margin:0;
        list-style:none;
        width:10000px;
        margin-top:-3px;

    }
    .classify li{
        float: left;
        padding:5px 0 5px 5px;
        font-size: 16px;
    }
    .cla{
        overflow-x: auto;
    }
    .photolist li{
        position: relative;
    }
    .imgdescribe{
        color: #fff;
        position: absolute;
        bottom:0px;
        background-color: rgba(0,0,0,0.3);
    }
    .imgdescribe p{
        margin: 0;
        font-size: 16px;
        font-weight:800;
        color: #fff;
    }
    .imgdescribe span{
        font-size: 14px;
    }
</style>