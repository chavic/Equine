// Users table
export interface User {
    UserID: number;
    Username: string;
    PasswordHash: string;
    Role: 'Admin' | 'Doctor' | 'Nurse' | 'Receptionist';
    IsActive: boolean;
  }
  
  // Wards table
  export interface Ward {
    WardID: string;
    WardName: string;
    NumberBeds: number;
    NurseInCharge: string;
  }
  
  // Patients table
  export interface Patient {
    PatientID: string;
    Name: string;
    Initials: string;
    Sex: 'M' | 'F';
    Address: string;
    PostCode: string;
    AdmissionDate: Date;
    DOB: Date;
    WardID: string;
  }
  
  // Doctors table
  export interface Doctor {
    DoctorID: string;
    Name: string;
    Specialization: string;
    UserID: number;
  }
  
  // Nurses table
  export interface Nurse {
    NurseID: string;
    Name: string;
    UserID: number;
  }
  
  // Appointments table
  export interface Appointment {
    AppointmentID: number;
    PatientID: string;
    DoctorID: string;
    AppointmentDatetime: Date;
    Status: 'Scheduled' | 'InProgress' | 'Completed' | 'Cancelled';
  }
  
  // MedicalRecords table
  export interface MedicalRecord {
    RecordID: number;
    PatientID: string;
    DoctorID: string;
    Diagnosis: string;
    TreatmentPlan: string;
    Prescription: string;
  }
  
  // Billing table
  export interface Bill {
    BillID: number;
    PatientID: string;
    BillAmount: number;
    BillDate: Date;
    Status: 'Unpaid' | 'Paid';
  }
