import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  public customers = [
    {
      "id": 1,
      "name": "juan",

    },
    {
      "id": 2,
      "name": "pedro",
    },
    {
      "id": 3,
      "name": "pablo",
    }
  ]

  getCustomers(){
    return this.customers;
  }
}
