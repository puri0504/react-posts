import axios from 'axios';

const base = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: "json"
});

export function getPosts(): Promise<string[]> {
    return base.get('/posts')
        .then(function (response) {
            console.log(response)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function getPostDetails(id: number) {
    return base.get(`/posts/${id}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
