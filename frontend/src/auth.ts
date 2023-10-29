const serverUrl = "http://localhost:3000";
const tokenKey = "token";
const userDataKey = "user";

export async function signIn(username: string, password: string) {
  try {
    const response = await fetch(`${serverUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    localStorage.setItem(tokenKey, data.token);
    localStorage.setItem(userDataKey, JSON.stringify(data.user));

    return data;
  } catch (error) {
    throw error;
  }
}

export async function activateUser(username: string, password: string) {
  try {
    const response = await fetch(`${serverUrl}/activate-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    localStorage.setItem(tokenKey, data.token);

    return data;
  } catch (error) {
    throw error;
  }
}

export function signOut() {
  localStorage.removeItem(tokenKey);
}

export function getAuthToken() {
  return localStorage.getItem(tokenKey);
}

export function getAuthUser() {
  return JSON.parse((localStorage.getItem(userDataKey)) as string);
}