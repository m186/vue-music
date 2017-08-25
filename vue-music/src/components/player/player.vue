<template>
    <div class="player" v-show="playList.length>0">
        <div class="normal-player" v-show="fullScreen">
            <div class="background">
                <img :src="currentSong.image" alt="" width="100%" height="100%">
            </div>
            <div class="top">
                <div class="back" @click="back">
                    <i class="icon-back"></i>
                </div>
            </div>
            <h1 class="title" v-html="currentSong.name"></h1>
            <h2 class="subtitle" v-html="currentSong.singer"></h2>
            <div class="middle">
                <div class="middle-l">
                    <div class="cd-wrapper">
                        <div class="cd">
                            <img :src="currentSong.image" alt="" class="image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="operators">
                    <div class="icon i-left">
                        <i class="icon-sequence"></i>
                    </div>
                    <div class="icon i-left">
                        <i class="icon-prev"></i>
                    </div>
                    <div class="icon i-center">
                        <i class="icon-play"></i>
                    </div>
                    <div class="icon i-right">
                        <i class="icon-next"></i>
                    </div>
                    <div class="icon i-right">
                        <i class="icon-not-favorite"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="mini-player" v-show="!fullScreen">
            <div class="icon" @click="open">
                <img :src="currentSong.image" alt="" width="40" height="40">
            </div>
            <div class="text">
                <h2 class="name" v-html="currentSong.name"></h2>
                <p class="desc" v-html="currentSong.singer"></p>
            </div>
            <div class="control"></div>
            <div class="control">
                <i class="icon-playlist"></i>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'fullScreen',
            'playList',
            'currentSong'
        ])
    },
    methods: {
        // 返回按钮，变更 fullScreen 的状态为 false
        back() {
            this.setFullScreen(false)
        },
        // 点击事件，变更 fullScreen 的状态为 true
        open() {
            this.setFullScreen(true)
        },
        ...mapMutations({
            setFullScreen: 'SET_FULL_SCREEN'
        })
    }
}
</script>

<style scoped>
.icon-sequence{
    background: url('../../common/images/sequence.png') no-repeat;
    background-size: 40px 40px;
    padding: 36px;
}
.icon-prev{
    background: url('../../common/images/prec.png') no-repeat;
    background-size: 40px 40px;
    padding: 40px;
}
.icon-play{
    background: url('../../common/images/play.png') no-repeat;
    background-size: 44px 44px;
    padding: 44px;
}
.icon-next{
    background: url('../../common/images/next.png') no-repeat;
    background-size: 40px 40px;
    padding: 40px;
}
.icon-not-favorite{
    background: url('../../common/images/love1.png') no-repeat;
    background-size: 40px 40px;
    padding: 38px;
}
.icon-playlist {
    background: url('../../common/images/sequence.png') no-repeat;
    background-size: 40px 40px;
    padding: 20px;
    position: absolute;
    right: 10px;
    bottom: 8px;
}
.normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* z-index: 150; */
    background: rgb(60, 60, 60);
}

.background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
}

.top {
    position: relative;
    margin-bottom: 25px;
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
    padding: 16px;
    margin-left:6px;
    font-size: 14px;
    color: teal;
    transform: rotate(-90deg);
}

.title {
    width: 70%;
    margin: 0 auto;
    margin-top: -10px;
    /* line-height: 40px; */
    text-align: center;
    /* no-wrap() */
    font-size: 18px;
    color: #fff;
}

.subtitle {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #fff;
}

.middle {
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
}

.middle-l {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 80%;
}

.cd-wrapper {
    position: absolute;
    left: 10%;
    top: 0;
    width: 80%;
    height: 100%;
}

.cd {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 10px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}


/* &.play
                animation: rotate 20s linear infinite
              &.pause
                animation-play-state: paused */

.image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.playing-lyric-wrapper {
    width: 80%;
    margin: 30px auto 0 auto;
    overflow: hidden;
    text-align: center;
}

.playing-lyric {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: orange;
}

.middle-r {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.lyric-wrapper {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
}

/* .text {
    line-height: 32px;
    color: orange;
    font-size: 14px;
} */


/* &.current
                color: $color-text */

.bottom {
    position: absolute;
    bottom: 50px;
    width: 100%;
}

.dot-wrapper {
    text-align: center;
    font-size: 0;
}

.dot {
    display: inline-block;
    vertical-align: middle;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: teal;
}


/* &.active
              width: 20px
              border-radius: 5px
              background: $color-text-ll */

.progress-wrapper {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    padding: 10px 0;
}

.time {
    color: orange;
    font-size: 14px;
    flex: 0 0 30px;
    line-height: 30px;
    width: 30px;
}


/* &.time-l
              text-align: left
            &.time-r
              text-align: right */

.progress-bar-wrapper {
    flex: 1
}

.operators {
    display: flex;
    align-items: center;
}

/* .icon {
    flex: 1;
    color: teal;
} */


/* &.disable
              color: $color-theme-d  */


/* i{
              font-size: 30px;
            }
          .i-left{
            text-align: right;
          }
          .i-center{
            padding: 0 20px;
            text-align: center;
          }
            i{
              font-size: 40px;
            }
          .i-right{
            text-align: left;
          }
          .icon-favorite{
            color: orange;
          }  */


/* &.normal-enter-active, &.normal-leave-active
        transition: all 0.4s
        .top, .bottom
          transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
      &.normal-enter, &.normal-leave-to
        opacity: 0
        .top
          transform: translate3d(0, -100px, 0)
        .bottom
          transform: translate3d(0, 100px, 0) */

.mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 60px;
    background: #555;
}


/* &.mini-enter-active, &.mini-leave-active
        transition: all 0.4s
      &.mini-enter, &.mini-leave-to
        opacity: 0 */

.icon {
    flex: 0 0 40px;
    width: 40px;
    padding: 0 10px 16px 20px;
}

img {
    border-radius: 50%
}

/* &.play
            animation: rotate 10s linear infinite
          &.pause
            animation-play-state: paused */

.text {
    display: flex;
    flex-direction: column;
     justify-content: flex-start; 
    flex: 1;
    line-height: 14px;
    overflow: hidden;
    width: 20px;
    margin-left: -50px;
}

.name {
    margin-bottom: 2px;
    font-size: 14px;
    color: #fff;
}

.desc {
    font-size: 12px;
    color: #888;
}

.control {
    flex: 0 0 30px;
    width: 30px;
    padding: 0 10px;
}

.icon-play-mini,
.icon-pause-mini,
.icon-playlist {
    font-size: 30px;
    color: orang;
}

.icon-mini {
    font-size: 32px;
    position: absolute;
    left: 0;
    top: 0;
}


/* @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg) */
</style>
