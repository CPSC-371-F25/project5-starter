import { menuItems, type MenuItem } from '$lib/state.svelte.server.js';
import { error } from '@sveltejs/kit';


// POST form action to add a new menu item
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('name')?.toString();
        const price = data.get('price')?.toString();
        if (!name || !price) {
            error(400, 'Menu item missing name or price');
        }

        // Rebuild as MenuItem object
        const menuItem = {
            name: name,
            price: +price,
            id: menuItems.length + 1,
        } satisfies MenuItem;

        // And add to in-memory database
        menuItems.push(menuItem);

        // Return success
        return menuItem;
    }
}