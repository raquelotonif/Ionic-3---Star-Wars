import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Rx";
import "rxjs/observable/from";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/mergeAll';
// import 'rxjs/add/operator/catch';

@Injectable()
export class StarWarsService {
  baseUrl = 'https://swapi.co/api/';

  constructor(private _http: Http) {
  }

  getAllPersonagens() {
    return Observable.from(this._http.get(this.baseUrl + 'people/'))
      .map(results => results.json().results
        .map(personagem => {
          this.getSpecies(personagem);
          this.getPlanets(personagem);
          this.getFilms(personagem);
          return personagem
        })
      )
  }

  getSpecies(personagem) {
    Observable.from(this._http.get(personagem['species'][0]))
      .map(res => res.json())
      .subscribe(specie => personagem['specie'] = specie.name)
  }

  getPlanets(personagem) {
    Observable.from(this._http.get(personagem['homeworld']))
      .map(res => res.json())
      .subscribe(planet => personagem['planet'] = planet.name)
  }

  getFilms(personagem) {
    Observable.from(this._http.get(personagem['films'][0]))
      .map(res => res.json())
      .subscribe(films => personagem['filme'] = films.title)
  }
}
