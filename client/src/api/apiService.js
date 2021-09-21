import axios from 'axios';

const BASE_URL = '/';
//const BASE_URL = 'http://localhost:5000';

async function getUsers(){

    let res = await axios.get(BASE_URL + `users`);
    return res.data;
}

async function getLastPosts(id){

    let res = await axios.get(BASE_URL + `posts/${id}`);
    return res.data;
}

async function getAllPosts(id){

    let res = await axios.get(BASE_URL + `posts`);
    return res.data;
}

export { getUsers, getLastPosts, getAllPosts }