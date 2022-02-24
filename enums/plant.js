export const ENUM_PLANT =  Object.freeze({
	GAUGE_PURIFY_PM: 12,
	GAUGE_PURIFY_NOT_PM: 5,

	TYPE_PURIFYING_ABILITY: 'Purifying Ability',
	TYPE_GROWTH_FORM: 'Growth Form',
	TYPE_PLANT_CARE: 'Plant Care',
	TYPE_LANDSCAPE_FEATURE: 'Landscape Feature',
});


export const PLANT_CARE = Object.freeze({
	light: [
		{
			text: 'Full shade',
			value: 1,
		},
		{
			text: 'Partial shade',
			value: 2,
		},
		{
			text: 'Partial sun',
			value: 3,
		},
		{
			text: 'Full sun',
			value: 4,
		}
	],
	water: [
		{
			text: 'Little water',
			value: 1,
		},
		{
			text: 'Moderate water',
			value: 2,
		},
		{
			text: 'Losts of water',
			value: 3,
		},
	],
});
