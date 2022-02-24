<template>
	<div>
		<template v-if="isShow">
			<div class="row">
				<div class="col-4">
					<div class="container-image-purifying-ability">
						<img
							class="image-purtify-ability"
							:src="imgUrl"
							alt="image"
						>
					</div>
				</div>
				<div class="col-8">
					<template v-for="item in dataPurifyingAbility">
						<div class="mt-2" v-if="!isNaN(item.value) && item.value > 0" :key="item.text">
							{{ item.text }}
							<Gauge
								:amountGauge="amountGauge"
								:value="item.value"
							/>
						</div>
					</template>
				</div>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Gauge from './Gauge.vue';

	export default Vue.extend({
		components: { Gauge },
		props: {
			imgUrl: {
				type: String,
				default: "",
			},
			isShow: {
				type: Boolean,
				default: false,
			},
			dataPurifyingAbility: {
				type: Array,
				default: (()=>[]),
			},
			amountGauge: {
				type: Number,
				default: 0,
			},
		},

	})
</script>

<style lang="scss" scoped>
.container-image-purifying-ability {
	display: flex;
	justify-content: center;

	width: $width-icon-container-plant-page;
	height: $width-icon-container-plant-page;
	border-radius: 50%;

	background: #C6D9F0 0% 0% no-repeat padding-box;
	border: 6px solid #E8F0F9;
	opacity: 1;

	.image-purtify-ability {
		width: $width-icon-plant-page;
		opacity: 1;
	}
}
</style>
