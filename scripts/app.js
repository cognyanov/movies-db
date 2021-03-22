/*globals $, Sammy */

import home from './home.js';
import register, { registerPost } from './register.js';
import login, { loginPost } from './login.js';
import logout from './logout.js';
import openMovieForm, { addMovie } from './addMovie.js';
import details from './details.js';
import edit, {editIt} from './edit.js';
import deleteMovie from './delete.js';
import { likeTheMovie } from './like.js';

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');


        this.userData = {
            loggedIn: false
        };

        this.get('indexExam.html', home);
        this.get('#/home', home);
        this.get('/', home);

        this.get('#/register', register);
        this.get('#/login', login);
        this.get('#/logout', logout);
        this.get('#/addmovie', openMovieForm);
        this.get('#/details/:id', details);
        this.get('#/edit/:id', edit);
        this.get('#/delete/:id', deleteMovie);
         this.get('#/like', likeTheMovie);
        

        this.post('#register', (ctx) => { registerPost.call(ctx); });
        this.post('#login', (ctx) => { loginPost.call(ctx); });
        this.post('#addMovie', (ctx) => { addMovie.call(ctx); });
        this.post('#edit', (ctx) => { editIt.call(ctx); });
    //     this.post('#/like', (ctx) => { likeTheMovie.call(ctx); })

    });
    app.run();
});

