<template>
    <div>
        <regist-header></regist-header>
        <regist-detail></regist-detail>
    </div>
</template>

<script type="text/ecmascript-6">
    import RegistHeader from "../components/regist/RegistHeader.vue";
    import RegistDetail from "../components/regist/RegistDetail.vue";
    export default {
        components:{
            RegistHeader,
            RegistDetail
        }
    }
</script>

<style scoped>
html,body,div,p,form,ul,li,ol,dl,dt,dd,table,tr,td,th,hr,h1,h2,h3,h4,h5,h6,img,input{
    margin:0;
    padding:0;
}
html{
    font-size:100px;
    height:100%;
}
body{
    font-family:"微软雅黑",Arial;
    height:100%;
    font-size:14px;
    background:#f2f2f2;
}
a{
    text-decoration:none;
    color:inherit;
}
ul,li{
    list-style:none;
}
img{
    border:none;
    display: block;
}
</style>