const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, db} = require('../app'); 

const { expect } = chai;

chai.use(chaiHttp);

describe('Authentication', () => {

  before((done) => {

    db.query('DELETE FROM Users where Username = "newuser"', (err) => {
      if (err) {
        console.error('Database error:', err);
        return done(err);
      }
      done();
    });
  });

  describe('POST /signup', () => {
    it('should create a new user and return a JWT token', (done) => {
      const newUser = {
        username: 'newuser',
        password: 'newpassword',
        role: 'Admin',
      };
      chai
        .request(app)
        .post('/signup')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    it('should return a 400 status if the username is already taken', (done) => {
      const existingUser = {
        username: 'newuser',
        password: 'password1',
        role: 'Admin',
      };
      chai
        .request(app)
        .post('/signup')
        .send(existingUser)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'User already exists. Please choose a different username.');
          done();
        });
    });
  });

  describe('POST /signin', () => {
    it('should sign in a user and return a JWT token', (done) => {
      const credentials = {
        username: 'newuser',
        password: 'newpassword',
      };
      chai
        .request(app)
        .post('/signin')
        .send(credentials)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');          
          done();
        });
    });

    it('should return a 401 status for incorrect credentials', (done) => {
      const incorrectCredentials = {
        username: 'newuser',
        password: 'wrongpassword',
      };
      chai
        .request(app)
        .post('/signin')
        .send(incorrectCredentials)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('message', 'Authentication failed. Incorrect password.');
          done();
        });
    });
  });
});


