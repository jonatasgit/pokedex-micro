import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonCardService } from './pokemon-card.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()  pokemonSelected = '';

  id: string;
  pokemonPromise: Promise<Pokemon> | undefined;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
              private pokemonCardService: PokemonCardService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.pokemonCardService
        .getPokemonByName(this.id)
        .then(res =>{
            this.pokemon = res;
        })
        .catch((e) => {
          //erro ao obter pokemon
          console.log(`Erro ao obter ` + this.id);
          
        })
    
  }

  ngOnChanges(changes: any){
    if(this.pokemonSelected != ''){
      this.pokemonCardService
        .getPokemonByName(this.pokemonSelected)
        .then(res =>{
            this.pokemon = res;
        })
        .catch((e) => {
          //erro ao obter pokemon
          console.log(`Erro ao obter ` + this.id);
          
        })
    }
  }

}
