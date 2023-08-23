import type { PageServerLoad, Actions} from './$types';

export const load = (async ({cookies}) => {
    const boatname = cookies.get('boatname');
    const random = Math.random();
    return {
        boatname,
        random,
    };
}) satisfies PageServerLoad;
export const actions = { 
    rename: async ({request, cookies}) => {
        const formData = request.formData();
        const boatName = (await formData).get('boatname') as string;
        cookies.set('boatname', boatName);
    },
    captitalize : async ({cookies}) => {
        const boatname = cookies.get('boatname');
        if(boatname)
        {
            cookies.set('boatname', boatname.toUpperCase());
        }
    },
} satisfies Actions;


