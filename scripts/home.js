import { getAllMovies }  from "./data.js";

export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs'),
        moviesPage: await this.load('./templates/moviesPage.hbs')
    }
    
    if (this.app.userData.loggedIn) {
        const allMovies = await getAllMovies();
        this.app.userData.movies = allMovies;
    }

    this.partial('./templates/home.hbs', this.app.userData);
}
