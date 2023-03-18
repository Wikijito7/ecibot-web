import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        title: `Hello world! Soy id: ${params.id}`,
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
        date: new Date()
    };
 
  // throw error(404, 'Not found');
}