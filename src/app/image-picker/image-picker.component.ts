import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
const RadImagepicker = require('@nstudio/nativescript-rad-imagepicker').RadImagepicker;




@Component({
    selector: 'Image-picker',
    templateUrl: './image-picker.component.html'
})
export class ImagePickerComponent implements OnInit, AfterViewChecked {
    private sideDrawer: RadSideDrawer;
    private picker;

    constructor() { }

    ngOnInit() {
        // this.picker = new RadImagepicker();
    }

    ngAfterViewChecked() {
        this.sideDrawer = <RadSideDrawer>Application.getRootView()
    }


    onPickImage() {
        const radImagepicker = new RadImagepicker();
        radImagepicker.pick({}).then((selectedImages) => {
            if (selectedImages) {
                // Do something with selected images
                // currently 
                // the image will be of type nativescript image source
                // tns-core-modules/image-source
            }
        });
    }

    onOpenDrawer() {
        this.sideDrawer.showDrawer();
    }
}