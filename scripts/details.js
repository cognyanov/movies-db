import { getMovieById, getLikedMovies } from "./data.js";


export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }

    let id = this.params.id;


    const currMovie = await getMovieById(id);

    if(currMovie.creator === localStorage.getItem('email')) {
        currMovie.isOwner = true;
    } else {
        currMovie.isOwner = false;
    
        const res = await getLikedMovies(localStorage.getItem('userId'));
        const likedMovies = res.likedMovies;

        if(likedMovies.includes(currMovie.title)) {
            currMovie.isLiked = true;
        } else {
            currMovie.isLiked = false;
        }
    }
    

  

    localStorage.setItem('currId', id);
    localStorage.setItem('currLikes', currMovie.peopleLiked);

    this.partial('./templates/details.hbs', currMovie);
}
