import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptService {
   api:string = "http://127.0.0.1:5000/optimize"
  constructor(private http: HttpClient) { }

   resultat:any = "";
  getRequestOpt(query:any):Observable<any>{
       return this.http.post(this.api,query);
  }





}
