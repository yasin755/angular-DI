import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class DataService {

    private baseUrl = "http://localhost:3000/";
    constructor(
        private http: HttpClient
    ) {
    }

    getProducts(): Observable<any> {
        return this.http.get(this.baseUrl + "posts");
    }

}