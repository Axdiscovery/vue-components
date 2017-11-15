<template>
    <section>
        <div class="l-mymoney">
            <h5>我的资产</h5>
            <div class="l-bag">
                <a href="javascript:void(0)"><i class="iconfont icon-qianbao"></i><span>钱包</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-yue"></i><span>余额</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-duihuandiyongquan"></i><span>抵用券</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qiabao"></i><span>卡包</span></a>
            </div>
        </div>
        <div class="l-service">
            <h5>美团服务</h5>
            <div class="l-bag">
                <a href="javascript:void(0)"><i class="iconfont icon-qianbao"></i><span>好友去哪</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-yue"></i><span>会员中心</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-duihuandiyongquan"></i><span>手机充值</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qiabao"></i><span>发票助手</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qianbao"></i><span>好友去哪</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-yue"></i><span>会员中心</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-duihuandiyongquan"></i><span>手机充值</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qiabao"></i><span>发票助手</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qianbao"></i><span>好友去哪</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-yue"></i><span>会员中心</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-duihuandiyongquan"></i><span>手机充值</span></a>
                <a href="javascript:void(0)"><i class="iconfont icon-qiabao"></i><span>发票助手</span></a>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    section{
        flex: 1;
        overflow:hidden;
        overflow-y: auto;
    }
    /*我的资产*/
    .l-mymoney,.l-service{
        background: white;
        margin-top: 0.12rem;
    }
    .l-mymoney h5,.l-service h5{
        font-size: 12px;
        color:#999999;
        height:0.36rem;
        line-height: 0.36rem;
        margin-left:0.12rem;
    }
    .l-bag{
        border-top:1px solid #eeeeee;
        display: flex;
        flex-wrap: wrap;
    }
    .l-bag a{
        width:25%;
        display: block;
        padding-top:0.22rem;
        height:0.96rem;
        border-right:1px solid #eee;
        text-align: center;
        box-sizing: border-box;
    }
    .l-bag .iconfont{
        display: block;
        font-size: 26px;
        color:#fe970f;
    }
    .l-bag span{
        font-size:14px;
        color:#343434;
    }
</style>