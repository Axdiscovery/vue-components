<template>
    <div id="content">
        <img :src="pro.pic" alt="">
        <ul>
            <p>最高门市价:¥59</p>
            <p @click="changPage(idx)">¥{{pro.price}}限时抢购</p>
        </ul>
        <p>商家新客立减6元，每人限购1张，每桌限用1张</p>
        <ul>
            <li>
                <p>随时退</p>
                <p>已售19167</p>
            </li>
            <p>过期自动退</p>
        </ul>
        <ul>
            <li>
                <p>549元10人餐</p>
                <p>549元10人餐</p>
                <p>549元10人餐</p>
            </li>
            <p>449元10人餐</p>
        </ul>

        <ul>
            <li>
                <img src="img/content_2.jpg" alt="">
                <p>678人评价</p>

            </li>
            <li>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
                <p>味道赞 51</p>
            </li>

        </ul>

    </div>


</template>

<script type="text/ecmascript-6">

export default {
    props:['pro','idx'],
    methods:{
        changPage:function (idx) {
            this.$router.push("/cart?id="+idx);
        }
    }
}
</script>

<style scoped>

</style>