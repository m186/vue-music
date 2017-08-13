<!--
    2017-8-13
    陈华东
    歌手详情页
-->
<template>
    <transition name="slide">
        <div class="singerDetail">

        </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'singer'
        ])
    },
    created() {
        
    }
}     
</script>

<style>
    .singerDetail{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: orange;
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 0.3s
    }
    .slide-enter, .slide-leave-to{
        transform: translate3d(100%, 0, 0)
    }
</style>
