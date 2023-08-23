import type { PageLoad } from './$types';

export const load = (async ({ setHeaders }) => {
    let data : string = 'Hello World';
    setHeaders({
    "cache-control": "public, max-age=3600"
    });
    return {

    };
}) satisfies PageLoad;