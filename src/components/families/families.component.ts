import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'app-family',
    templateUrl: './families.component.html',
    styleUrls: ['./families.component.css']
})

export class FamilyComponent implements OnInit {
    families: any;
    isError: boolean = false;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getFamiliesList();
    }

    getFamiliesList() {
        this.dataService.getFamilies().subscribe(
            families => {
                //if (data.status)
                this.isError = false;
                this.families = families;
            },
            error => {
                this.families = [];
                this.isError = true;
            }
        )
    }

}