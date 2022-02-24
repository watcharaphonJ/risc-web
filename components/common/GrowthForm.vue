<template>
	<div class="container-growth-form">
		<template v-if="isShow">
			<div class="growth-form">
				<template v-for="item in data">
					<div v-if="item.value" class="growth-form-items" :key="item.text">
						<div class="container-imagea-growth-form">
							<img
								class="image-growth-form"
								:src="renderImageGrowthForm(item.text)"
								:alt="`image-${item.text}`"
							>
						</div>
						<p>
							{{item.text}}
						</p>
					</div>
				</template>
			</div>
		</template>
		<template v-else>
			<NotFoundPage />
		</template>

	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import NotFoundPage from '~/components/error/404NotFound.vue'

	export default Vue.extend({
		components: {
			NotFoundPage
		},
		props: {
			isShow: {
				type: Boolean,
				default: false,
			},
			data: {
				type: Array,
				default: (() => []),
			}
		},
		data() {
			return {
				tree: require('~/static/image/growth_form/Tree.svg'),
				fern: require('~/static/image/growth_form/Fern.svg'),
				creeper: require('~/static/image/growth_form/Creeper.svg'),
				climber: require('~/static/image/growth_form/Climber.svg'),
				hydrophyte: require('~/static/image/growth_form/Hydrophyte.svg'),
				woody_herb: require('~/static/image/growth_form/Woody-Herb.svg'),
			}
		},
		methods: {
			renderImageGrowthForm(text: string) {
				let result;
				switch(text) {
					case 'Tree':
						result = this.tree;
						break
					case 'Woody/Herb':
						result = this.woody_herb;
						break
					case 'Fern':
						result = this.fern;
						break
					case 'Creeper':
						result = this.creeper;
						break
					case 'Climber':
						result = this.climber;
						break
					case 'Hydrophyte':
						result = this.hydrophyte;
						break
				}
				return result;
			},
		}
	})
</script>

<style lang="scss" scoped>
.container-growth-form {
	.growth-form{
		display: flex;
		align-items: center;
		justify-content: center;

		.growth-form-items {
			margin: rem(10);
			text-align: center;

			.container-imagea-growth-form {

				.image-growth-form{
					width: 100%;
				}
			}
		}
	}
}
</style>
