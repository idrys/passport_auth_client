class API {
    static register = '/api/register'
    static login = '/oauth/token'
}
export const apiDomain = 'http://localhost:8001/'
export const loginUrl = apiDomain + API.login

export default API