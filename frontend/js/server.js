function fetchPatients() {
    return fetch('/api/patients')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching patients:', error);
            throw error;
        });
}

function fetchPatientById(patientId) {
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

function createPatient(newPatient) {
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

function updatePatient(patientId, updatedPatient) {
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

function deletePatient(patientId) {
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

function fetchWards() {
    return fetch('/api/wards')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching wards:', error);
            throw error;
        });
}

function fetchWardById(wardId) {
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

function createWard(newWard) {
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

function updateWard(wardId, updatedWard) {
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

function deleteWard(wardId) {
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
