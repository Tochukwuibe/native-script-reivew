import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ImagePickerRoutingModule } from './image-picker-routing.module';
import { ImagePickerComponent } from './image-picker.component'


@NgModule({
  declarations: [
    ImagePickerComponent
  ],
  imports: [
    NativeScriptCommonModule,
    ImagePickerRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ImagePickerModule { }
