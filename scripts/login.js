import {login} from './data.js';

export default async function () {
    this.partials = {
        header: await this.load('./templates/header.hbs'),
        footer: await this.load('./templates/footer.hbs')
    }

    this.partial('./templates/login.hbs');
}

export async function loginPost() {
    try {
         const result = await login(this.params.email, this.params.password);
         if (result.hasOwnProperty('errorData')) {
             const error = new Error();
             Object.assign(error, result);
             throw error;
         }
 
         this.app.userData.loggedIn = true;
         this.app.userData.email = result.email;
 
         localStorage.setItem('userToken', result['user-token']);
         localStorage.setItem('email', result.email);
         localStorage.setItem('userId', result.objectId);

      

          this.redirect('#/home');

        
 
     } catch (err) {
         console.error(err);
         alert(err.message);
     }
 }