import { getAllMovies } from './data.js';



export default async function () {
    try {
        const result = await getAllMovies();
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}