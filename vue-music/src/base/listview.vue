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
  </scroll>
</template>

<script>
  import Scroll from '@/base/scroll'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
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
      padding-bottom: 30px;
      margin-left: -80px;
    }
      .list-group-title {
        text-align: left;
        height: 30px;
        line-height: 30px;
        padding-left: 60px;
        font-size: 16px;
        color: #ccc;
        background: #333;
      }
      .list-group-item {
        display: flex;
        align-items: center;
        padding: 20px 0 0 30px;
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
      text-align: center;
      background: teal;
      font-family: Helvetica;
    }
      .item {
        padding: 3px;
        line-height: 1;
        color: #ccc;
        font-size: 16px;
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
