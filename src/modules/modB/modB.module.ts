import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { LocationComponent } from '../../components/locations/location.component';

@NgModule({
    declarations: [
        LocationComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [LocationComponent]
})
export class ModBModule { }








