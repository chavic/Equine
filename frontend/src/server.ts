import {Patient, Ward} from "./models";
import { getAuthToken } from "./auth";

const serverUrl = "http://localhost:3000";

function createFetchRequestConfig(method: string, body?: any) {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return {
    method,
    headers,
    body: JSON.stringify(body),
  };
}

export function fetchPatients() {
  return fetch(`${serverUrl}/api/patients`, createFetchRequestConfig('GET'))
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching patients:', error);
      throw error;
    });
}

export function fetchPatientById(patientId: string) {
  return fetch(`/api/patients/${patientId}`, createFetchRequestConfig('GET'))
    .then(response => {
      if (response.status === 404) {
        return null; // Patient not found
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching patient:', error);
      throw error;
    });
}

export function createPatient(newPatient: Patient) {
  return fetch(`${serverUrl}/api/patients`, createFetchRequestConfig('POST', newPatient))
    .then(response => {
      if (!response.ok) {
        throw new Error('Error creating patient');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error creating patient:', error);
      throw error;
    });
}

export function updatePatient(patientId: string, updatedPatient: Patient) {
  return fetch(`/api/patients/${patientId}`, createFetchRequestConfig('PUT', updatedPatient))
    .then(response => {
      if (!response.ok) {
        throw new Error('Error updating patient');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating patient:', error);
      throw error;
    });
}

export function deletePatient(patientId: string) {
  return fetch(`/api/patients/${patientId}`, createFetchRequestConfig('DELETE'))
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting patient');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error deleting patient:', error);
      throw error;
    });
}

export function fetchWards() {
  return fetch(`${serverUrl}/api/wards`, createFetchRequestConfig('GET'))
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching wards:', error);
      throw error;
    });
}

export function fetchWardById(wardId: string) {
  return fetch(`/api/wards/${wardId}`, createFetchRequestConfig('GET'))
    .then(response => {
      if (response.status === 404) {
        return null; // Ward not found
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching ward:', error);
      throw error;
    });
}

export function createWard(newWard: Ward) {
  return fetch(`${serverUrl}/api/wards`, createFetchRequestConfig('POST', newWard))
    .then(response => {
      if (!response.ok) {
        throw new Error('Error creating ward');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error creating ward:', error);
      throw error;
    });
}

export function updateWard(wardId: string, updatedWard: Ward) {
  return fetch(`/api/wards/${wardId}`, createFetchRequestConfig('PUT', updatedWard))
    .then(response => {
      if (!response.ok) {
        throw Error('Error updating ward');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating ward:', error);
      throw error;
    });
}

export function deleteWard(wardId: string) {
  return fetch(`/api/wards/${wardId}`, createFetchRequestConfig('DELETE'))
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting ward');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error deleting ward:', error);
      throw error;
    });
}

async function changeRole(userID: string, newRole: string) {
    try {
      const response = await fetch(`/change-role/${userID}`, createFetchRequestConfig('PUT', { newRole }));
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
  
      return 'User role updated successfully';
    } catch (error: any) {
      throw new Error(`Change Role Failed: ${error.message}`);
    }
  }
  
  async function createUser(userData: Object) {
    try {
      const response = await fetch('/create-user', createFetchRequestConfig('POST', userData));
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(`Create User Failed: ${error.message}`);
    }
  }
  
  async function deleteAccount(userID: string) {
    try {
      const response = await fetch(`/delete-account/${userID}`, createFetchRequestConfig('DELETE'));
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
  
      return 'User account and associated data deleted successfully';
    } catch (error: any) {
      throw new Error(`Delete Account Failed: ${error.message}`);
    }
  }