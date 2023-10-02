const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

const { expect } = chai;

chai.use(chaiHttp);

describe('Patients API', () => {
    describe('GET /api/patients', () => {
      it('should retrieve all patients', (done) => {
        chai
          .request(app)
          .get('/api/patients')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
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
            console.log(res.body)
            done();
          });
      });
    });
  });
  