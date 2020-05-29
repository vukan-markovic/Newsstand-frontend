import { Injectable } from '@angular/core';
import { IzvestajDO } from '../_models/izvestajDO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IzvestajService {
    private readonly API_URL = 'http://localhost:8080/api/izvestaj/';

    constructor(private httpClient: HttpClient) { }

    public getIzvestaji() {
        return this.httpClient.get<IzvestajDO[]>(this.API_URL);
    }

    public getIzvestaj(id: number): Observable<IzvestajDO> {
        return this.httpClient.get<IzvestajDO>(this.API_URL + id);
    }

    public addIzvestaj(izvestaj: IzvestajDO): void {
        this.httpClient.post(this.API_URL, izvestaj).subscribe();
    }

    public updateIzvestaj(id: number, izvestaj: IzvestajDO): void {
        this.httpClient.put(this.API_URL + id, izvestaj).subscribe();
    }

    public deleteIzvestaj(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}