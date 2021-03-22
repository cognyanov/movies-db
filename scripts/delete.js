import {deleteMovie} from './data.js';

export default async function() {
   
    await deleteMovie(localStorage.getItem('currId'));

    this.redirect('#/home');

}