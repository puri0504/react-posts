import axios from 'axios';
import { Post } from '../types';

const base = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: "json"
});

export function getPosts(): Promise<Post[]> {
    return base.get('/posts')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getPostDetails(id: number): Promise<Post>{
    return base.get(`/posts/${id}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
