import { Injectable } from '@angular/core';
import { Izvestaj } from '../_models/izvestaj';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IzvestajService {
    private readonly API_URL = 'http://localhost:8080/api/izvestaj/';
    dataChange: BehaviorSubject<Izvestaj[]> = new BehaviorSubject<Izvestaj[]>([]);
    dataChangeIzvestaj: BehaviorSubject<Izvestaj> = new BehaviorSubject<Izvestaj>(null);

    constructor(private httpClient: HttpClient) { }

    public getIzvestaji(): Observable<Izvestaj[]> {
        this.httpClient.get<Izvestaj[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChange.asObservable();
    }

    public getIzvestaj(id: number): Observable<Izvestaj> {
        this.httpClient.get<Izvestaj>(this.API_URL + id).subscribe(data => {
            this.dataChangeIzvestaj.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChangeIzvestaj.asObservable();
    }

    public addIzvestaj(izvestaj: Izvestaj): void {
        this.httpClient.post(this.API_URL, izvestaj).subscribe();
    }

    public updateIzvestaj(izvestaj: Izvestaj): void {
        this.httpClient.put(this.API_URL, izvestaj).subscribe();
    }

    public deleteIzvestaj(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}