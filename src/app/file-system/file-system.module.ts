import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { FileSystemRoutingModule } from './file-system-routing.module';
import { FileSystemComponent } from './file-system.component';



@NgModule({
  declarations: [
   FileSystemComponent
  ],
  imports: [
    NativeScriptCommonModule,
    FileSystemRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FileSystemModule { }
