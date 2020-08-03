import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { RespuestaCards } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardsDBService {

  constructor(private http: HttpClient) { }
  getQuestion(){
    return this.http.get<RespuestaCards>('assets/db.json');
  }
}
