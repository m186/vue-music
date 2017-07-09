<template>
	<div id="app">
		<m-header></m-header>
		<tab></tab>
		<keep-alive>  <!--keep-alive 标签可以将 router 标签的内容进行缓存-->
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import Tab from 'components/tab/tab'
import MHeader from 'components/m-header/m-header'

export default {
	name: 'app',
	components: {
		Tab,
		MHeader
	}
}
</script>
<style>
body {
	padding: 0;
	margin: 0;
	background: rgb(60, 60, 60)
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding-top: 16px;
	padding-bottom: 16px;
}
</style>
