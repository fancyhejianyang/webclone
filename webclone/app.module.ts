//AppModule 为应用根模块，为angular 描述了如何组装应用
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { IntroductionComponent } from "./introduction.component";
import { Aboult } from "./aboult.component";
import { Service } from "./service.compont";
import { Works } from "./works.component";
import { Blog } from "./blog.component";
import { Contact } from "./contact.component";
import { Footer } from "./footer.component";
import { Maxmi } from "./maxmi.component";
//NgModule装饰器函数接受参数是元数据，元数据包含了声明哪些组件，指令，管道等属于该模块
//导入各种类，服务
//引入的模块/类 imports;自己声明的组件declarations;引导主组件bootstrap;providers需要创建的服务实例
@NgModule({
    imports:[BrowserModule],
    declarations:[
        AppComponent,HeaderComponent,IntroductionComponent,
        Aboult,Service,Works,Blog,Contact,Footer,Maxmi
        ],
    bootstrap:[AppComponent]
})
export class AppModule{

}