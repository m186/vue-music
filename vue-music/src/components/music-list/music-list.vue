<!--
    2017-8-17
    陈华东
    歌曲列表组件
-->
<template>
    <div class="music-list">
        <div class="back" @click="back">
            <i class="icon-back"></i>
        </div>
        <h1 class="title" v-html="title"></h1>
        <div class="bg-image" :style="bgStyle">
            <div class="filter" ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgImage: {
            type: String,
            default: ''
        },
        songs: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        },
    },
    computed: {
        bgStyle() {
            return `background-image: url(${this.bgImage})`
        }
    },
    created() {
        
    },
    methods: {
        // 返回按钮,返回歌手列表页
        back() {
             this.$router.push('/singer')
        }
    }
}
</script>

<style>
    .music-list{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;
    }
    .back{
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 50;
    }
    .icon-back{
        background: url('../../common/images/arrow.png') no-repeat;
         background-size: 16px 16px; 
        display: block;
        padding: 15px;
        font-size: 14px;
        margin-top: 20px;
        /* color: #000; */
    }
    .title{
        position: absolute;
        top: 0;
        left: 10%;
        z-index: 40;
        width: 80%;
        /* no-wrap() */
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
    }
    .bg-image{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 70%;
        transform-origin: top;
        background-size: cover;
    }
    .play-wrapper{
        position: absolute;
        bottom: 20px;
        z-index: 50;
        width: 100%;
    }
    .play{
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid teal;
        color: #fff;
        border-radius: 100px;
        font-size: 0;
    }
    .icon-play{
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
        font-size: 14px;
    }
    .text{
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    .filter{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(7, 17, 27, 0.4);
    }
    .bg-layer{
        position: relative;
        height: 100%;
        background: oranger;
    }
    .list{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #abcdef;
    }
    .song-list-wrapper{
        padding: 20px 30px;
    }
    .loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
