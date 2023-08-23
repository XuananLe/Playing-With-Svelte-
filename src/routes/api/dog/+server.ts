import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    let user = {admin : true};
    if(!user.admin) return new Response('Unauthorized', {status : 401});
    return json({message : 'Hello World'});
};