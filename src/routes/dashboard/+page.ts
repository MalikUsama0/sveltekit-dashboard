import { error } from '@sveltejs/kit';
import { page } from '$app/stores';
export const load = async (loadEvent: any) => {
	const { parent } = loadEvent;
	const parentt = await parent();
	console.log(parentt, 'here is load event ');
	return {
		testing: 'hello world'
	};
};
