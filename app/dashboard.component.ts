import { Component } from "@angular/core";
import { Hero } from './app.hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
@Component ({
    moduleId:module.id,
    selector:'my-dashboard',
    styleUrls:['dashboard.component.css'],
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    heroes:Hero[] = [];
    constructor(private heroService: HeroService) {  }
    ngOnInit():void {
        this.heroService.getHeroes()
        .then(heroes=>this.heroes = heroes.slice(1, 5));
    }
}
