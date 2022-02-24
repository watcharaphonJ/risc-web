<template>
	<div class="w-100 container-card-plant p-1">
		<div class="header-card-plant">
			{{ type }}
		</div>
		<div class="card-plant">
			<div class="padding-card-plant" v-if="type === PURIFYING_ABILITY">
				<PurifyingAbility
					:imgUrl="imagePM"
					:isShow="isHasPM"
					:dataPurifyingAbility="data.pm"
					:amountGauge="amountGaugePM"
				/>
				<PurifyingAbility
					class="mt-2"
					:imgUrl="imageNotPM"
					:isShow="isHasnot_pm"
					:dataPurifyingAbility="data.not_pm"
					:amountGauge="amountGaugenot_pm"
				/>
			</div>

			<div class="padding-card-plant" v-else-if="type === GROWTH_FORM">
				<GrowthForm
					:isShow="isHasGrowthForm"
					:data="data.growth_form"
				/>
			</div>

			<div v-else-if="type === PLANT_CARE">
				<PlantCare
					:isShow="isHasPlantCare"
					:data="data.plant_care"
				/>
			</div>

			<div class="padding-card-plant" v-else>LANDSCAPE_FEATURE</div>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { ENUM_PLANT } from '~/enums/plant';
import PurifyingAbility from './PurifyingAbility.vue'
import PlantCare from './PlantCare.vue'
import GrowthForm from './GrowthForm.vue'
export default Vue.extend({
	components: {
		GrowthForm,
		PurifyingAbility,
		PlantCare
	},
	props: {
		type: {
			type: String,
			default: '',
		},
		data: {
			type: Object,
			default: (()=>{}),
		},
	},
	computed: {
		isHasPM ():boolean {
			return this.checkValueArray(this.data.pm);
		},
		isHasnot_pm ():boolean {
			return this.checkValueArray(this.data.not_pm);
		},
		isHasGrowthForm ():boolean {
			return this.checkValueArray(this.data.growth_form)
		},
		isHasLandscapeFeature ():boolean {
			return this.checkValueArray(this.data.landscape_feature)
		},
		isHasPlantCare ():boolean {
			return this.checkValueJSON(this.data.plant_care)
		},
	},
	methods: {
		checkValueArray (arr: any): boolean {
			let isHasValue = false;
			for(const el of arr) {
				if (el.value) {
					isHasValue = true;
					break;
				}
			}
			return isHasValue
		},

		checkValueJSON (obj: any): boolean {
			let isHasValue = false;
			for(const el in obj) {
				if (obj[el]) {
					isHasValue = true;
					break;
				}
			}

			return isHasValue;
		}
	},
	data() {
		return {
			amountGaugePM: ENUM_PLANT.GAUGE_PURIFY_PM,
			amountGaugenot_pm: ENUM_PLANT.GAUGE_PURIFY_NOT_PM,

			imagePM: require('~/static/image/purifying_ability/purifying_ability_pm.svg'),
			imageNotPM: require('~/static/image/purifying_ability/purifying_ability_pm.svg'),

			PURIFYING_ABILITY: ENUM_PLANT.TYPE_PURIFYING_ABILITY,
			GROWTH_FORM: ENUM_PLANT.TYPE_GROWTH_FORM,
			PLANT_CARE: ENUM_PLANT.TYPE_PLANT_CARE,
			LANDSCAPE_FEATURE: ENUM_PLANT.TYPE_LANDSCAPE_FEATURE
		}
	},
})
</script>
<style lang="scss" scoped>
$radius: rem(10);
$padding-card: rem(10);

.container-card-plant {
	.header-card-plant {
		border-radius: $radius $radius 0 0;
		background-color: $theme-web;
		color: white;
		padding: $padding-card;
		font-weight: bold;
	}

	.card-plant {
		border: 1px solid $theme-web;
		border-radius: 0 0 $radius $radius;

		.padding-card-plant {
			padding: $padding-card;
		}
	}
}

</style>
