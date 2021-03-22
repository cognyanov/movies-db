import {editPost} from './data.js';
import {getMovieById} from './data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }

    const id = localStorage.getItem('currId');
    const currMovie = await getMovieById(id);

    this.partial('./templates/edit.hbs', currMovie);
}

export async function editIt () {
    try {
        const id = localStorage.getItem('currId');
        const result = await editPost(this.params['title'], this.params.description, this.params.imageUrl, id);

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

    
        this.redirect(`#/details/${localStorage.getItem('currId')}`);

    } catch (err) {
        console.error(err);
        alert(err.message);
    }

}