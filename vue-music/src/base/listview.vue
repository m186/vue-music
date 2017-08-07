<template>
  <scroll :data="data" class="listview" ref="listview">
    <ul>
      <li v-for="group in data" class="list-group" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <uL>
          <li v-for="item in group.items" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </uL>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart.prevent="moveStart" @touchmove.stop.prevent="moving" @touchend="moveEnd">
      <ul>
        <li v-for="(index, item) in shortcutList" class="item" :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '@/base/scroll'
  import {getData} from 'common/js/dom'

  const ANCHOR_HEIGHT = 16

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    },
    computed: {
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      }
    },
    created() {
      this.touch = {}
    },
    methods: {
      // 触摸滚动事件(右侧字母快速滚动)
      moveStart(e) {
        let curIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.curIndex = curIndex
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
        this._scrollTo(curIndex)
      },
      moving() {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = this.touch.y2 - this.touch.y1
        let curIndex = this.touch.curIndex + delta
        this._scrollTo(curIndex)
      },
      moveEnd() {

      },
      _scrollTo(index) {
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      }
    }
  }

</script>

<style scoped>
  .listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
    .list-group {
      /* padding-bottom: 30px; */
      margin-left: -80px;
    }
      .list-group-title {
        text-align: left;
        height: 40px;
        line-height: 40px;
        padding-left: 60px;
        font-size: 16px;
        color: #ccc;
        background: #666;
      }
      .list-group-item {
        display: flex;
        align-items: center;
        padding: 10px 0 10px 30px;
      }
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name {
          margin-left: 20px;
          color: #ccc;
          font-size: 16px;
        }
    .list-shortcut {
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      padding: 20px 0;
      border-radius: 10px;
      background: #222;
      font-family: Helvetica;
      text-align: left;
    }
      .item {
        list-style: none;
        padding: 4px 0 4px 0;
        line-height: 1;
        color: #ccc;
        font-size: 12px;
         margin-left: -36px; 
      }
        /* &.current
          color: $color-theme */
    .list-fixed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
      .fixed-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
        color: #ccc;
        background: teal;
      }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
</style>
