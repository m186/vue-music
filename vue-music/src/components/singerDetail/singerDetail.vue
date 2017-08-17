<!--
    2017-8-13
    陈华东
    歌手详情页
-->
<template>
    <transition name="slide">
        <music-list :songs="songs" :title="title" :bgImage="bgImage"></music-list>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'
export default {
    components: {
        MusicList
    },
    computed: {
        title() {
            return this.singer.name
        },
        bgImage() {
            return this.singer.avatar
        },
        ...mapGetters([
            'singer'
        ])
    },
    created() {
        this._getSingerDetail()
    },
    data() {
        return {
            songs: [] // 歌曲数据 
        }
    },
    methods: {
        // 获取歌手详情信息
        _getSingerDetail() {
            if (!this.singer.id) { // 如果 id 查不出来则返回 singer 列表页面
                this.$router.push('/singer')
                return
            }
            getSingerDetail(this.singer.id).then((res) => {
                if (res.code === ERR_OK) {
                    this.songs = this._getSongData(res.data.list)

                    console.log(this.songs)
                }
            })
        },

        // 处理歌曲数据信息
        _getSongData(list) {
            let ret = []
            list.forEach((item, index) => {
                let {musicData} = item
                if (musicData.songid && musicData.songmid) {
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
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
