<template>
	<div>
		<div class="section-plant-care">
			<img
				v-for="(item) in amountImage"
				:key="`${type}-preference-${item}`"
				class="plant-care-image"
				:src="item <= preference.value ? imageActive : imageInActive"
				alt="icon light"
			>
		</div>
		<div class="text-center">
			{{preference.text}}
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		props: {
			amountImage: {
				type: Number,
				default: 3,
			},
			preference: {
				type: Object,
				default: (()=>{}),
			},
			type: {
				type: String,
				default: '',
			},
			imageActive: {
				type: String,
				default: '',
			},
			imageInActive: {
				type: String,
				default: '',
			},
		},

	})
</script>

<style lang="scss" scoped>
$width-image-plant-care: rem(30);

.section-plant-care {
	display: flex;
	align-items: center;
	justify-content: center;

	.plant-care-image {
		margin: rem(5);
		height: $width-image-plant-care;
		width: $width-image-plant-care;
	}
}
</style>
