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
        <div class="bg-image" :style="bgStyle" ref="bgImage">
            <div class="play-wrapper">
                <div class="play" v-show="songs.length>0 && zIndexs != 10">
                    <i class="icon-play"></i>
                    <span class="texts">随机播放全部</span>
                </div>
            </div>
            <div class="filter" ref="filter"></div>
        </div>
        <div class="bg-layer" ref="layer"></div>
        <scroll @scroll="scroll" :probeType="probeType" :listenScroll="listenScroll" :data="songs" class="list" ref="list">
            <div class="song-list-wrapper">
                <song-list @select="selectItem" :songs="songs"></song-list>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '@/base/scroll'
import SongList from '@/base/song-list/song-list'
import {mapActions} from 'vuex'

const FIX_HEIGHT = 50
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
    data() {
        return {
            scrollY: 0, // y轴滚动的距离
            zIndexs: 0
        }
    },
    components: {
        Scroll,
        SongList
    },
    computed: {
        bgStyle() {
            return `background-image: url(${this.bgImage})`
        }
    },
    created() {
        this.probeType = 3
        this.listenScroll = true
    },
    mounted() {
        this.imageHeight = this.$refs.bgImage.clientHeight
        this.minTranslateY = -this.imageHeight + FIX_HEIGHT
        this.$refs.list.$el.style.top = `${this.imageHeight}px`
    },
    methods: {
        // 返回按钮,返回歌手列表页
        back() {
            this.$router.back()
        },

        // 监听滚动的上下距离
        scroll(pos) {
            this.scrollY = pos.y
        },

        // 子组件传回的 select 事件
        selectItem(item, index) {
            this.selectPlay({
                list: this.songs,
                index
            })
        },

        ...mapActions([
            'selectPlay'
        ])
    },
    watch: {
        scrollY(newY) {
            let translateY = Math.max(this.minTranslateY, newY)
            let zIndex = this.zIndexs = 0
            let scale = 1
            let blur = 0
            this.$refs.layer.style['transform'] = `translate3d(0, ${translateY}px, 0)`
            this.$refs.layer.style['webkitTransform'] = `translate3d(0, ${translateY}px, 0)`
            const percent = Math.abs(newY / this.imageHeight)
            if (newY > 0) {
                scale = 1 + percent
                zIndex = 10
            } else {
                blur = Math.min(20 * percent, 20)
            }
            // 高斯模糊backdrop-filter属性,仅支持ios手机端
            this.$refs.filter.style['backdrop-filter'] = `blur(${blur}px)`
            this.$refs.filter.style['webkitBackdrop-filter'] = `blur(${blur}px)`
            if (newY < this.minTranslateY) {
                zIndex = this.zIndexs = 10
                this.$refs.bgImage.style.paddingTop = '14%'
                this.$refs.bgImage.style.height = `${FIX_HEIGHT}`
            } else {
                // debugger
                this.$refs.bgImage.style.paddingTop = '70%'
                this.$refs.bgImage.style.height = 0
            }
            this.$refs.bgImage.style.zIndex = zIndex
            this.$refs.bgImage.style['transform'] = `scale(${scale})`
            this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`
        }
    }
}
</script>

<style scoped>
.music-list {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
}

.back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 50;
}

.icon-back {
    background: url('../../common/images/arrow.png') no-repeat;
    background-size: 16px 16px;
    display: block;
    padding: 15px;
    font-size: 14px;
    margin-top: 20px;
    /* color: #000; */
}

.title {
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

.bg-image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
    transform-origin: top;
    background-size: cover;
}

.play-wrapper {
    position: absolute;
    bottom: 20px;
    z-index: 50;
    width: 100%;
}

.play {
    box-sizing: border-box;
    width: 135px;
    padding: 7px 0;
    margin: 0 auto;
    text-align: center;
    border: 1px solid rgb(195, 218, 25);
    color: rgb(195, 218, 25);
    border-radius: 100px;
    font-size: 0;
}

.icon-play {
    background: url('../../common/images/play.png') no-repeat;
    background-size: 16px 16px;
    padding: 10px;
    display: inline-block;
    vertical-align: middle;
    margin: 1px 6px 0 0;
    font-size: 14px;
}

.texts {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: rgb(195, 218, 25);
}

.filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.4);
}

.bg-layer {
    position: relative;
    height: 100%;
    background: rgb(60, 60, 60);
}

.list {
    position: fixed;
    top: 0;
    bottom: 0;
    /* overflow:hidden;  */
    width: 100%;
    background: rgb(60, 60, 60);
}

.song-list-wrapper {
    padding: 6px 30px;
}

.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
</style>
