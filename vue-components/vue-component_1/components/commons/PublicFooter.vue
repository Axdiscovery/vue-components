<template>

    <div class="i-footer">

        <a href="javascript:void(0)" class="inavs" @click="changePage(0)">
            <i class="iconfont icon-jtx"></i>
            <span>首页</span>
        </a>
        <a href="javascript:void(0)" @click="changePage(1)">
            <i class="iconfont icon-jtx"></i>
            <span>附近</span>
        </a>
        <a href="javascript:void(0)" @click="changePage(2)">
            <i class="iconfont icon-jtx"></i>
            <span>逛一逛</span>
        </a>
        <a href="javascript:void(0)" @click="changePage(3)">
            <i class="iconfont icon-jtx"></i>
            <span>订单</span>
        </a>
        <a href="javascript:void(0)" @click="changePage(4)">
            <i class="iconfont icon-jtx"></i>
            <span>我的</span>
        </a>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        props:["idx"],
        data(){
            return {
                arr:["/","/nearly","/guangg","","/login"]
            }
        },
        methods:{
            changePage:function(idx){
                $(".i-footer a").eq(idx).addClass("inavs").siblings().removeClass("inavs");
                this.$router.push(`${this.arr[idx]}`);
            }

        },
        mounted:function(){
            $(".i-footer a").eq(this.$props.idx).addClass("inavs").siblings().removeClass("inavs");
        }
    }
</script>

<style scoped>
    /*i-footer*/
    .i-footer{
        background:#fff;
        padding:0.05rem 0 0.06rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .i-footer a{
        flex:1;
        text-align: center;
        color:#676767;
    }
    .i-footer a span{
        display: block;
        margin-top:0.07rem;
    }
    .i-footer .inavs{
        color:#06c1ae;
    }
    .i-footer a .iconfont{
        font-size:0.25rem;
    }
</style>