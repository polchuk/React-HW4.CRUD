import axios from 'axios';

const API = `https://6550eb247d203ab6626e54ad.mockapi.io/students`;

const students = {
    get: () => axios(API).then(({data}) => data),
    delete: (id) => axios.delete(API+`/${id}`).then(({data}) => data),
    patch: (id, payload) => axios.patch(API+`/${id}`, payload).then(({data}) => data),
    post: (payload) => axios.post(API, payload).then(({data}) => data)
}

export default students;