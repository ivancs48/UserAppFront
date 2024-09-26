import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User []= [
    {id: 1, name: 'John', lastName: 'Doe', email: 'john.doe@example.com', username: 'johndoe', password: 'password123'},
    {id: 2, name: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', username: 'janesmith', password: 'secret'},
    {id: 3, name: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com', username: 'bobjohnson', password: 'qwerty123'}
  ];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }

}
