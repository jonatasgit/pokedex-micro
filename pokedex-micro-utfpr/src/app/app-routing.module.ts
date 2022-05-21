import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { SearchComponent } from './search/search.component';
import { PokemonCardComponent } from './shared/pokemon-card/pokemon-card.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  { path: 'pokedex', component: PokedexComponent},
  { path: 'pokemon/:id', component: PokemonCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
