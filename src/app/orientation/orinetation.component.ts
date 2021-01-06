import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from "@nativescript/core";
import * as FileSystem from '@nativescript/core/file-system';






@Component({
    selector: 'Orientation',
    templateUrl: './orientation.component.html'
})
export class OrientationComponent implements OnInit, AfterViewChecked {

    private sideDrawer: RadSideDrawer;


    constructor() { }

    ngOnInit() {
        
        Application.on(Application.orientationChangedEvent, (data) => {
            console.log("Orientation changed ", data)
        })
    }


    ngAfterViewChecked() {
        this.sideDrawer = <RadSideDrawer>Application.getRootView()
    }



    onOpenDrawer() {
        this.sideDrawer.showDrawer();
    }


}