//使即时(JiT)编译器 用编译应用并且在浏览器中启动并运行应用
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
//选项引导
const platform = platformBrowserDynamic();
platformBrowserDynamic().bootstrapModule(AppModule);
