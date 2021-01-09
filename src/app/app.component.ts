import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    
    private _mainContentText: string;

    constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private routerExtensions: RouterExtensions
        ) {
    }

    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }


    navigateToCamera(): void {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    navigateToFile(): void {
        this.routerExtensions.navigate(["/file"], { clearHistory: true });
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    navigateToPicker(): void {
        this.routerExtensions.navigate(["/picker"], { clearHistory: true });
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    navigateToOrientation(): void {
        this.routerExtensions.navigate(["/orientation"], { clearHistory: true });
        this.drawerComponent.sideDrawer.closeDrawer();
    }
}
