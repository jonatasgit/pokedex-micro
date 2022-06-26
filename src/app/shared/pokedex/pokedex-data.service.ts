import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexDataService {

  private pokedexData: string[] = [];

  addPokemon(pokemon: string){
    this.pokedexData.push(pokemon);
  }

  getPokemons() : string[]{
    return this.pokedexData;
  }

  constructor() { }
}
