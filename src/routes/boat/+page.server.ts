import type { PageServerLoad, Actions } from './$types';

export const load = (async ({cookies}) => {
    const boatname = cookies.get('boatname');
    const random = Math.random();
    return {
        boatname,
        random,
    };
}) satisfies PageServerLoad;

export const actions = {

} satisfies Actions;

