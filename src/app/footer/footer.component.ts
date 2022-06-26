import { Component, OnInit } from '@angular/core';
import { PokedexDataService } from '../shared/pokedex/pokedex-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pokedexData: string[] = [];

  constructor(private pokedexDataService: PokedexDataService) { }

  ngOnInit(): void {
    this.pokedexData = this.pokedexDataService.getPokemons();
  }

}
