import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ImagePickerComponent } from './image-picker.component';

export const routes: Routes = [
    { path: "", component: ImagePickerComponent }
];


@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ImagePickerRoutingModule { }
