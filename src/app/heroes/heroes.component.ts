import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private HeroService: HeroService) { }

  selectedHero?: Hero;
  onSelected(heroes: Hero): void {
    this.selectedHero = heroes;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
