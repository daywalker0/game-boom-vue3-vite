<template>
	<div class="wrapper">
		<the-header />
		<main class="main">
			<section class="s-build">
				<div class="s-build__container">
					<div class="slider">
						<swiper
							:slides-per-view="3"
							:space-between="50"
							@swiper="onSwiper"
							@slideChange="onSlideChange"
						>
							<swiper-slide>Slide 1</swiper-slide>
							<swiper-slide>Slide 2</swiper-slide>
							<swiper-slide>Slide 3</swiper-slide>
							...
						</swiper>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<style>

</style>