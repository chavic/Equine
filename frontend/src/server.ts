export interface Patient {
    PatientID: string;
    Name: string;
    Initials?: string;
    Sex: 'M' | 'F';
    Address?: string;
    PostCode?: string;
    AdmissionDate?: Date;
    DOB?: Date;
    WardID: string;
  }
  
 export interface Ward {
    WardID: string;
    WardName: string;
    NumberBeds?: number;
    NurseInCharge: string;
  }

export function fetchPatients() {
    return fetch('/api/patients')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching patients:', error);
            throw error;
        });
}

export function fetchPatientById(patientId: string) {
    return fetch(`/api/patients/${patientId}`)
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
    return fetch('/api/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPatient),
    })
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
    return fetch(`/api/patients/${patientId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPatient),
    })
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
    return fetch(`/api/patients/${patientId}`, {
        method: 'DELETE',
    })
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
    return fetch('/api/wards')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching wards:', error);
            throw error;
        });
}

export function fetchWardById(wardId: string) {
    return fetch(`/api/wards/${wardId}`)
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
    return fetch('/api/wards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWard),
    })
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
    return fetch(`/api/wards/${wardId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWard),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error updating ward');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating ward:', error);
        throw error;
    });
}

export function deleteWard(wardId: string) {
    return fetch(`/api/wards/${wardId}`, {
        method: 'DELETE',
    })
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
