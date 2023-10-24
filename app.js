const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json());
app.use(express.static('frontend'));

const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hospital',
});

const secretKey = "some secret key";

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
  }
});

function generateToken(user) {
  return jwt.sign(user, secretKey, { expiresIn: '1h'  });
}

function generateRandomPassword(length = 10) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const password = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password.push(charset[randomIndex]);
  }

  return password.join('');
}

function verifyToken(req, res, next) {
  const token = req.header('Authorization').slice(7);
  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    req.user = user;
    next();
  });
}


app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  db.query(
    'SELECT * FROM Users WHERE Username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: 'Authentication failed. User not found.' });
      }

      const user = results[0];


      if (user.PasswordHash === password) {
        const token = generateToken({ userID: user.UserID, username: user.Username, role: user.Role });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
      }
    }
  );
});


app.post('/signup', (req, res) => {
  const { username, password, role } = req.body;

  db.query(
    'SELECT * FROM Users WHERE Username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists. Please choose a different username.' });
      }
     
      db.query(
        'INSERT INTO Users (Username, PasswordHash, Role) VALUES (?, ?, ?)',
        [username, password, role],
        (err, result) => {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal server error' });
          }

          const token = generateToken({ userID: result.insertId, username: username, role });
         
          res.status(201).json({ message: 'User created successfully.', token,  userID: result.insertId });
        }
      );
    }
  );
});


app.put('/change-role/:userID', verifyToken, (req, res) => {
  const { userID } = req.params;
  const { newRole } = req.body;

  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Permission denied. Only Admins can change roles.' });
  }

  db.query(
    'UPDATE Users SET Role = ? WHERE UserID = ?',
    [newRole, userID],
    (err) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json({ message: 'User role updated successfully' });
    }
  );
});


app.post('/create-user', verifyToken, (req, res) => {
  
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ message: 'Permission denied. Only Admins can create users.' });
  }

  const { username, password, role, doctorData, nurseData } = req.body;

  
  const generatedPassword = generateRandomPassword(); 

  
  db.query(
    'INSERT INTO Users (Username, PasswordHash, Role) VALUES (?, ?, ?)',
    [username, generatedPassword, role],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      const userID = result.insertId;

      
      if (role === 'Doctor' && doctorData) {
        const { name, specialization } = doctorData;

        
        db.query(
          'INSERT INTO Doctors (DoctorID, Name, Specialization, UserID) VALUES (?, ?, ?, ?)',
          [`d${userID}`, name, specialization, userID],
          (err) => {
            if (err) {
              console.error('Database error:', err);
              return res.status(500).json({ message: 'Internal server error' });
            }
          }
        );
      }

      
      if (role === 'Nurse' && nurseData) {
        const { name } = nurseData;

        
        db.query(
          'INSERT INTO Nurses (NurseID, Name, UserID) VALUES (?, ?, ?)',
          [`n${userID}`, name, userID],
          (err) => {
            if (err) {
              console.error('Database error:', err);
              return res.status(500).json({ message: 'Internal server error' });
            }
          }
        );
      }

      res.json({ message: 'User created successfully', generatedPassword, userID });
    }
  );
});

app.delete('/delete-account/:userID', verifyToken, (req, res) => {
  const { userID } = req.params;
  
  if (req.user.role !== 'Admin' && req.user.userID !== userID) {
    return res.status(403).json({ message: 'Permission denied. Only Admins or the user can delete this account.' });
  }

  
  db.query('SELECT Role FROM Users WHERE UserID = ?', [userID], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    const userRole = results[0].Role;

    
    db.beginTransaction((transactionErr) => {
      if (transactionErr) {
        console.error('Database error:', transactionErr);
        return res.status(500).json({ message: 'Internal server error' });
      }

      
      db.query('DELETE FROM Users WHERE UserID = ?', [userID], (deleteErr) => {
        if (deleteErr) {
          return db.rollback(() => {
            console.error('Database error:', deleteErr);
            return res.status(500).json({ message: 'Internal server error' });
          });
        }

        
        if (userRole === 'Doctor') {
          db.query('DELETE FROM Doctors WHERE UserID = ?', [userID], (doctorDeleteErr) => {
            if (doctorDeleteErr) {
              return db.rollback(() => {
                console.error('Database error:', doctorDeleteErr);
                return res.status(500).json({ message: 'Internal server error' });
              });
            }

            commitTransaction();
          });
        } else if (userRole === 'Nurse') {
          db.query('DELETE FROM Nurses WHERE UserID = ?', [userID], (nurseDeleteErr) => {
            if (nurseDeleteErr) {
              return db.rollback(() => {
                console.error('Database error:', nurseDeleteErr);
                return res.status(500).json({ message: 'Internal server error' });
              });
            }

            commitTransaction();
          });
        } else if (userRole === 'Receptionist') {
          
          db.query('DELETE FROM ReceptionistTable WHERE UserID = ?', [userID], (receptionistDeleteErr) => {
            if (receptionistDeleteErr) {
              return db.rollback(() => {
                console.error('Database error:', receptionistDeleteErr);
                return res.status(500).json({ message: 'Internal server error' });
              });
            }

            commitTransaction();
          });
        } else {
          
          commitTransaction();
        }
      });
    });

    function commitTransaction() {
      
      db.commit((commitErr) => {
        if (commitErr) {
          return db.rollback(() => {
            console.error('Database error:', commitErr);
            return res.status(500).json({ message: 'Internal server error' });
          });
        }

        res.json({ message: 'User account and associated data deleted successfully' });
      });
    }
  });
});



