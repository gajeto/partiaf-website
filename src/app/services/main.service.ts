import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
	public APIEndpoint = environment.APIEndpoint;
	public APIServer = environment.APIServer;
  public Images = {loading:this.APIServer + "images/app/loading.gif",companies:this.APIServer + "images/companies/",company:this.APIServer + "images/app/company.png"};
  constructor(private http: HttpClient) { }

  public getHeader(token?){
    let headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    let tokenContent = this.getToken();
    token?headers = headers.append("Authorization", 'Bearer '+ tokenContent):'';
    return {"headers":headers, "params":params};
  }

  public get(route,token?): Observable<any> {
    return this.http.get(route,this.getHeader(token));
  }

  public post(route,data,token?): Observable<any> {
    return this.http.post(route,data,this.getHeader(token));
  }

  public tokenValid(){
    return this.get(`${this.APIEndpoint}/getUser`,true);
  }

  public getToken(){
    return localStorage.getItem('token')?localStorage.getItem('token'):null;
  }

  public getUser(){
    return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
  }

  public login(data){
    return this.post(`${this.APIEndpoint}/login`,data);
  }
}
