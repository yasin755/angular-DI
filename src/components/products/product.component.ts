import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'src/services/data.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    products: any;
    isError: boolean = false;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getProductList();
    }

    getProductList() {
        this.dataService.getProducts().subscribe(
            products => {
                this.isError = false;
                this.products = products;
            },
            error => {
                this.products = [];
                this.isError = true;
            }
        )
    }

}