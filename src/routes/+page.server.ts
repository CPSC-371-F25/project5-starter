import type { PageLoad } from './$types';
import { menuItems } from '$lib/state.svelte.server';

// Need to access data from server-side (can't directly do an import)
export const load: PageLoad = ({ params }) => {
	return {
        menuItems
    };
};