<template>
	<div class="base-input-search">
		<div class="base-input-search-container">
			<SearchIcon class="search-icon base-icon-input"/>
			<div class="text-input-container">
				<input
					type="text"
					ref="inputSearch"
					class="input-search"
					:placeholder="searchPlaceHolder"
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import SearchIcon from '~/components/icons/SearchIcon.vue'
import Vue from 'vue'
export default Vue.extend({
	props: {
		searchPlaceHolder: {
			type: String,
			default: 'Search',
		},
	},
	components:{
		SearchIcon
	}
})
</script>

<style lang="scss" scoped>
$padding-left-input: rem(2);
.base-input-search{
	position: relative;
	.base-input-search-container {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		.base-icon-input {
			padding: 0px;
		}

		.search-icon {
			font-size: $font-18;
			position: absolute;

			padding-right: calc($padding-left-input + rem(2));

			right: 0;
		}

		.text-input-container {
			padding: 0;

			display: flex;
			width: 100%;
			.input-search {
				padding-right: calc(1em + $padding-left-input);
				margin-top: auto;
				margin-bottom: auto;

				min-width: unset;
				height: rem(36);
				width: 100%;
				max-width: 100% !important;

				font-size: $font-20;
				color: $theme-web;
			}
		}
	}
}
</style>
