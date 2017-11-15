<template>

    <div class="i-nav">
        <div class="in-h">
            <a href="javascript:void(0)">
                <img src="img/nav1.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/nav2.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/nav1.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/nav2.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/nav1.png"/>
                <span>美食</span>
            </a>
        </div>
        <div class="in-m">
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>机票/火车票</span>
                <b>抢红包</b>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>丽人/美发</span>
                <b>五折</b>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>母婴亲子</span>
                <b>11.11</b>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
            <a href="javascript:void(0)">
                <img src="img/pic01.png"/>
                <span>美食</span>
            </a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    .i-nav{
        background:#fff;
        padding:0.16rem 0.15rem;
        color:#676767;
        font-size:12px;
        margin-bottom:0.08rem;
    }
    .i-nav .in-h{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #f2f2f2;
    }
    .in-h a{
        width:20%;
        text-align: center;
        padding-bottom:0.18rem;

    }
    .in-h a img{
        width:0.45rem;
        margin:0 auto 0.1rem;
    }
    .in-m{
        display: flex;
        justify-content:space-around;
        align-items: center;
        flex-wrap:wrap;
    }
    .in-m a{
        width:20%;
        text-align: center;
        position:relative;
    }
    .in-m a img{
        width:0.2rem;
        margin:0.16rem auto 0.13rem;
    }
    .in-m a b{
        position:absolute;
        right:0;
        top:0;
        border-radius:0.06rem;
        color:#f6bfb8;
        background:#fb5442;
        padding:0.025rem;
        line-height:0.15rem;
        font-weight:normal;
    }

</style>