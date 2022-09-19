<template>
	<div class="wrapper">
		<the-header />
		<main class="main">
			<section class="s-home">
				<div class="s-home__container">
				<h1 class="s-home__title title">custom game<br>development company</h1>
				<p class="s-home__subtitle subtitle">Game-Boom specializes in bangladesh game devolopment service,<br>
AR/VR gaming and game art creation</p>
				<custom-button class="s-home__btn"/>
			</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import CustomButton from "../components/CustomButton.vue";
</script>

<style lang="scss" scoped>
.wrapper {
	background: url('/home-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
}
.s-home {
		&__container {
			padding: 115px 50px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		&__title {
			font-size: 52px;
			line-height: 62px;
			text-align: center;
			text-transform: uppercase;
		}
		&__subtitle {
			font-size: 20px;
			line-height: 30px;
			text-align: center;
			padding: 20px 0 50px;
		}
		&__btn {
			margin-left: 55px;
		}
}
</style>