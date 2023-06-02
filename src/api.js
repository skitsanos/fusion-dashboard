import request from 'umi-request';

const url = '/';

export const endpoints = {
    local: {
        locales: 'locales.json'
    },

    login: `${url}/auth/login`
};

request.interceptors.request.use(
    (requestUrl, options) =>
    {
        options.headers = {
            ...options.no_auth ?? {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            ...options.headers
        };

        return {
            url: requestUrl,
            options: {
                ...options,
                timeout: 60000
            }
        };
    },
    {global: true}
);

request.interceptors.response.use(response =>
{
    //const data = await response.clone().json();
    //skip 403s from login service itself
    if (response.status === 403 && !response.url.endsWith(endpoints.login))
    {
        location.href = '/login';
    }
    return response;
});

export const apiGet = (apiUrl, options) => request.get(apiUrl, options);

export const apiPost = (apiUrl, options) => request.post(apiUrl, options);

export const apiPut = (apiUrl, options) => request.put(apiUrl, options);

export const apiDelete = (apiUrl, options) => request.delete(apiUrl, options);
