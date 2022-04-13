export interface BmvOwner {
  id: string;
  name: string;
  BMV: string;
  email: string;
  phone: string;
  status: string;
  button: string;
}

export interface BmvManager {
  id: string;
  name: string;
  BMV: string;
  email: string;
  phone: string;
  status: string;
  button: string;
}
export interface BmvEmployee {
  id: string;
  name: string;
  BMV: string;
  email: string;
  phone: string;
  Designation: string;
  status: string;
  button: string;
}
export interface BmvLocation {
  id: string;
  name: string;
  email: string;
  phone: string;
  BMV?: string;
  StripeAccount: string;
  PhysicalAddress: string;
  status: string;
  button: string;
}

export interface BMV {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  button: string;
  BMV: string;
  // Designation?: string;
  // StripeAccount?: string;
  // PhysicalAddress?: string;
  ManagerData?: BmvManager;
  EmployeeData?: BmvEmployee;
  LocationData?: BmvLocation;
}
