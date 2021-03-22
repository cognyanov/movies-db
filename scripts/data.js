function host(endpoint) {
    return `https://eu-api.backendless.com/97FA3DAF-EE93-0EA3-FF3A-7741B59CD000/2703284C-115A-4307-834F-FD5F737791E0/${endpoint}`;
};


const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    CREATE_POST: 'data/movies',
    DETAILS_POST: 'data/movies/',
    DELETE: 'data/movies/',
    LOGOUT: 'users/logout',
    ALLMOVIES: 'data/movies'
};


export async function register(email, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })).json();
}

export async function login(email, password) {

    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: email,
            password
        })

    })).json();


}

export async function createPost(title, description, image, creator) {
    const userToken = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.CREATE_POST), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title,
            description,
            image,
            creator
        })
    })).json();
}

export async function editPost(title, description, image, id) {
    const userToken = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.DETAILS_POST + id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title,
            description,
            image
        })
    })).json();
}

export async function details(userId) {
    const userToken = localStorage.getItem('userToken');

    return (await fetch(host(`users/${userId}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        }
    })).json();
}

export async function editArticle(title, category, content, objectId) {
    const userToken = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.DETAILS_POST + objectId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title,
            category,
            content
        })
    })).json();
}

export async function removePost(objectId) {
    const userToken = localStorage.getItem('userToken');


    return (await fetch(host(endpoints.DELETE + objectId), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        }
    })).json();
}



export async function logout() {
    const token = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.LOGOUT), {
        method: 'GET',
        headers: {

            'user-token': token
        }
    }));
}

export async function getAllMovies() {
    const token = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.ALLMOVIES), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        }
    })).json();

}


export async function getMovieById(id) {
    const token = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.DETAILS_POST + id), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        }
    })).json();
}

export async function deleteMovie(id) {
    const token = localStorage.getItem('userToken');

    return (await fetch(host(endpoints.DETAILS_POST + id), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token

        }
    })).json();
}

export async function getLikedMovies(id) {
    const token = localStorage.getItem('userToken');

    return (await fetch(host(`users/${id}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        }
    })).json();
}

export async function likeIt(title, description, image, id, lastLikes) {
    const userToken = localStorage.getItem('userToken');

    let moreLikes = Number(lastLikes) + 1;
    let peopleLiked = moreLikes;

    return (await fetch(host(endpoints.DETAILS_POST + id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
            title,
            description,
            image,
            peopleLiked
        })
    })).json();
}

export async function addLikedMovie(userId, likedMovies) {
    const userToken = localStorage.getItem('userToken');

   

    return (await fetch(host('users/' + userId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': userToken
        },
        body: JSON.stringify({
           likedMovies
        })
    })).json();
}