describe('Admin Functions', () => {
  let adminToken;

  before((done) => {
    const adminUser = {
      username: 'admin',
      password: 'adminpassword',
      role: 'Admin',
    };

    db.query('DELETE FROM Users where Username = "admin"', (err) => {
      if (err) {
        console.error('Database error:', err);
        return done(err);
      }

      chai
      .request(app)
      .post('/signup')
      .send(adminUser)
      .end((err, res) => {
        adminToken = res.body.token;
        done();
      });
    });
  });

  describe('Change User Role', () => {

    before((done) => {
      db.query('DELETE FROM Users where Username = "usertochange"', (err) => {
        if (err) {
          console.error('Database error:', err);
          return done(err);
        }
        done();
      });
    })

    it('should change a user\'s role (Admin)', (done) => {
      const userToChange = {
        username: 'usertochange',
        password: 'userpassword',
        role: 'Doctor',
      };

      chai
        .request(app)
        .post('/signup')
        .send(userToChange)
        .end((err, res) => {
          const userID = res.body.userID;  

          const newUserRole = 'Nurse';

          chai
            .request(app)
            .put(`/change-role/${userID}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ newRole: newUserRole })
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.have.property('message', 'User role updated successfully');
              done();
            });
        });
    });
  });

  describe('Create User and Optionally Doctor/Nurse (Only Admins)', () => {

    before((done) => {
      db.query('DELETE FROM Users where Username = "newuserdoctor"', (err) => {
        if (err) {
          console.error('Database error:', err);
          return done(err);
        }
        
      });
      
      db.query('DELETE FROM Users where Username = "nonadminuser"', (err) => {
        if (err) {
          console.error('Database error:', err);
          return done(err);
        }
        
      });
      done();
    })

    it('should create a new user and return a random password (Admin)', (done) => {
      const newUserToCreate = {
        username: 'newuserdoctor',
        role: 'Doctor',
        doctorData: {
          name: 'Doctor Name',
          specialization: 'Cardiology',
        },
      };

      chai
        .request(app)
        .post('/create-user')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newUserToCreate)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message', 'User created successfully');
          expect(res.body).to.have.property('generatedPassword');
          done();
        });
    });

    it('should return a 403 status for non-admin users (Doctor)', (done) => {
      const nonAdminUser = {
        username: 'nonadminuser',
        password: 'nonadminpassword',
        role: 'Doctor',
      };

      chai
        .request(app)
        .post('/signup')
        .send(nonAdminUser)
        .end((err, res) => {
          const nonAdminToken = res.body.token; 

          const newUserToCreate = {
            username: 'newuser',
            role: 'Nurse',
            nurseData: {
              name: 'Nurse Name',
            },
          };

          chai
            .request(app)
            .post('/create-user')
            .set('Authorization', `Bearer ${nonAdminToken}`) 
            .send(newUserToCreate)
            .end((err, res) => {
              //console.log(res.body)
              expect(res).to.have.status(403);
              expect(res.body).to.have.property('message', 'Permission denied. Only Admins can create users.');
              done();
            });
        });
    });

  });

  describe('Delete User Account and Associated Data', () => {
    let adminToken;
    let adminUserID;
    let userToDeleteID;
  
    before((done) => {
      const adminCredentials = {
        username: 'admin',
        password: 'adminpassword',
      };
  
      db.query('DELETE FROM Users where Username = "usertodelete1"', (err) => {
        if (err) {
          console.error('Database error:', err);
          return done(err);
        }
      });

      chai
        .request(app)
        .post('/signin')
        .send(adminCredentials)
        .end((err, res) => {
          adminToken = res.body.token;
          adminUserID = res.body.userID;
          done();
        });
    });
  
    it('should delete a user account and associated data (Admin)', (done) => {
      const userToDelete = {
        username: 'usertodelete1',
        password: 'userpassword',
        role: 'Doctor',
        doctorData: {
          name: 'Doctor Name',
          specialization: 'Cardiology',
        },
      };
  
      chai
        .request(app)
        .post('/create-user')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(userToDelete)
        .end((err, res) => {
          userToDeleteID = res.body.userID;

          chai
            .request(app)
            .delete(`/delete-account/${userToDeleteID}`)
            .set('Authorization', `Bearer ${adminToken}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.have.property('message', 'User account and associated data deleted successfully');
              done();
            });
        });
    });
  
    // it('should delete a user account (Self)', (done) => {
    //   const userToSelfDelete = {
    //     username: 'usertoselfdelete',
    //     password: 'userpassword',
    //     role: 'Nurse',
    //     nurseData: {
    //       name: 'Nurse Name',
    //     },
    //   };
  
    //   chai
    //     .request(app)
    //     .post('/create-user')
    //     .set('Authorization', `Bearer ${adminToken}`)
    //     .send(userToSelfDelete)
    //     .end((err, res) => {
    //       const userIDToSelfDelete = res.body.userID;
  
    //       const credentials = {
    //         username: 'usertoselfdelete',
    //         password: 'userpassword',
    //       };
  
    //       chai
    //         .request(app)
    //         .post('/signin')
    //         .send(credentials)
    //         .end((err, res) => {
    //           const userToken = res.body.token;
  
    //           chai
    //             .request(app)
    //             .delete(`/delete-account/${userIDToSelfDelete}`)
    //             .set('Authorization', `Bearer ${userToken}`)
    //             .end((err, res) => {
    //               expect(res).to.have.status(200);
    //               expect(res.body).to.have.property('message', 'User account and associated data deleted successfully');
    //               done();
    //             });
    //         });
    //     });
    // });
  
    // it('should return a 403 status for non-admin users (Doctor)', (done) => {
    //   const nonAdminUser = {
    //     username: 'nonadminuser',
    //     password: 'nonadminpassword',
    //     role: 'Doctor',
    //   };
  
    //   chai
    //     .request(app)
    //     .post('/signup')
    //     .send(nonAdminUser)
    //     .end((err, res) => {
    //       const nonAdminToken = res.body.token;
  
    //       chai
    //         .request(app)
    //         .delete(`/delete-account/${userToDeleteID}`)
    //         .set('Authorization', `Bearer ${nonAdminToken}`)
    //         .end((err, res) => {
    //           expect(res).to.have.status(403);
    //           expect(res.body).to.have.property('message', 'Permission denied. Only Admins or the user can delete this account.');
    //           done();
    //         });
    //     });
    // });
  
    // it('should return a 403 status for unauthorized users (Non-Admin)', (done) => {
    //   const nonAdminUser = {
    //     username: 'nonadminuser',
    //     password: 'nonadminpassword',
    //     role: 'Doctor',
    //   };
  
    //   chai
    //     .request(app)
    //     .post('/signup')
    //     .send(nonAdminUser)
    //     .end((err, res) => {
    //       const nonAdminToken = res.body.token;
  
    //       chai
    //         .request(app)
    //         .delete(`/delete-account/${adminUserID}`)
    //         .set('Authorization', `Bearer ${nonAdminToken}`)
    //         .end((err, res) => {
    //           expect(res).to.have.status(403);
    //           expect(res.body).to.have.property('message', 'Permission denied. Only Admins or the user can delete this account.');
    //           done();
    //         });
    //     });
    // });
  
  
    after((done) => {
 
      done();
    });
  });

});

