<template>
	<div id="main">
		<div>
			<button type="button" id="burger-button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<div>
			<img id="main-logo" src="../assets/logo.png" />
		</div>
		<div>
			<span>로그인ㅣ회원가입</span>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	$burger-size: 45px;
	$logo-size: 50px;
	$main-color: rgb(26, 83, 92);
	$main-color-hover: rgba(26, 83, 92, 0.5);

	div#main {
		width: 100%;
		display: flex;
		position: fixed;
		justify-content: space-between;
		div {
			width: 100%;
			#burger-button {
				position: absolute;
				width: $logo-size;
				background-color: #fff;
				border: 0px;
				span {
					display: block;
					width: 70%;
					height: 3px;
					background-color: $main-color;
					margin: 4px 15%;
					border-radius: 10px;
				}
			}
			#burger-button:hover {
				span {
					background-color: $main-color-hover;
				}
			}
			#main-logo {
				height: $logo-size;
			}
		}
	}
</style>
