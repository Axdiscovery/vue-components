<template>

    <div class="gg-lists">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
                <div class="swiper-slide">
                    <gg-lists></gg-lists>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import GgLists from "./GgLists.vue";
    export default {
        components:{
            GgLists
        },
        methods:{
            initSwiper:function(){
                var mySwiper = new Swiper ('.gg-lists .swiper-container', {
                    autoHeight: true,
                    onSlideChangeStart: function(swiper) {
                        let num = swiper.activeIndex;
                        $(".gg-nav a").eq(num).addClass("gg-now").siblings().removeClass("gg-now");

                    }
                })

                $(".gg-nav a").click(function(e){
                    let index=$(this).index();
                    mySwiper.slideTo(index);
                    $(this).addClass("gg-now").siblings().removeClass("gg-now");
                })
            }
        },
        mounted:function () {
            this.initSwiper();
        }
    }
</script>

<style scoped>

    .gg-lists{
        width:100%;
        flex:1;
        overflow-x:hidden;
        overflow-y:auto;
    }
    .swiper-wrapper,.swiper-slide{
        width:100%;
    }
</style>