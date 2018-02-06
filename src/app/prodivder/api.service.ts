import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Constants from './../app.const'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Departments } from '../models/departments.model'
import { Users } from '../models/users.model'

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getDepList(): Observable<Departments[]> {
    return this.http.get<Departments[]>(Constants.API_URL + "/users/departments")
  }

  getDepUsers(depId): Observable<Users[]> {
    return this.http.get<Users[]>(Constants.API_URL + "/users/employees");
  }

  removeDep(depId): Observable<Departments[]> {
    console.log(depId);
    return this.http.delete<Departments[]>(Constants.API_URL + "/users/departments/" + depId);
  }

  addDep(department): Observable<Departments[]> {
    return this.http.post<Departments[]>(Constants.API_URL + "/users/departments/", department);
  }
}
