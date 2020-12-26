<template>
	<div id="main-top">
		<div id="main-top-div-burger">
			<button type="button" id="main-top-burger-button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<div id="main-top-div-logo">
			<img id="main-top-logo" src="../assets/logo.png" />
		</div>
		<div id="main-top-div-login">
			<span id="main-top-login">로그인 | 회원가입</span>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	$top-main-size: 50px;
	$main-color: rgb(26, 83, 92);
	$main-color-hover: rgba(26, 83, 92, 0.5);

	div#main-top {
		width: 99%;
		height: $top-main-size;
		display: flex;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		div {
			width: 100%;
		}
		#main-top-div-burger {
			#main-top-burger-button {
				width: $top-main-size;
				background-color: rgba(0, 0, 0, 0);
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
			#main-top-burger-button:hover {
				cursor: pointer;
				span {
					background-color: $main-color-hover;
				}
			}
			#main-top-burher-button:focus {
				outline: none;
				box-shadow: none;
			}
		}
		#main-top-div-logo {
			text-align: center;
			#main-top-logo {
				height: $top-main-size;
			}
			#main-top-logo {
				cursor: pointer;
			}
		}
		#main-top-div-login {
			text-align: end;
			#main-top-login {
				font-size: 12px;
				font-weight: bold;
				color: $main-color;
				margin-right: 5px;
				padding: 10px;
			}
			#main-top-login:hover {
				cursor: pointer;
				opacity: 0.5;
				filter: alpha(opacity=50);
			}
		}
	}
</style>
