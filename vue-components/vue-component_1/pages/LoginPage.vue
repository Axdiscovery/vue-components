<template>
    <div class="LoginPage">
        <login-header></login-header>
        <login-menu></login-menu>
        <login-detail></login-detail>
        <public-footer :idx="4"></public-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import LoginHeader from "../components/login/LoginHeader.vue";
    import LoginMenu from "../components/login/LoginMenu.vue";
    import LoginDetail from "../components/login/LoginDetail.vue";
    import PublicFooter from "../components/commons/PublicFooter.vue";
    export default {
        components:{
            LoginHeader,
            LoginMenu,
            LoginDetail,
            PublicFooter
        }
    }
</script>

<style scoped>
    .LoginPage{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>