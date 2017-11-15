<template>
    <section>
        <div class="r-china"><input type="text" placeholder="手机号归属地"><span>中国</span></div>
        <div class="r-phone"><span>+86</span><input type="text" placeholder="请输入手机号"></div>
        <div class="r-random"><input type="text"><input type="button" name="" value="验证码"></div>
        <input type="button" value="登录" class="r-login">
    </section>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    /*section*/
    section{
        margin-top: 0.62rem;
    }
    .r-china,.r-phone,.r-random{
        width:3.09rem;
        margin:0 auto;
        height:0.4rem;
        border-bottom:1px solid #bdbdbd;
        margin-bottom: 0.16rem;
    }
    .r-china span{
        font-size: 16px;
        color:#00bfae;
        float:right;
        line-height: 0.4rem;
    }
    section input{
        border:none;
        line-height: 0.4rem;
        background:#f2f2f2;
    }
    .r-phone input{
        text-align: center;
    }
    .r-random input:first-child{
        width:1.75rem;
    }
    .r-random input:last-child{
        float:right;
        background:#f2f2f2;
    }
    .r-login{
        width:3.09rem;
        height:0.4rem;
        display: block;
        background: #2eddc6;
        margin:0.5rem auto;
        border-radius:0.1rem;
    }
</style>