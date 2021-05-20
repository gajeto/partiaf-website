import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private mainService:MainService) { }

  public send(data){
    return this.mainService.post(`${this.mainService.APIEndpoint}/contact/send`,data);
  }
}
