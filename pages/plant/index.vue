<template>
	<div>
		<div class="row">
			<div class="col-3"></div>
			<div class="col-9">
				<BaseInput />
			</div>
		</div>
		<div class="row space-between-session">
			<div class="col-3 row">
				<div class="col-3">
					Order by
				</div>
				<div class="col-9">
					<BaseSelect />
				</div>
			</div>
			<div class="col-9">
				<ListPlants :plants="plants" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import BaseInput from '~/components/baseComponents/Search.vue';
import BaseSelect from '~/components/baseComponents/Select.vue';
import ListPlants from '~/components/plant/ListPlants.vue'
import Vue from 'vue'
export default Vue.extend({
	name: 'plantPage',
	components: { BaseInput, BaseSelect, ListPlants },
	data() {
		return {
			plants: [
				{
					english_common_name: 'Urn plant, Silver vase',
					thai_name: 'สับปะรดสี',
					scietific_name_normal: 'Test name normal',
					scietific_name_italic: 'Aechmea fasciata',
					plant_img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80',
					pm: [
						{
							text: 'PM 1',
							value: 5
						},
						{
							text: 'PM 2.5',
							value: 3
						},
						{
							text: 'PM 10',
							value: 0
						},
					],
					not_pm: [
						{
							text: 'Formaldehyde',
							value: 6
						},
	{
							text: 'Benzene',
							value: 2
						},
						{
							text: 'Toluene',
							value: 5
						},
						{
							text: 'Ethylbenzene',
							value: 3
						},
						{
							text: 'Xylene',
							value: 4
						},
						{
							text: 'TMA',
							value: 0
						},
					],
					growth_form: [
						{
							text: 'Tree',
							value: false
						},
						{
							text: 'Woody/Herb',
							value: false
						},
						{
							text: 'Creeper',
							value: false
						},
						{
							text: 'Climber',
							value: false
						},
						{
							text: 'Fern',
							value: true
						},
						{
							text: 'Hydrophyte',
							value: false
						},
					],
					landscape_feature: [
						{
							text: 'Ornamental Flowers',
							value: false
						},
						{
							text: 'Ornamental Foliage',
							value: false
						},
						{
							text: 'Ornamental Form',
							value: false
						},
					],
					plant_care: {
						light_preference: "Full shade",
						water_preference: "Losts of water",
					},
				},
				{
					english_common_name: 'Urn plant, Silver vase2',
					thai_name: 'สับปะรดสี2',
					scietific_name_normal: 'Test name normal2',
					scietific_name_italic: 'Aechmea fasciata2',
					plant_img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80',
					pm: [
						{
							text: 'PM 1',
							value: 0
						},
						{
							text: 'PM 2.5',
							value: 3
						},
						{
							text: 'PM 10',
							value: 0
						},
					],
					not_pm: [
						{
							text: 'Formaldehyde',
							value: 0
						},
	{
							text: 'Benzene',
							value: 2
						},
						{
							text: 'Toluene',
							value: 5
						},
						{
							text: 'Ethylbenzene',
							value: 3
						},
						{
							text: 'Xylene',
							value: 0
						},
						{
							text: 'TMA',
							value: 0
						},
					],
					growth_form: [
						{
							text: 'Tree',
							value: true
						},
						{
							text: 'Woody/Herb',
							value: false
						},
						{
							text: 'Creeper',
							value: false
						},
						{
							text: 'Climber',
							value: false
						},
						{
							text: 'Fern',
							value: true
						},
						{
							text: 'Hydrophyte',
							value: false
						},
					],
					landscape_feature: [
						{
							text: 'Ornamental Flowers',
							value: false
						},
						{
							text: 'Ornamental Foliage',
							value: false
						},
						{
							text: 'Ornamental Form',
							value: false
						},
					],
					plant_care: {
						light_preference: "Partial shade",
						water_preference: "Moderate water",
					},
				},
				{
					english_common_name: 'Urn plant, Silver vase2',
					thai_name: 'สับปะรดสี2',
					scietific_name_normal: 'Test name normal2',
					scietific_name_italic: 'Aechmea fasciata2',
					plant_img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2873&q=80',
					pm: [
						{
							text: 'PM 1',
							value: 0
						},
						{
							text: 'PM 2.5',
							value: 3
						},
						{
							text: 'PM 10',
							value: 0
						},
					],
					not_pm: [
						{
							text: 'Formaldehyde',
							value: 0
						},
	{
							text: 'Benzene',
							value: 2
						},
						{
							text: 'Toluene',
							value: 5
						},
						{
							text: 'Ethylbenzene',
							value: 3
						},
						{
							text: 'Xylene',
							value: 0
						},
						{
							text: 'TMA',
							value: 0
						},
					],
					growth_form: [
						{
							text: 'Tree',
							value: false
						},
						{
							text: 'Woody/Herb',
							value: false
						},
						{
							text: 'Creeper',
							value: false
						},
						{
							text: 'Climber',
							value: false
						},
						{
							text: 'Fern',
							value: true
						},
						{
							text: 'Hydrophyte',
							value: false
						},
					],
					landscape_feature: [
						{
							text: 'Ornamental Flowers',
							value: false
						},
						{
							text: 'Ornamental Foliage',
							value: false
						},
						{
							text: 'Ornamental Form',
							value: false
						},
					],
					plant_care: {
						light_preference: "Partial shade",
						water_preference: "Moderate water",
					},
				}
			],
		};
	},
})
</script>

<style scoped>

</style>
