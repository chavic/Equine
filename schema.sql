-- Users table (for authentication and roles)
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    PasswordHash VARCHAR(100) NOT NULL,
    Role VARCHAR(20) NOT NULL CHECK (Role IN ('Admin', 'Doctor', 'Nurse', 'Receptionist')),
    IsActive BOOLEAN DEFAULT TRUE
);

-- Wards table
CREATE TABLE Wards (
    WardID VARCHAR(4) PRIMARY KEY,
    WardName VARCHAR(25) NOT NULL,
    NumberBeds INT DEFAULT 5,
    NurseInCharge VARCHAR(50) NOT NULL
);

-- Patients table with foreign key reference to Wards
CREATE TABLE Patients (
    PatientID VARCHAR(5) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Initials VARCHAR(3),
    Sex CHAR(1) NOT NULL CHECK (Sex IN ('M', 'F')),
    Address VARCHAR(50),
    PostCode VARCHAR(6),
    AdmissionDate DATE,
    DOB DATE,
    WardID VARCHAR(4),
    FOREIGN KEY (WardID) REFERENCES Wards(WardID)
);

-- Doctors table with foreign key reference to Users
CREATE TABLE Doctors (
    DoctorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Specialization VARCHAR(50),
    UserID INT UNIQUE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Nurses table with foreign key reference to Users
CREATE TABLE Nurses (
    NurseID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    UserID INT UNIQUE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)  ON DELETE CASCADE
);

-- Appointments table with foreign key references to Patients and Doctors
CREATE TABLE Appointments (
    AppointmentID INT AUTO_INCREMENT PRIMARY KEY,
    PatientID VARCHAR(5) NOT NULL,
    DoctorID VARCHAR(5) NOT NULL,
    AppointmentDatetime DATETIME NOT NULL,
    Status VARCHAR(20) DEFAULT 'Scheduled',
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

-- MedicalRecords table with foreign key references to Patients and Doctors
CREATE TABLE MedicalRecords (
    RecordID INT AUTO_INCREMENT PRIMARY KEY,
    PatientID VARCHAR(5) NOT NULL,
    DoctorID VARCHAR(5) NOT NULL,
    Diagnosis TEXT,
    TreatmentPlan TEXT,
    Prescription TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

-- Billing table with foreign key reference to Patients
CREATE TABLE Billing (
    BillID INT AUTO_INCREMENT PRIMARY KEY,
    PatientID VARCHAR(5) NOT NULL,
    BillAmount DECIMAL(10, 2) NOT NULL,
    BillDate DATE NOT NULL,
    Status VARCHAR(20) DEFAULT 'Unpaid',
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID)
);
