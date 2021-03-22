import {register} from './data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/register.hbs');
}

export async function registerPost() {

    if (this.params.email.length === 0) {
        alert('Please enter email.');
        return;
    }

    if (this.params.password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (this.params.password !== this.params.repeatPassword) {
        alert('Password don\'t match.');
        return;
    }

    try {

        
        const result = await register(this.params.email, this.params.password);

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