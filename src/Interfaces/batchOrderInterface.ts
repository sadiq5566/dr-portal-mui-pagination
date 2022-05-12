export interface BatchOrderInterface {
  id: string;
  BONumber: string;
  dateCreated: string;
  createdBy: string;
  totalOrder: number;
  uniqueCustomer: number;
  uniqueDealerships: number;
  completedOrders: number;
  rejectedOrders: number;
  button: string;
}
