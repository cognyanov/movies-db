import { logout } from './data.js';


export default async function () {

    await logout();

    this.app.userData.loggedIn = false;
    this.app.userData.email = "";

    localStorage.clear();



    this.redirect('#/login');



}