<template>
	<div class="space-between-session">
		<h3>{{ plant.english_common_name }}</h3>
		<h4>{{ plant.thai_name }}</h4>
		<span>
			<strong>Scientific name : </strong><i>{{ plant.scietific_name_italic }}</i>
		</span>
		<div class="row">
			<div class="col-4">
				<img
					:src="plant.plant_img"
					alt="plant image"
					class="w-100 rounded"
				>
			</div>
			<div class="col-8 row">
				<div class="col-6">
					<!-- purifying ability -->
					<DetailPlantCard :data="plant" :type="PURIFYING_ABILITY"/>
				</div>
				<div class="col-6">
					<!-- growth form -->
					<DetailPlantCard :data="plant" :type="GROWTH_FORM" />
				</div>
				<div class="col-6">
					<!-- plant care -->
					<DetailPlantCard :data="plant" :type="PLANT_CARE" />
				</div>
				<div class="col-6">
					<!-- landscape feature -->
					<DetailPlantCard :data="plant" :type="LANDSCAPE_FEATURE" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import DetailPlantCard from '../common/DetailPlantCard.vue'
import { ENUM_PLANT } from '~/enums/plant'
import Vue from 'vue'

export default Vue.extend({
	components: {
		DetailPlantCard
	},
	props: {
		plant: {
			type: Object,
			default: (()=>{}),
		},
	},
	data() {
		return {
			PURIFYING_ABILITY: ENUM_PLANT.TYPE_PURIFYING_ABILITY,
			GROWTH_FORM: ENUM_PLANT.TYPE_GROWTH_FORM,
			PLANT_CARE: ENUM_PLANT.TYPE_PLANT_CARE,
			LANDSCAPE_FEATURE: ENUM_PLANT.TYPE_LANDSCAPE_FEATURE
		}
	},
})
</script>
