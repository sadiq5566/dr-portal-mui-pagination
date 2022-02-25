export interface OwnerInfo {
  first_name: string;
  name: string;
  middle_name: string;
  m_Name: string;
  last_name: string;
  last_Name: string;
  email: string;
  paige: string;
  phone: string;
  cell: string;
  number?: string;
  date_Of_birth: string;
  birth: string;
  address_1: string;
  address: string;
  address_2: string;
  address_sec: string;
  sec_Date: string;
  day: string;
  drive_One: string;
  address_Two: string;
  drive_Two: string;
  city?: string;
  Francico?: string;
  state?: string;
  ca?: string;
  company?: string;
  sportmart?: string;
  type: string;
  quality: string;
  comp_2: string;
  suffiex: string;
  affix: string;
  ssn: string;
  mg: string;
  customer: string;
  numbers: string;
  minor: string;
  dot: string;
  primary: string;
  true: string;
}

export interface VehicleInfo {
  vin: string;
  wqn: string;
  year: string;
  date: string;
  make: string;
  bmw: string;
  model: string;
  accent: string;
  body: string;
  sedan: string;
  condition: string;
  good: string;
  status: string;
  acctual: string;
  odometer: string;
  odoNum: string;
}

export interface DealersInfo {
  dealership: string;
  location: string;
  dName: string;
  name: string;
  dealer_Name: string;
}
export interface SummaryInfo {
  customer: string;
  cName: string;
  order_Id: string;
  ord_Id: string;
  vin: string;
  s_Vin: string;
  status: string;
  sedan: string;
  plate_type: string;
  type: string;
  plate_Number: string;
  pNumber: string;
}

export interface Order {
  id: string;
  name: string;
  VIN: string;
  dateCreated: string;
  customerName: string;
  dealership: string;
  dealershipText?: string;
  registrationType: string;
  Status: string;
  button: string;
  ownerInfo: OwnerInfo;
  vehicleInfo: VehicleInfo;
  dealersInfo: DealersInfo;
  summaryInfo: SummaryInfo;
}
