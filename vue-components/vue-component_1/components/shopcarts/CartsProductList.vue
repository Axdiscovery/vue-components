<template>

    <div id="content" >

        <div  v-for="(n,index) in {list}">
            <div class="content_part_1">
                 <ul class="content_1">
                <li>
                    <img :src="n.pic" alt="">
                    <div class="content_1_middle_top">
                        <p>{{n.title}}</p>
                        <ul>
                            <p>周一至周日</p>
                            <img src="img/gouwuche_img/gouwuche_content_2.jpg" alt="">
                            <p>免预约</p>
                        </ul>
                        <img src="img/gouwuche_img/gouwuche_content_3.jpg" alt="">
                    </div>


                </li>
                <li>{{n.price}}</li>


            </ul>

            <ul class="content_2">
                <li>数量</li>

                <li>
                    <p @click="sub()">-</p>
                    <p><input type="number" v-model="n.qal"></p>
                    <p @click="add()">+</p>
                </li>
            </ul>
        </div>

        </div>
        <div class="content_part_2">
            <ul>
                <p>抵用券</p>
                <p>暂无可用</p>
            </ul>
            <ul>

                <p> 实付金额</p>
                <p>{{tm}}</p>
            </ul>

        </div>

        <div class="content_part_3">

            <p>手机号</p>
            <p>187929***30</p>

        </div>


    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        props:["tm","list","add","sub"]
    }
</script>

<style scoped>

</style>