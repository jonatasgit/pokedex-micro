import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {

  public _urlBase: string = "https://pokeapi.co/api/v2/";
  _urlPokemonSearch: string = "pokemon/";

  constructor(public http: HttpClient) { }

  getPokemonByName(id: string): Promise<Pokemon>{
    return this.http.get<any>(this._urlBase+this._urlPokemonSearch+id).toPromise();
  }
}
