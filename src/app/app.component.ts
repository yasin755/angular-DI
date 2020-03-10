import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-DI';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.dataService.getProducts().subscribe(
      data => {
        //if (data.status)
        console.log(data);
      }
    )
  }

}
