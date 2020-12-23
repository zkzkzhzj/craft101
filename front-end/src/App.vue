<template>
	<div id="top">
		<TopLayout />
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

<style lang="scss">
	#top {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		/* 텍스트를 부드럽게 표시(하단 옵션 2개) */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
