import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  getFotos() {
    return this.http.get('https://60c6a5dd.ngrok.io/profile?email=juanjose@eudoxa.mx')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

}
