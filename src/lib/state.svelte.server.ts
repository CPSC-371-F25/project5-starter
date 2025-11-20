// If you're maintaining an in-memory state, use this file
// This is stored on the server-side
export type MenuItem = {
    id: number,
    name: string,
    price: number,
};

export const menuItems = $state([
    {
        id: 1,
        name: '1 Fish Half Chips + Slaw',
        price: 9.75,
    },
    {
        id: 2,
        name: '2 Fish Chips + Slaw',
        price: 14.75,
    }
]);