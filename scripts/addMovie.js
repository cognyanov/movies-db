import { createPost } from './data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/addMovie.hbs');
}

export async function addMovie() {
    try {
        const result = await createPost(this.params.title, this.params.description, this.params.imageUrl, localStorage.getItem('email'));

        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }


        this.redirect('#/home');



    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}
