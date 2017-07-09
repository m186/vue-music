<!--
  * author: AceChen
  * 2017-7-9
  * readme: slider 轮播组件
-->
<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
		<div class="dots">
			<span class="dot" v-for="(item, index) in dots" :class="{active: currentPage === index}"></span>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

export default {
	data() {
		return {
			dots: [], // 滚动轮播图下相应的原点
			currentPage: 0, // 当前页码
		}
	},
	props: {
		loop: {
			type: Boolean,
			default: true
		},
		autoPlay: {
			type: Boolean,
			default: true
		},
		interval: {
			type: Number,
			default: 3000
		}
	},

	created() {},

	mounted() {
		// 确保组件已经加载，设置20ms 延时，因为浏览器是每17ms 帅新一次
		setTimeout(() => {
			this._setSliderWidth(false)
			this._initDots()
			this._initSlider()

			if (this.autoPlay) this._play()
		}, 20)

		window.addEventListener('resize', () => {
			if(!this.slider) return false
			this._setSliderWidth(true)
			this.slider.refresh()
		})
	},

	methods: {
		_setSliderWidth(isResize) {
			this.children = this.$refs.sliderGroup.children

			let width = 0
			let sliderWidth = this.$refs.slider.clientWidth

			Array.from(this.children).forEach((item, index) => {
				addClass(item, 'slider-item')

				item.style.width = sliderWidth + 'px'
				width += sliderWidth
			})

			if (this.loop && !isResize) {
				width += 2 * sliderWidth
			}

			this.$refs.sliderGroup.style.width = width + 'px'

		},
		_initDots() {
			this.dots = new Array(Array.from(this.children).length)
		},
		_initSlider() {
			this.slider = new BScroll(this.$refs.slider, {
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: true,
				snapLoop: this.loop,
				snapThreshold: 0.3,
				snapSpeed: 400
			})

			this.slider.on('scrollEnd', () => {
				let pageIndex = this.slider.getCurrentPage().pageX
				if (this.loop) {
					pageIndex -= 1
				}
				this.currentPage = pageIndex

				if (this.autoPlay) {
					clearTimeout(this.timer)
					this._play()
				}
			})
		},
		_play() {
			let pageIndex = this.currentPage + 1
			if (this.loop) pageIndex += 1

			this.timer = setTimeout(() => {
				this.slider.goToPage(pageIndex, 0, 400)
			}, this.interval)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
	min-height: 1px
}

.slider-group {
	position: relative;
	overflow: hidden;
	white-space: nowrap;
}

.slider-item {
	float: left;
	box-sizing: border-box;
	overflow: hidden;
	text-align: center
}

.slider-item a {
	display: block;
	width: 100%;
	overflow: hidden;
	text-decoration: none;
}

.slider-item img {
	display: block;
	width: 100%;
}

.dots {
	position: absolute;
	right: 0;
	left: 0;
	bottom: 6px;
	text-align: center;
	font-size: 0;
}

.dots .dot {
	display: inline-block;
	margin: 0 4px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: rgba(240, 240, 240, 0.6);
}

.dots .active {
	width: 20px;
	height: 8px;
	border-radius: 5px;
	background: rgba(240, 240, 240, 0.6);
}
</style>
