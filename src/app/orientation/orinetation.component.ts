import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application, fromObject } from "@nativescript/core";
import * as FileSystem from '@nativescript/core/file-system';
import { BehaviorSubject, Subject } from 'rxjs';






@Component({
    selector: 'Orientation',
    templateUrl: './orientation.component.html'
})
export class OrientationComponent implements OnInit, AfterViewChecked {

    private sideDrawer: RadSideDrawer;

    public orientation = new BehaviorSubject(Application.orientation());

    constructor() { }

    ngOnInit() {

        Application.on(Application.orientationChangedEvent, ({ newValue }) => {
            console.log("Orientation changed ", newValue)
            this.orientation.next(newValue);
        })
    }


    ngAfterViewChecked() {
        this.sideDrawer = <RadSideDrawer>Application.getRootView()
    }



    onOpenDrawer() {
        this.sideDrawer.showDrawer();
    }


}