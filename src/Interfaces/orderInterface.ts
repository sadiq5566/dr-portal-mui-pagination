export interface OrderResponse {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
  status: string;
  external_id: string;
  receipt_date: string;
  receipt_number: string;
  receipt_total: string;
  remark: string;
}

export interface Attributes {
  date_created: string;
  date_modified: string;
  purchase_type: string;
  registration_type: string;
  registration_mailing_address: Registration_mailing_address;
  plate_type: string;
  plate_number: string;
  vehicle: Vehicle;
  owners: Owners[];
  previous_owners: Previous_owners[];
  liens: Liens[];
  previous_liens: null;
  sale: Sale;
  fees: Fees;
  submitter: Submitter;
  status: string;
  external_id: string;
  receipt_date: string;
  receipt_number: string;
  receipt_total: string;
  remark: string;
}
export interface Registration_mailing_address {
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
}
export interface Vehicle {
  vin: string;
  year: string;
  make: string;
  model: string;
  body: string;
  vehicle: null;
  odometer_mileage: string;
  odometer_status: string;
  dealer_id_stock_number: string;
  gross_weight: string;
  color: string;
  emissions_check_required: boolean;
  emissions_check_expiration_date: string;
}
export interface Owners {
  primary: boolean;
  type: string;
  company: string;
  company_type: string;
  ein: string;
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  ssn: string;
  driver_license: string;
  dealer_customer_id: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  phone: string;
  email: string;
  minor: boolean;
}
interface Previous_owners {
  primary: boolean;
  type: string;
  company: string;
  company_type: string;
  ein: string;
  title: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix: string;
  date_of_birth: string;
  ssn: string;
  driver_license: string;
  dealer_customer_id: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  phone: string;
  email: string;
  minor: boolean;
}
interface Liens {
  name: string;
  elt_id: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
}
interface Sale {
  dealer_permit_id: string;
  issuance_county: string;
  residence_state: string;
  vendor_id: string;
  purchase_date: string;
  purchase_price: string;
  trade_in_allowance: string;
  tax_exemption: string;
  tax_jurisdiction: string;
  tax_status: string;
}
interface Fees {
  taxable_amount: string;
  tax_rate: string;
  gross_tax_due: string;
  discount: string;
  net_tax_due: string;
  bmv_fees: Bmv_fees;
  bmv_fees_total: string;
  total_due: string;
}
interface Bmv_fees {
  name: string;
  amount: string;
}
interface Submitter {
  name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
}
interface Relationships {
  customer: {
    data: {
      id: string;
      type: string;
    };
  };
  location: {
    data: {
      id: string;
      type: string;
    };
  };
}
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

export interface QueryPagination {
  page: string;
  pages: string;
  rowsPerPage: string;
  total: string;
  count: string;
}

export interface OrdersPageFilters {
  number: string;
  sku: string;
  company__number: string;
  sorting: string;
}

export type OrdersQueryFilters = Partial<OrdersPageFilters & QueryPagination>;
