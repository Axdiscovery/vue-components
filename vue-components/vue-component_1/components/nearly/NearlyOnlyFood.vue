<template>
    <div class="n-product" @click="changPage(idx)">
        <img :src="pro.pic" class="n-pic1">
        <div>
            <div class="n-top">
                <div class="n-title"><h2>{{pro.title}}</h2><img src="img/n-pic2.png" alt=""></div>
                <p class="n-eva"><img src="img/n-pic3.png" alt=""><span>￥{{pro.price}}/人</span></p>
                <p class="n-address"><span>川菜|高新软件园</span><span>{{pro.jl}}</span></p>
                <p class="n-num"><img src="img/n-pic4.png" alt=""><span>1853人消费</span></p>
            </div>
            <div class="n-bot">
                <p class="n-packbag"><img src="img/n-pic5.png" alt=""><span>{{pro.desc}}</span></p>
                <p class="n-buy"><img src="img/n-pic6.png" alt=""><span>78代100元</span></p>
                <p class="n-discount"><img src="img/n-pic7.png" alt=""><span>每满50减10（买单立享）</span></p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:['idx','pro'],
        methods:{
            changPage:function (idx) {
                this.$router.push("/detail/?id="+idx)
            }
        }
    }
</script>

<style scoped>
    .n-product{
        display: flex;
        justify-content: space-between;
        padding: 0.13rem;
        border-bottom:1px solid #eaeaea;
        margin-bottom: 0.1rem;
        background: white;
    }
    /*top*/
    .n-top{
        border-bottom:1px solid #eaeaea;
        line-height: 0.25rem;
    }
    .n-top img{
        align-self: center;
    }
    .n-pic1{
        width:1.15rem;
        height:1.01rem;
        margin-right: 0.1rem;
    }
    .n-title,.n-eva,.n-address,.n-num,.n-packbag,.n-buy,.n-discount{
        display: flex;
    }
    .n-title h2{
        font-size:16px;
    }
    .n-title img{
        width:0.66rem;
        height:0.19rem;
    }
    .n-eva{
        font-size: 12px;
    }
    .n-eva img{
        width:0.74rem;
        height:0.15rem;
    }
    .n-address{
        display: flex;
        justify-content: space-between;
    }
    .n-address span:first-child{
        font-size: 14px;
        color:#767676;
    }
    .n-address span:last-child{
        display: block;
        width:0.39rem;
        height:0.18rem;
        line-height: 0.18rem;
        text-align:center ;
        border: 1px solid #e4e4e4;
        background: #f1f1f1;
        font-size: 10px;
        color:#7b7b7b;
    }
    .n-num{
        font-size: 10px;
        color: #232323;
    }
    .n-num img{
        width:0.16rem;
        height:0.13rem;
    }
    /*bot*/
    .n-bot{
        font-size: 14px;
        color:#979797;
        width: 2.25rem;
        line-height: 0.25rem;
        padding: 0.1rem 0;
    }
    .n-bot img{
        width:0.18rem;
        height:0.18rem;
        margin-right: 0.05rem;
        align-self: center;
    }
    .n-packbag span{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
</style>