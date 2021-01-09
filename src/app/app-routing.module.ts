import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "picker", loadChildren: () => import("~/app/image-picker/image-picker.module").then((m) => m.ImagePickerModule) },
    { path: "file", loadChildren: () => import("~/app/file-system/file-system.module").then((m) => m.FileSystemModule) },
    { path: "orientation", loadChildren: () => import("~/app/orientation/orientation.module").then((m) => m.OrientationModule) },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
