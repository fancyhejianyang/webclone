import{Component,Input, OnInit}from "@angular/core";
import { ActivatedRoute,Params } from "@angular/router";
import { Location }         from '@angular/common';
import { HeroService } from './hero.service';
import{ Hero }from "./app.hero";
import 'rxjs/add/operator/switchMap';
@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
    styleUrls:['./hero-detail.component.css'],
    templateUrl:'./hero-detail.component.html'
    
})
export class HeroDetailComponent implements OnInit{
    //将hero声明成输入属性，添加注解
    @Input()
    hero:Hero
    constructor (
        private heroService: HeroService,
        private route : ActivatedRoute,
        private location : Location
    ) { }
    ngOnInit():void {
        this.route.params
        .switchMap((params:Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    goBack () :void {
        this.location.back();
    }
    save() :void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}