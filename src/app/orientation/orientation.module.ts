import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { OrientationRoutingModule } from './orientation-routing.module';
import { OrientationComponent } from './orinetation.component';




@NgModule({
  declarations: [
    OrientationComponent
  ],
  imports: [
    NativeScriptCommonModule,
    OrientationRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class OrientationModule { }
