import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { FamilyComponent } from '../../components/families/families.component';

@NgModule({
    declarations: [
        FamilyComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        FamilyComponent
    ]
})
export class ModAModule { }
