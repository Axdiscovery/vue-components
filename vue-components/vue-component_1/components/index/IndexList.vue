<template>
    <li >
        <a href="javascript:void(0)" @click="change(idx)">
            <div class="il-left">
                <img :src="pro.pic"/>
            </div>
            <div class="il-right">
                <h3>{{pro.tit}}<span class="il-fr">{{pro.jl}}</span></h3>
                <h4>{{pro.desc}}</h4>
                <h6><b>￥<span>{{pro.price}}</span></b><span class="il-rm">{{pro.dis}}</span><span class="il-fr">已售3534</span></h6>
                <p>再不吃叫警察了</p>
            </div>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["idx","pro"],
        methods:{
            change:function(idx){
                this.$router.push("/detail?id="+idx);
            }

        }
    }
</script>

<style scoped>
    .i-lists li{
        padding:0.12rem 0.1rem;
        border-top:1px solid #efefef;
    }
    .i-lists li a{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .i-lists li .il-left{
        width:1rem;
        height:1rem;
        border:1px solid #efefef;
    }
    .i-lists li .il-left img{
        width:100%;
    }
    .i-lists li .il-right{
        flex:1;
        margin-left:0.13rem;
    }
    .i-lists li .il-right h3{
        font-size:18px;
        color:#2d2d2d;
        margin-bottom:0.11rem;
    }
    .i-lists li .il-right .il-fr{
        float:right;
        color:#bbb;
    }
    .i-lists li .il-right h4{
        font-size:14px;
        margin-bottom:0.1rem;
    }
    .i-lists li b{
        color:#0abea5;
    }
    .i-lists li b span{
        font-size:18px;
    }
    .i-lists li .il-right .il-rm{
        color:#d87807;
        border:1px solid #d87807;
        margin-left:0.08rem;
        border-radius:5px;
        padding:0.03rem;
    }
    .i-lists li .il-right p{
        background:#fef5ec;
        color:#d87807;
        margin-top:0.1rem;
        height:0.22rem;
        line-height:0.22rem;
        padding:0 0.11rem;
        font-size:12px;
    }

</style>