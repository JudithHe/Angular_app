import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject httpclient to dataservice to better encapsulate
  constructor(private http: HttpClient) { }

  //add methods to this class
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post("https://putsreq.com/UsqEsOpkEfI61173o569", userSettings);
    //return of(userSettings)
  }
}
