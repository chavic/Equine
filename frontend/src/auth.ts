const serverUrl = "http://localhost:3000";
const tokenKey = "token"; // Key to store the JWT in localStorage

export function signIn(username: string, password: string) {
  return fetch(`${serverUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem(tokenKey, data.token);
  });
}

export function signOut() {
  localStorage.removeItem(tokenKey);
}

export function getAuthToken() {
  return localStorage.getItem(tokenKey);
}
