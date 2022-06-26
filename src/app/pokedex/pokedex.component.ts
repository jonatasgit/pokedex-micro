import { Component, OnInit } from '@angular/core';
import { PokedexDataService } from '../shared/pokedex/pokedex-data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokedexData: string[] = [];

  constructor(private pokedexDataService: PokedexDataService) { }

  ngOnInit(): void {
    this.pokedexData = this.pokedexDataService.getPokemons();
  }

}
