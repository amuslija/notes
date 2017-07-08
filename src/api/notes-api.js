const notesApiUrl = 'http://localhost:3000/';
const signupUrl = notesApiUrl + 'signup/';
const loginUrl = notesApiUrl + 'authenticate/'
const notesUrl = notesApiUrl + 'notes/';

const configBuilder = (method, headers, body) => {
  let newHeaders = new Headers(headers);
  let newBody = JSON.stringify(body);
  return {
    method,
    headers: newHeaders,
    body: newBody
  };
}

export const signup = (email, password) => {
  let config = configBuilder('POST', { 'content-type': 'application/json' }, { email, password });
  return fetch(signupUrl, config);
}

export const login = (email, password) => {
  let config = configBuilder('POST', { 'content-type': 'application/json' }, { email, password });
  return fetch(loginUrl, config)
    .then(response => response.json())
    .catch(err => err);
}

export const getNotes = (token) => {
  let headers = new Headers({ 'authorization': 'Bearer ' + token, 'content-type': 'application/json' });
  return fetch(notesUrl, { method: 'GET', headers: headers })
    .then(response => response.json())
    .catch(err => err);
}

export const postNotes = (token, text) => {
  let config = configBuilder('POST', { 'authorization': 'Bearer ' + token, 'content-type': 'application/json' }, { text });
  return fetch(notesUrl, config)
    .then(response => response.json())
    .catch(err => err);
}

export const deleteNotes = (token, id) => {
  let headers = new Headers({ 'authorization': 'Bearer ' + token, 'content-type': 'application/json' });
  return fetch(notesUrl + id, { method: 'DELETE', headers })
    .then(response => response.json())
    .catch(err => err);
}
