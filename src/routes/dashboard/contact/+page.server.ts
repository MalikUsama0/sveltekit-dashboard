import { PUBLIC_BASE_URL } from '$env/static/public';
import { NEW_URL } from '$env/static/private';

export const actions = {
	default: async ({ request, cookies }: any) => {
		// console.log(request, 'here is request..');
		const data = await request.formData();
		console.log(data, 'here is data on server side of form actions');
		const userName = data.get('name');
		console.log(userName, 'here is my user name');
		return { message: 'save data' };
	}
};

export const load = async (data: any) => {
	// console.log(data, 'here is data in server of contact js');
	const { parent } = data;
	const parentData = await parent();
	// console.log(parentData, 'here is parent data');
	// console.log(PUBLIC_BASE_URL, NEW_URL, 'here is base url in server component');
	return {};
};
