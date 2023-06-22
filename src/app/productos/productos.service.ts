import { Injectable } from '@angular/core';
//import{Productos} from '../productos';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlEndPoint: String = 'http://localhost:8080/'

  constructor(private http: HttpClient){}


}
