import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  jsonApiUrl: string = 'https://api.myjson.com/bins/114l3c';
  constructor(private http: HttpClient) { }
  
  getJsonData(){
	  return this.http.get(this.jsonApiUrl);
  }
}
