import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Property } from '../model/property';

@Injectable()
export class PropertyService {
    constructor(private http: HttpClient) { }

    findAll(): Observable<Property[]> {
        return this.http.get<Property[]>(`/source-1.json`);
    }
}
