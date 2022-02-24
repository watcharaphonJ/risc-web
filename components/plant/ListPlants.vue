<template>
	<div>
		<template v-if="plants.length > 0">
			<template
				v-for="(item, index) in plants"
			>
				<PlantsDetail
					:plant="item"
					:key="index"
				/>
			</template>
		</template>
		<template v-else>
			<div class="text-center">
				<NotFoundPage />
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import PlantsDetail from '../common/PlantsDetail.vue'
import NotFoundPage from '~/components/error/404NotFound.vue'
import Vue from 'vue'
export default Vue.extend({
	components: { PlantsDetail, NotFoundPage },
	props: {
		plants: {
			type: Array,
			default: (() => []),
		},
	},
})
</script>
<style lang="scss" scoped>

</style>
