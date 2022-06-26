import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonSearch } from '../models/pokemon-search';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {

  public _urlBase: string = "https://pokeapi.co/api/v2/";
  _urlPokemonSearch: string = "pokemon?limit=100000&offset=0";

  constructor(public http: HttpClient) { }

  getAllPokemons(){
    return this.http.get<any>(this._urlBase+this._urlPokemonSearch);
  }
}
