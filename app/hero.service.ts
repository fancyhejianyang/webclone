//根据命名约定，类名为HeroService
import {Injectable}from '@angular/core';
import {Hero} from "./app.hero";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
//当typescript 看到这个装饰器会记下本服务的元数据,angular 需要往其中注入依赖才能进行使用元数据
export class HeroService{
    private heroesUrl = "app/heroes";//url to web api 
    private headers = new Headers({'content-Type':'application/json'})
    private handleError (error: any):Promise <any> {
      console.error('An error occured',error);
      return Promise.reject(error.message||error);
    }
    constructor (private http:Http){

    }
    getHeroes(): Promise<Hero[]> {
      return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response=>response.json().data as Hero[])
        .catch(this.handleError);
    }
    getHero(id:Number) :Promise<Hero>{
      return this.getHeroes()
      .then(heroes=>heroes.find(hero=>hero.id === id));
    }
    update(hero:Hero):Promise<Hero> {
      const url = `${this.heroesUrl}/${hero.id}`;
      return this.http
        .put(url, JSON.stringify(hero),{headers:this.headers})
        .toPromise()
        .then(()=>hero)
        .catch(this.handleError)
    }
    create(name:string):Promise<Hero>{
      return this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
      .toPromise()
      .then(res =>res.json().data)
      .catch(this.handleError);
    }
    delete(id:number):Promise<void>{
      const url =`${this.heroesUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}