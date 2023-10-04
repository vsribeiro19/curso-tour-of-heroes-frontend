import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelected(heroes: Hero): void {
    this.selectedHero = heroes;
  }
}
