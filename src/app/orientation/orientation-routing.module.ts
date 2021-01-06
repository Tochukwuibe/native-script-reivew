import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "@nativescript/angular";
import { OrientationComponent } from './orinetation.component';

export const routes: Routes = [
    { path: "", component: OrientationComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OrientationRoutingModule { }
