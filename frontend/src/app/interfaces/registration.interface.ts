export interface IAddress {
  type: string;
  houseNo: string;
  location: string;
  state: string;
  street: string;
  city: string;
  zipcode: string;
}


export interface IHrDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  emails: string[];
}


export interface IRegistration {
  companyName: string;
  companyRegistrationNumber: string;
  addresses: IAddress[];
  hrDetails: IHrDetails;
}
