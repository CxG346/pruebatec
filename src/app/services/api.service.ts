import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataC } from '../model/dataModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'http://localhost:3000/api/data/'

  constructor(private http: HttpClient) { }

  postData(data: DataC){
    return this.http.post(`${this.API_URI}/addData`, data);
  }
  getLimit(offset: number, count: number){
    return this.http.get(`${this.API_URI}/limitData/${offset}/${count}`)
  }
  getAll(){
    return this.http.get(`${this.API_URI}/listData`)
  }
  getOne(id: string){
    return this.http.get(`${this.API_URI}/getOne/${id}`)
  }
  putData(id: string, data: DataC){
    return this.http.put(`${this.API_URI}/editData/${id}`, data)
  }
  deleteData(id: string){
    return this.http.delete(`${this.API_URI}/delateData/${id}`)
  }
}
