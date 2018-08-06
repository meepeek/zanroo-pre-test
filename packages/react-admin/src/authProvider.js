import { AUTH_LOGIN, AUTH_LOGOUT } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:3333/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
              console.log( 'Got token: ', token )
                localStorage.setItem('token', token);
            });
    } else if (type === AUTH_LOGOUT) {
      const token = localStorage.getItem('token')
      const request = new Request('http://localhost:3333/logout', {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
      })
      localStorage.removeItem('token')
      return fetch(request)
    }
    return Promise.resolve();
}
