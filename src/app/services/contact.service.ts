import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REQUEST_API: string = `${environment.URL_API}/contact`

  constructor(private http: HttpClient) { }

  async sendFormContact(contact: any){
    try {
      let response = await lastValueFrom(this.http.post<any>(this.REQUEST_API, contact));
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
