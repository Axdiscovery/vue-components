<template>

    <div class="i-banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="img/ban1.png"/>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="img/ban2.png"/>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="img/ban1.png"/>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:void(0)">
                        <img src="img/ban2.png"/>
                    </a>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        methods:{
            initSwiper:function () {
                var mySwiper = new Swiper ('.i-banner .swiper-container', {
                    autoplay:3000,
                    loop: true,
                    pagination: '.swiper-pagination'
                })
            }
        },
        mounted:function () {
            this.initSwiper();
        }
    }
</script>

<style scoped>

    .i-banner{
        width:100%;
    }
    .swiper-wrapper,.swiper-slide,.swiper-slide a,.swiper-slide img{
        width:100%;
    }
    .i-banner .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>