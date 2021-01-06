import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "@nativescript/angular";
import { FileSystemComponent } from './file-system.component';

export const routes: Routes = [
    { path: "", component: FileSystemComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FileSystemRoutingModule { }
