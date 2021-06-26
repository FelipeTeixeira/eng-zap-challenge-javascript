import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable()
export class PropertyService {
    // TO DO - jogar no enviroment
    static readonly API_URL = 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/';

    constructor(private http: HttpClient) { }

    findAll(): Observable<Property[]> {
        return this.http.get<Property[]>(`${PropertyService.API_URL}source-sample.json`);
        // return this.http.get<Property[]>(`${PropertyService.API_URL}source-1.json`);
    }
}
