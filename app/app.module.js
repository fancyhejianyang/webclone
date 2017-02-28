"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('./rxjs-extensions');
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require("@angular/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./in-memory-data.service");
const app_component_1 = require('./app.component');
const hero_detail_component_1 = require("./hero-detail.component");
const heroes_component_1 = require("./heroes.component");
const hero_service_1 = require("./hero.service");
const dashboard_component_1 = require("./dashboard.component");
const hero_search_component_1 = require("./hero-search.component");
const app_routing_module_1 = require("./app-routing.module");
//路由routes 是一个路由定义数组，包含path，component 部分
//path：路由器
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
        ],
        declarations: [
            app_component_1.AppComponent, dashboard_component_1.DashboardComponent, hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent, hero_search_component_1.HeroSearchComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        //需要创建的服务实例
        providers: [hero_service_1.HeroService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map