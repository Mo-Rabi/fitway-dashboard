import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http:HttpClient) { }
  getAllUsers () {
    return this.http.get('http://localhost:4000/users/allUsers')
  }
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:4000/deleteUser/${id}`);
  }
}