app.get('/secure-route', verifyToken, (req, res) => {
  res.json({ message: 'This is a secure route. You have access.' });
});


app.get('/api/patients', (req, res) => {
    db.query('SELECT * FROM Patients', (err, results) => {
      if (err) {
        console.error('Error fetching patients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/api/patients/:id', (req, res) => {
    const patientId = req.params.id;
    db.query('SELECT * FROM Patients WHERE PatientID = ?', [patientId], (err, results) => {
      if (err) {
        console.error('Error fetching patient:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'Patient not found' });
        } else {
          res.json(results[0]);
        }
      }
    });
  });
  
  app.post('/api/patients', (req, res) => {
    const newPatient = req.body;
    db.query('INSERT INTO Patients SET ?', newPatient, (err, result) => {
      if (err) {
        console.error('Error creating patient:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Patient created successfully' });
      }
    });
  });
  
  app.put('/api/patients/:id', (req, res) => {
    const patientId = req.params.id;
    const updatedPatient = req.body; 
    db.query('UPDATE Patients SET ? WHERE PatientID = ?', [updatedPatient, patientId], (err, result) => {
      if (err) {
        console.error('Error updating patient:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Patient updated successfully' });
      }
    });
  });
  
  app.delete('/api/patients/:id', (req, res) => {
    const patientId = req.params.id;
    db.query('DELETE FROM Patients WHERE PatientID = ?', [patientId], (err, result) => {
      if (err) {
        console.error('Error deleting patient:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Patient deleted successfully' });
      }
    });
  });


app.get('/api/wards', (req, res) => {
    db.query('SELECT * FROM Wards', (err, results) => {
      if (err) {
        console.error('Error fetching wards:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/api/wards/:id', (req, res) => {
    const wardId = req.params.id;
    db.query('SELECT * FROM Wards WHERE WardID = ?', [wardId], (err, results) => {
      if (err) {
        console.error('Error fetching ward:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'Ward not found' });
        } else {
          res.json(results[0]);
        }
      }
    });
  });
  
app.post('/api/wards', (req, res) => {
    const newWard = req.body;
    db.query('INSERT INTO Wards SET ?', newWard, (err, result) => {
      if (err) {
        console.error('Error creating ward:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Ward created successfully' });
      }
    });
  });

app.put('/api/wards/:id', (req, res) => {
    const wardId = req.params.id;
    const updatedWard = req.body; 
    db.query('UPDATE Wards SET ? WHERE WardID = ?', [updatedWard, wardId], (err, result) => {
      if (err) {
        console.error('Error updating ward:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Ward updated successfully' });
      }
    });
  });

app.delete('/api/wards/:id', (req, res) => {
    const wardId = req.params.id;
    db.query('DELETE FROM Wards WHERE WardID = ?', [wardId], (err, result) => {
      if (err) {
        console.error('Error deleting ward:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Ward deleted successfully' });
      }
    });
  });


app.get('/api/doctors', (req, res) => {
    db.query('SELECT * FROM Doctors', (err, results) => {
      if (err) {
        console.error('Error fetching doctors:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/doctors', (req, res) => {
    const newDoctor = req.body; 
    db.query('INSERT INTO Doctors SET ?', newDoctor, (err, result) => {
      if (err) {
        console.error('Error creating doctor:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Doctor created successfully' });
      }
    });
  });


  app.put('/api/doctors/:id', (req, res) => {
    const doctorId = req.params.id;
    const updatedDoctor = req.body;
    db.query('UPDATE Doctors SET ? WHERE DoctorID = ?', [updatedDoctor, doctorId], (err, result) => {
      if (err) {
        console.error('Error updating doctor:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Doctor updated successfully' });
      }
    });
  });

  app.delete('/api/doctors/:id', (req, res) => {
    const doctorId = req.params.id;
    db.query('DELETE FROM Doctors WHERE DoctorID = ?', [doctorId], (err, result) => {
      if (err) {
        console.error('Error deleting doctor:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Doctor deleted successfully' });
      }
    });
  });


app.get('/api/nurses', (req, res) => {
    db.query('SELECT * FROM Nurses', (err, results) => {
      if (err) {
        console.error('Error fetching nurses:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/nurses', (req, res) => {
    const newNurse = req.body; 
    db.query('INSERT INTO Nurses SET ?', newNurse, (err, result) => {
      if (err) {
        console.error('Error creating nurse:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Nurse created successfully' });
      }
    });
  });

  app.put('/api/nurses/:id', (req, res) => {
    const nurseId = req.params.id;
    const updatedNurse = req.body; 
    db.query('UPDATE Nurses SET ? WHERE NurseID = ?', [updatedNurse, nurseId], (err, result) => {
      if (err) {
        console.error('Error updating nurse:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Nurse updated successfully' });
      }
    });
  });

  app.delete('/api/nurses/:id', (req, res) => {
    const nurseId = req.params.id;
    db.query('DELETE FROM Nurses WHERE NurseID = ?', [nurseId], (err, result) => {
      if (err) {
        console.error('Error deleting nurse:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Nurse deleted successfully' });
      }
    });
  });


app.get('/api/appointments', (req, res) => {
    db.query('SELECT * FROM Appointments', (err, results) => {
      if (err) {
        console.error('Error fetching appointments:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/appointments', (req, res) => {
    const newAppointment = req.body;
    db.query('INSERT INTO Appointments SET ?', newAppointment, (err, result) => {
      if (err) {
        console.error('Error creating appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Appointment created successfully' });
      }
    });
  });

  app.put('/api/appointments/:id', (req, res) => {
    const appointmentId = req.params.id;
    const updatedAppointment = req.body; 
    db.query('UPDATE Appointments SET ? WHERE AppointmentID = ?', [updatedAppointment, appointmentId], (err, result) => {
      if (err) {
        console.error('Error updating appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Appointment updated successfully' });
      }
    });
  });

  app.delete('/api/appointments/:id', (req, res) => {
    const appointmentId = req.params.id;
    db.query('DELETE FROM Appointments WHERE AppointmentID = ?', [appointmentId], (err, result) => {
      if (err) {
        console.error('Error deleting appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Appointment deleted successfully' });
      }
    });
  });


app.get('/api/billing', (req, res) => {
    db.query('SELECT * FROM Billing', (err, results) => {
      if (err) {
        console.error('Error fetching billing records:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

app.post('/api/billing', (req, res) => {
    const newBilling = req.body; 
    db.query('INSERT INTO Billing SET ?', newBilling, (err, result) => {
      if (err) {
        console.error('Error creating billing record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Billing record created successfully' });
      }
    });
  });

  app.put('/api/billing/:id', (req, res) => {
    const billId = req.params.id;
    const updatedBilling = req.body; 
    db.query('UPDATE Billing SET ? WHERE BillID = ?', [updatedBilling, billId], (err, result) => {
      if (err) {
        console.error('Error updating billing record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Billing record updated successfully' });
      }
    });
  });

  app.delete('/api/billing/:id', (req, res) => {
    const billId = req.params.id;
    db.query('DELETE FROM Billing WHERE BillID = ?', [billId], (err, result) => {
      if (err) {
        console.error('Error deleting billing record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Billing record deleted successfully' });
      }
    });
  });


app.get('/api/medicalrecords', (req, res) => {
    db.query('SELECT * FROM MedicalRecords', (err, results) => {
      if (err) {
        console.error('Error fetching medical records:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.post('/api/medicalrecords', (req, res) => {
    const newRecord = req.body;
    db.query('INSERT INTO MedicalRecords SET ?', newRecord, (err, result) => {
      if (err) {
        console.error('Error creating medical record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Medical record created successfully' });
      }
    });
  });

app.put('/api/medicalrecords/:id', (req, res) => {
    const recordId = req.params.id;
    const updatedRecord = req.body; 
    db.query('UPDATE MedicalRecords SET ? WHERE RecordID = ?', [updatedRecord, recordId], (err, result) => {
      if (err) {
        console.error('Error updating medical record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Medical record updated successfully' });
      }
    });
  });

app.delete('/api/medicalrecords/:id', (req, res) => {
    const recordId = req.params.id;
    db.query('DELETE FROM MedicalRecords WHERE RecordID = ?', [recordId], (err, result) => {
      if (err) {
        console.error('Error deleting medical record:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Medical record deleted successfully' });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = {app, db};