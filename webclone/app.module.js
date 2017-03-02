"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//AppModule 为应用根模块，为angular 描述了如何组装应用
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const header_component_1 = require("./header.component");
const introduction_component_1 = require("./introduction.component");
const aboult_component_1 = require("./aboult.component");
const service_compont_1 = require("./service.compont");
const works_component_1 = require("./works.component");
const blog_component_1 = require("./blog.component");
const contact_component_1 = require("./contact.component");
const footer_component_1 = require("./footer.component");
const maxmi_component_1 = require("./maxmi.component");
//NgModule装饰器函数接受参数是元数据，元数据包含了声明哪些组件，指令，管道等属于该模块
//导入各种类，服务
//引入的模块/类 imports;自己声明的组件declarations;引导主组件bootstrap;providers需要创建的服务实例
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent, header_component_1.HeaderComponent, introduction_component_1.IntroductionComponent,
            aboult_component_1.Aboult, service_compont_1.Service, works_component_1.Works, blog_component_1.Blog, contact_component_1.Contact, footer_component_1.Footer, maxmi_component_1.Maxmi
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map