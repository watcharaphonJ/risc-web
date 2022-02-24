<template>
	<div class="d-flex container-gauge">
		<template v-for="item in amountGauge">
			<span :key="item" :class="['gauge', item <= value ? 'active' : '']"></span>
		</template>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		props: {
			value: {
				type: Number,
				default: 0,
			},
			amountGauge: {
				type: Number,
				default: 0,
			}
		},

	})
</script>

<style lang="scss" scoped>
$height-gauge: rem(7);
$width-gauge: rem(20);

.container-gauge {
	display: grid;
	column-gap: rem(1);

	.gauge {
		height: $height-gauge;
		width: $width-gauge;
		background-color: rgb(234, 234, 234);
	}

	.gauge:first-child {
		border-radius: rem(20) 0 0 rem(20);
	}

	.gauge:last-child {
		border-radius: 0 rem(20) rem(20) 0;
	}

	.active {
		background-color: rgb(152, 210, 253) !important;
	}
}
</style>
