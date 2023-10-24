INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w1', 'St johns', 10, 'Sister Murphy');

INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w2', 'Moody', 6, 'Sister Sarah');

INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w3', 'Cardiology', 8, 'Nurse Johnson');

INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w4', 'Pediatrics', 12, 'Nurse Thompson');

INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w5', 'Neurology', 10, 'Nurse Williams');

INSERT INTO Wards (WardID, WardName, NumberBeds, NurseInCharge)
VALUES ('w6', 'Orthopedics', 9, 'Nurse Davis');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p1', 'Smith', 'PJ', 'M', '2 Lee Rd', 'SE6', '2001-07-10', '1963-01-05', 'w2');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p2', 'Knight', 'JP', 'F', '5 Lee Rd', 'SE6', '2001-06-15', '1963-01-21', 'w1');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p3', 'Major', 'EF', 'F', '12 High Rd', 'SE5', '2001-08-15', '1967-01-13', 'w2');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p4', 'Sue', 'RE', 'M', '10 Low Rd', 'NW3', '2001-09-19', '1966-02-25', 'w3');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p5', 'Anderson', 'LA', 'M', '7 Elm St', 'SW8', '2002-04-25', '1980-09-10', 'w3');

INSERT INTO Patients (PatientID, Name, Initials, Sex, Address, PostCode, AdmissionDate, DOB, WardID)
VALUES ('p6', 'Taylor', 'SA', 'F', '3 Oak Ave', 'SE9', '2002-02-18', '1975-06-08', 'w4');
