import { Component, Input } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
@Input() hero?: Hero;

  heroes = HEROES;


}
