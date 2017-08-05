<!--
  * author: AceChen
  * 2017-7-9
  * readme: 热门歌单推荐组件
-->
<template>
	<div class="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper">
					<slider>
						<div v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" :src="item.picUrl" />
							</a>
						</div>
					</slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>
					<ul>
						<li v-for="item in discList" class="item">
							<div class="icon">
								<img width="60" height="60" v-lazy="item.imgurl"/>
							</div>
							<div class="text">
								<h2 class="name" v-html="item.creator.name"></h2>
								<p class="desc" v-html="item.dissname"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="loading-container" v-show="!discList.length">
				<loading></loading>
			</div>
		</scroll>
	</div>
</template>

<script>
import Slider from '@/base/slider'
import Scroll from '@/base/scroll'
import Loading from '@/base/loading/loading'
import { getRecommend, getDiscList } from '@/api/recommend'
import { ERR_OK } from '@/api/config'

export default {
	components: {
		Slider,
		Scroll,
		Loading
	},
	data() {
		return {
			recommends: [],  // 推荐数据
			discList: [], // 歌单列表数据
			checkLoaded: false
		}
	},
	created() {
		this._getRecommend()
	},

	methods: {
		_getRecommend() {
			getRecommend()
				.then((res) => {
					if (res.code === ERR_OK) {
						this._getDiscList()
						this.recommends = res.data.slider
					} else {
						console.log(11111)
					}
				})
		},

		_getDiscList() {
			getDiscList()
				.then((res) => {
					if (res.code === ERR_OK) {
						this.discList = res.data.list
					} else {
						console.log(22222)
					}
				})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend {
	position: fixed;
	width: 100%;
	top: 94px;
	left: 0;
	bottom: 0;
}

.recommend-content {
	height: 100%;
	overflow: hidden;
}

.slider-wrapper {
	position: relative;
	width: 100%;
	overflow: hidden;
}

.recommend-list .list-title {
	height: 65px;
	line-height: 65px;
	text-align: center;
	font-size: 16px;
	color: teal;
}

.recommend-list .item{
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	align-items: center;
	padding: 0 20px 20px 0px;
	margin-left: -20px;
}

.icon{
	/*flex: 0 0 60px;*/
	width: 60px;
	padding-right: 20px;
}

.text{
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	flex: 1;
	line-height: 10px;
	overflow: hidden;
	align-items: flex-start;
	/*font-size: 16px;*/
}

.name{
	/*margin-bottom: 10px;*/
	color: #ccc;
	font-size: 16px;
}

.desc{
	color: #999;
	font-size: 12px;
}

.loading-container{
	position: absolute;
	width: 100%;
	top: 50%;
	transform: translateY(-50%);
}
</style>
