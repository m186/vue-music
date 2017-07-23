<!--
  * author: AceChen
  * 2017-7-23
  * readme: loading 加载组件
-->
<template>
	<div ref="loading">
        <img width="24" height="24" src="./loading.gif"/>
        <p class="desc">{{title}}</p>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
	props: {
		title: {
            type: String,
            default: '正在载入...'
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading{
        width: 100%;
        text-align: center;
    }
    .desc{
      line-height: 20px;
      font-size: 12px;
      color: #ccc;
    }
</style>
