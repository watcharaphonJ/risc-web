<template>
	<div>
		<template v-if="isShow">
			<div class="container-plant-care">
				<div class="row content-plant-care">
					<div class="col-6 border-right">
						<PlantCareImage
							:amountImage="3"
							type="sun"
							:preference="lightPreference"
							:imageActive="lightYes"
							:imageInActive="lightNo"
						/>
					</div>

					<div class="col-6">
						<PlantCareImage
							:amountImage="3"
							type="water"
							:preference="waterPreference"
							:imageActive="waterYes"
							:imageInActive="waterNo"
						/>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
	import { PLANT_CARE } from '~/enums/plant'
	import PlantCareImage from './PlantCareImage.vue'
	import Vue from 'vue'

	export default Vue.extend({
		components: {
			PlantCareImage
		},
		props: {
			isShow: {
				type: Boolean,
				default: false,
			},
			data: {
				type: Object,
				default: (() => {}),
			},
		},
		computed: {
			lightPreference ():object {
				return this.findObject(this.PLANT_CARE.light, this.data.light_preference)
			},
			waterPreference (): object {
				return this.findObject(this.PLANT_CARE.water, this.data.water_preference)
			}

		},
		data() {
			return {
				lightYes: require('~/static/image/plant_care/sun-yes.svg'),
				lightNo: require('~/static/image/plant_care/sun-no.svg'),
				waterYes: require('~/static/image/plant_care/water-yes.svg'),
				waterNo: require('~/static/image/plant_care/water-no.svg'),
				PLANT_CARE: PLANT_CARE,
			}
		},
		methods: {
			findObject(arr: any, name: string): object {
				const result = arr.find((el:any)=>{
					return el.text === name
				}) || {};
				return result;
			}
		}
	})
</script>

<style lang="scss" scoped>
.container-plant-care {
	padding: rem(10);

	.content-plant-care {
		.border-right {
			border-right: 1px solid $theme-web;
		}
	}
}
</style>
