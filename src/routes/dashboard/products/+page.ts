import { error } from '@sveltejs/kit';
import { page } from '$app/stores';
export const load = async (loadEvent: any) => {
	console.log('load fuunction called in page.ts', page);
	const { fetch } = loadEvent;
	const title = 'List of available Products';
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	// if (!response.ok) {
	// 	throw error(404, 'no products available');
	// }
	const products = await response.json();
	console.log(response, products, 'here is response');
	return {
		title,
		products
	};
};
