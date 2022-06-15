import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PokemonSearch } from '../models/pokemon-search';
import { PokemonSearchService } from './pokemon-search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormControl();
  options: PokemonSearch[] = [{name: 'Pikachu', url: "tst.com"}, {name: 'Bullbassaur', url: "tst.com"}];
  filteredOptions: Observable<PokemonSearch[]> | undefined; //ENFASE OBSERVABLE
  pokemonSelected:string = '';  
  validSearch: boolean = false;

  constructor(private searchService: PokemonSearchService){
  }
  ngOnInit() {
    this.searchService.getAllPokemons().subscribe(res => {
      this.options = res.results;
    });

    this.filteredOptions = this.searchForm.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(user: PokemonSearch): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): PokemonSearch[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSelectPokemon(event: PokemonSearch){    
    this.pokemonSelected = event.name;     
  }
  
  onChangeSearchInput(eventName: Event){
    let name = (eventName.target as HTMLInputElement).value;
    console.log(name);
    var regex = "^[a-z ,.'-]+$";
    if (name.match(regex)){
      alert('O campo de busca está válido!');
      this.validSearch = true;
    } 
    else alert('O campo de busca está inválido!')
  }

}
