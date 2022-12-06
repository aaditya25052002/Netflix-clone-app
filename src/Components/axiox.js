import axios from 'axios';
//9a8edd3be80f79c3254075155b56f94e
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});
export default instance;