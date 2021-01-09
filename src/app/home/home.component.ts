import { Component, OnInit, ViewChild } from "@angular/core";
// import { Image } from "tns-core-modules/ui/image";
import { isAvailable, requestCameraPermissions, takePicture } from '@nativescript/camera';
import { Application } from "@nativescript/core";
import * as FileSystem from '@nativescript/core/file-system';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


    @ViewChild('image') image;
    capturedImage = null;
    isCaptured = false;


    private sideDrawer: RadSideDrawer;

    constructor() {
        // Use the component constructor to inject providers.
    }


    ngAfterViewChecked() {
        this.sideDrawer = <RadSideDrawer>Application.getRootView()
    }



    onOpenDrawer() {
        this.sideDrawer.showDrawer();
    }

    ngOnInit(): void {
        if (isAvailable()) {
            requestCameraPermissions()
                .then(
                    fulfilled => {
                        console.log('requestCameraPermissions fulfilled.');
                    },
                    rejected => {
                        console.log("Premission req failed")
                    }
                )
        } else {
        }

        this.listFiles();
    }


    public onTap(e) {
        const image = this.image.nativeElement;
        var options = { width: 300, height: 300, keepAspectRatio: true, saveToGallery: false };

        takePicture(options)
            .then(imageAsset => {
                console.log("The image asset ", imageAsset)
                image.src = imageAsset;
                this.capturedImage = imageAsset;
                this.isCaptured = true;
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
    }

    listFiles() {
        const array = [];
        const documents = FileSystem.knownFolders.documents();
        documents.getEntities()
            .then((entities) => {
                // entities is array with the document's files and folders.
                entities.forEach((entity) => {
                    array.push(
                        {
                            name: entity.name,
                            path: entity.path,
                            lastModified: entity.lastModified.toString()
                        }
                    );
                });
                console.log("the array ", array)
            }).catch((err) => {
                // Failed to obtain folder's contents.
                console.log(err.stack);
            });

       
    }
}
