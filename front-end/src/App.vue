<template>
	<div id="top">
		<img alt="Vue logo" src="./assets/logo.png" />
		<TopLayout msg="Welcome to Your Vue.js App!!" />
	</div>
</template>

<script>
	import TopLayout from "./components/TopLayout.vue"

	export default {
		name: "Top",
		components: {
			TopLayout,
		},
	}
</script>

<style>
	#top {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
