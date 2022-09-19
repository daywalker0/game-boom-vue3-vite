<template>
	<header class="header">
		<div class="header__container">
			<a href="/" class="header__logo logo">Game<br><span>boom</span></a>
			<a href="#" class="header__btn">menu</a>
		</div>
	</header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 145px;
	}
	&__logo {
		font-family: PlayfairDisplay-Bold;
		font-size: 45px;
		line-height: 25px;
		cursor: pointer;
		span {
			text-transform: uppercase;
			padding-left: 30px;
			font-size: 28px;
		}
	}
	&__btn {
		font-family: Cabin-SemiBold;
		font-size: 16px;
		line-height: 18px;
		text-align: center;
		color: #FFFFFF;
		border: 1px solid #C9C9C9;
		padding: 14px 16px;
		text-transform: uppercase;
		&::after {
			content: '';
			background: url('/shape.svg');
			background-size: cover;
			height: 12px;
			width: 32px;
			display: inline-block;
			margin-left: 20px;
			vertical-align: middle;
		}
	}
}

</style>