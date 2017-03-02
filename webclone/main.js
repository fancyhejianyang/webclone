"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//使即时(JiT)编译器 用编译应用并且在浏览器中启动并运行应用
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
//选项引导
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map