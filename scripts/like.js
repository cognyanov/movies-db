import { likeIt, getLikedMovies } from "./data.js";
import {getMovieById} from "./data.js";

import {addLikedMovie} from './data.js';


export async function likeTheMovie () {
    const id = localStorage.getItem('currId');
    const currMovie = await getMovieById(id);

    const lastLikes = currMovie.peopleLiked;
    
    await likeIt(currMovie.title, currMovie.description, currMovie.image, currMovie.objectId, localStorage.getItem('currLikes'));
   
    let res  = await getLikedMovies(localStorage.getItem('userId'));
    let likedMovies = res.likedMovies;
    likedMovies += currMovie.title;

    await addLikedMovie(localStorage.getItem('userId'), likedMovies);
    
    this.redirect(`#/details/${localStorage.getItem('currId')}`);
}