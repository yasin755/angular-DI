import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {
    locations: any;
    isError: boolean = false;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getLocationsList();
    }

    getLocationsList() {
        this.dataService.getLocations().subscribe(
            locations => {
                //if (data.status)
                this.isError = false;
                this.locations = locations;
            },
            error => {
                this.locations = [];
                this.isError = true;
            }
        )
    }

}