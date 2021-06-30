import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { environment } from '../../../environments/environment';

@Injectable()
export class PropertyService {
    constructor(
        private http: HttpClient
    ) { }

    findAll(): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.baseUrl}/source-1.json`);
    }
}
