<!--
  * author: AceChen
  * 2017-7-9
  * readme: 热门歌单推荐组件
-->
<template>
	<div class="recommend">
		<div class="recommend-content">
			<div v-if="recommends.length" class="slider-wrapper">
				<slider>
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl" />
						</a>
					</div>
				</slider>
			</div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>

<script>
import Slider from '@/base/slider'
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'

export default {
	components: {
		Slider
	},
	data() {
		return {
			recommends: [],  // 推荐数据   
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
						this.recommends = res.data.slider
					} else {
						console.log(11111)
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
</style>
