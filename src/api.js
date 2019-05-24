import superagentPromise from 'superagent-promise';
import superagent from 'superagent';

const api = superagentPromise(superagent, global.Promise);
const API_ROOT = 'https://conduit.productionready.io/api';

// URL로 데이터를 전달하기 위한 문자열을 인코딩
/* const encode = encodeURIComponent; */
const responseBody = res => res.body;

const requests = {
    get: url => api.get(`${API_ROOT}${url}`).then(responseBody),
    del: url => api.del(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) => api.post(`${API_ROOT}${url}`, body).then(responseBody)
};
const Articles = {
    all: () => requests.get(`/articles`),
    favorite: slug => requests.post(`/articles/${slug}/favorite`),
    unfavorite: slug => requests.del(`/articles/${slug}/favorite`),
};
const Tags = {
    getAll: () => requests.get('/tags')
};

export default {
    Articles,
    Tags
}