    import './rxjs-extensions';
    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';
    import { HttpModule } from "@angular/http";
    import { InMemoryWebApiModule } from "angular-in-memory-web-api";
    import { InMemoryDataService } from "./in-memory-data.service";
    import { AppComponent }  from './app.component';
    import {HeroDetailComponent}from "./hero-detail.component";
    import {HeroesComponent} from "./heroes.component";
    import {HeroService} from "./hero.service";
    import { RouterModule } from '@angular/router';
    import { DashboardComponent } from "./dashboard.component";
    import { HeroSearchComponent } from "./hero-search.component";
    import { AppRoutingModule } from "./app-routing.module";
    //路由routes 是一个路由定义数组，包含path，component 部分
    //path：路由器
    
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      declarations: [
        AppComponent,DashboardComponent,HeroDetailComponent,HeroesComponent,HeroSearchComponent
      ],
      bootstrap: [ AppComponent ],
      //需要创建的服务实例
      providers:[HeroService]
    })
    export class AppModule { }