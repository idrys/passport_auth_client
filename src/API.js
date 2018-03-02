class API {
    static register = '/api/register'
    static login = '/oauth/token'
}
export const apiDomain = 'http://localhost:8001/'
export const loginUrl = apiDomain + API.login
export const userUrl = apiDomain + 'api/user1'

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser') )
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
    }
    return headers
}

export default API