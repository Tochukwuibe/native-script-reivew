import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Application } from "@nativescript/core";
import * as FileSystem from '@nativescript/core/file-system';






@Component({
    selector: 'File-system',
    templateUrl: './file-system.component.html'
})
export class FileSystemComponent implements OnInit, AfterViewChecked {

    private sideDrawer: RadSideDrawer;
    public files = [];

    constructor() { }

    ngOnInit() {
        this.listFiles()
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


    listFiles() {
        const documents = FileSystem.knownFolders.documents();
        documents.getEntities()
            .then((entities) => {
                // entities is array with the document's files and folders.

                entities.forEach((entity) => {
                    this.files.push(
                        {
                            name: entity.name,
                            path: entity.path,
                            lastModified: entity.lastModified.toString()
                        }
                    );
                });
            }).catch((err) => {
                // Failed to obtain folder's contents.
                console.log(err.stack);
            });


    }
}