describe('Patients API', () => {
    describe('GET /api/patients', () => {
      it('should retrieve all patients', (done) => {
        chai
          .request(app)
          .get('/api/patients')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });
  
    describe('GET /api/patients/:id', () => {
      it('should retrieve a specific patient by ID', (done) => {
        const patientId = 'p1'; 
        chai
          .request(app)
          .get(`/api/patients/${patientId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('PatientID', patientId);
            done();
          });
      });
  
      it('should return a 404 status for a non-existent patient', (done) => {
        const patientId = 'nonexistent'; 
        chai
          .request(app)
          .get(`/api/patients/${patientId}`)
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('error', 'Patient not found');
            done();
          });
      });
    });
  
    describe('POST /api/patients', () => {
      it('should create a new patient', (done) => {
        const newPatient = {
          PatientID: 'p7', 
          Name: 'New Patient',
          Initials: 'NP',
          Sex: 'M',
          Address: '123 Elm St',
          PostCode: 'SW1',
          AdmissionDate: '2023-01-01',
          DOB: '2000-01-01',
          WardID: 'w1',
        };
        chai
          .request(app)
          .post('/api/patients')
          .send(newPatient)
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('message', 'Patient created successfully');
            done();
          });
      });
    });
  
    describe('PUT /api/patients/:id', () => {
      it('should update an existing patient', (done) => {
        const patientId = 'p1'; 
        const updatedPatient = {
          Name: 'Updated Patient Name',
          Address: 'Updated Address',
        };
        chai
          .request(app)
          .put(`/api/patients/${patientId}`)
          .send(updatedPatient)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Patient updated successfully');
            done();
          });
      });
    });
  
    describe('DELETE /api/patients/:id', () => {
      it('should delete an existing patient', (done) => {
        const patientId = 'p7'; 
        chai
          .request(app)
          .delete(`/api/patients/${patientId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Patient deleted successfully');

            done();
          });
      });
    });
  });

  describe('Wards API', () => {
    describe('GET /api/wards', () => {
      it('should retrieve all wards', (done) => {
        chai
          .request(app)
          .get('/api/wards')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });
  
    describe('GET /api/wards/:id', () => {
      it('should retrieve a specific ward by ID', (done) => {
        const wardId = 'w1'; 
        chai
          .request(app)
          .get(`/api/wards/${wardId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('WardID', wardId);
            done();
          });
      });
  
      it('should return a 404 status for a non-existent ward', (done) => {
        const wardId = 'nonexistent'; 
        chai
          .request(app)
          .get(`/api/wards/${wardId}`)
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('error', 'Ward not found');
            done();
          });
      });
    });
  
    describe('POST /api/wards', () => {
      it('should create a new ward', (done) => {
        const newWard = {
          WardID: 'w7', 
          WardName: 'New Ward',
          NumberBeds: 15,
          NurseInCharge: 'New Nurse',
        };
        chai
          .request(app)
          .post('/api/wards')
          .send(newWard)
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.have.property('message', 'Ward created successfully');
            done();
          });
      });
    });
  
    describe('PUT /api/wards/:id', () => {
      it('should update an existing ward', (done) => {
        const wardId = 'w1'; 
        const updatedWard = {
          WardName: 'Updated Ward Name',
          NumberBeds: 20,
        };
        chai
          .request(app)
          .put(`/api/wards/${wardId}`)
          .send(updatedWard)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Ward updated successfully');
            done();
          });
      });
    });
  
    describe('DELETE /api/wards/:id', () => {
      it('should delete an existing ward', (done) => {
        const wardId = 'w7'; 
        chai
          .request(app)
          .delete(`/api/wards/${wardId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Ward deleted successfully');
            done();
          });
      });
    });
});
  