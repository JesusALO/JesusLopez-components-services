import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  public users = [
    {
      "id": 1,
      "name": "Carlos",

    },
    {
      "id": 2,
      "name": "Fernandiño",
    },
    {
      "id": 3,
      "name": "El Pepe",
    }
  ]

  getUsers(){
    return this.users;
  }
}
