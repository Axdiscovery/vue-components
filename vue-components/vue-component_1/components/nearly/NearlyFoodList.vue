<template>
    <section>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" >
                    <nearly-only-food :idx="index" :pro="n" v-for="(n,index) in list"></nearly-only-food>

                </div>
                <div class="swiper-slide">
                    <nearly-only-food :idx="index" :pro="n" v-for="(n,index) in list"></nearly-only-food>
                </div>
                <div class="swiper-slide">
                    <nearly-only-food :idx="index" :pro="n" v-for="(n,index) in list"></nearly-only-food>
                </div>
                <div class="swiper-slide">
                    <nearly-only-food :idx="index" :pro="n" v-for="(n,index) in list"></nearly-only-food>
                </div>
            </div>
        </div>
    </section>
</template>

<script type="text/ecmascript-6">
    import NearlyOnlyFood from "./NearlyOnlyFood.vue";
    export default {
        props:['list'],
        components:{
            NearlyOnlyFood
        },
        methods:{
            sliders:function(){
                var mySwiper = new Swiper ('.swiper-container', {
                    effect:'slide',
                    autoHeight: true,
                    touchRatio : 0.5,
                    onSlideChangeStart: function(swiper){
                        $(".n-menu a").eq(swiper.activeIndex).addClass('red').siblings().removeClass('red');
                    }
                });
                $(".n-menu a:first-child").addClass('red');
                $(".n-menu a").click(function(){
                    $(this).addClass('red').siblings().removeClass('red');
                    var n=$(this).index();
                    mySwiper.slideTo(n+1, 1000, false);//切换到第一个slide，速度为1秒
                });
            }
        },
        mounted:function(){
            this.sliders();
        }

    }
</script>

<style scoped>
    section{
        width: 100%;
        flex: 1;
        overflow:hidden;
        overflow-y: auto;
    }
</style>