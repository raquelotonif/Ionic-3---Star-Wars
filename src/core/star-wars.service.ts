import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StarWarsService {
  baseUrl = 'https://swapi.co/api/';

  constructor(private _http: Http) {
  }

  getAllPersonagens(): Observable<any> {
    return this._http.get(this.baseUrl + 'people/')
      .map((res: Response) => res.json())
      .catch((err) => console.log(err) || 'Server Error')
  }

  getPersonagemSpecies(apiUrl): Observable<any> {
    return this._http.get(apiUrl)
      .map((res: Response) => res.json())
      .catch((err) => console.log(err) || 'Server Error')
  }
}
