<template>
	<scroll :data="data" class="listview" ref="listview" :listenScroll="listenScroll" :probeType="probeType" @scroll="scroll">
		<ul>
			<li v-for="group in data " class="list-group" ref="listGroup">
				<h2 class="list-group-title">{{group.title}}</h2>
				<uL>
					<li v-for="item in group.items" class="list-group-item" @click="selectItem(item)">
						<img class="avatar" v-lazy="item.avatar">
						<span class="name">{{item.name}}</span>
					</li>
				</uL>
			</li>
		</ul>
		<div class="list-shortcut" @touchstart.prevent="moveStart">
			<ul>
				<li v-for="(item, index) in shortcutList" class="item" :data-index="index" :class="{'current': currentIndex === index}">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="list-fixed" v-show="fixedTitle">
			<h1 class="fixed-title">{{fixedTitle}}</h1>
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
		},
		fixedTitle() {
			if (this.scrollY > 0) {
				return
			}
			return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
		}
	},
	data() {
		return {
			scrollY: -1,
			currentIndex: 0,
			touch: {},
		}
	},
	created() {
		this.listenScroll = true
		this.listenHeight = []
		this.probeType = 3
	},
	methods: {
		// 触摸滚动事件(右侧字母快速滚动)
		moveStart(e) {
			let curIndex = getData(e.target, 'index')
			let firstTouch = e.touches[0]
			this.touch.y1 = firstTouch.pageY
			this.touch.curIndex = curIndex
			this.$refs.listview.scrollToElement(this.$refs.listGroup[curIndex], 0)
			this._scrollTo(curIndex)
		},
		_scrollTo(index) {
			if (this.listenHeight && index != null) {
				this.scrollY = -this.listenHeight[parseInt(index)]
			}
			if (index < 0) {
				index = 0
			} else if (index > this.listenHeight.length - 2) {
				index = this.listenHeight.length - 2
			}
			this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
			
		},

		// 滚动事件
		scroll(pos) {
			this.scrollY = pos.y
		},

		_getHeight() {
			this.listenHeight = []
			const list = this.$refs.listGroup
			let height = 0
			this.listenHeight.push(height)
			list.forEach((item, index) => {
				height += item.clientHeight
				this.listenHeight.push(height)
			})
		},

		// 跳转至歌手详情
		selectItem(item) {
			this.$emit('select', item)
		}
	},
	watch: {
		data() {
			setTimeout(() => {
				this._getHeight()
			}, 20)
		},
		scrollY(newY) {
			const listHeight = this.listenHeight
			// 当滚动到顶部
			if (newY > 0) {
				this.currentIndex = 0
				return false
			}

			// 当在中间部分滚动
			for(let i = 0; i<listHeight.length-1; i++) {
				let height1 = listHeight[i]
				let height2 = listHeight[i+1]
				if (!height2 || (-newY >= height1 && -newY < height2)) {
					this.currentIndex = i
					return false
				}
			}

			// 当滚动到底部，且-newY大于最后一个元素的上限
			this.currentIndex = listHeight.length -2 // 因为右侧字母元素比左侧多一个
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
		margin-left: -80px;
		margin-top: -20px;
	}
	.list-group-title {
		text-align: left;
		height: 30px;
		line-height: 30px;
		padding-left: 60px;
		font-size: 14px;
		color: #ccc;
		background: #666;
	}
	.list-group-item {
		display: flex;
		align-items: center;
		padding: 10px 0 10px 28px;
	}
	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.name {
		margin-left: 20px;
		color: #ccc;
		font-size: 14px;
	}
	.list-shortcut {
		position: absolute;
		z-index: 30;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 20px;
		padding: 10px 0;
		border-radius: 10px;
		background: #333;
		font-family: Helvetica;
		text-align: left;
	}
	.item {
		list-style: none;
		padding: 3px 0 3px 0;
		line-height: 1;
		color: #ccc;
		font-size: 12px;
		margin-left: -34px; 
	}
	.current {
		color: orange;
	}
	.list-fixed {
		position: absolute;
		top: -10px;
		left: 0;
		width: 100%;
	}
	.fixed-title {
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #ccc;
		background: #666;
		text-align: left;
		padding-left: 20px;
	}
	.loading-container {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
