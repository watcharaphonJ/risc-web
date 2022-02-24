<template>
    <b-form-select
		v-model="selected"
		:options="options"
		size="sm"
		class="mt-0"
	></b-form-select>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		options: {
			type: Array,
			default: (() => [
				{ value: null, text: 'Please select an option' },
				{ value: 'a', text: 'This is First option' },
				{ value: 'b', text: 'Selected Option' },
				{ value: { C: '3PO' }, text: 'This is an option with object value' },
				{ value: 'd', text: 'This one is disabled', disabled: true }
			]),
		},
	},
	data() {
		return {
			selected: '',
		}
	},
})
</script>
