import { Injectable } from '@angular/core';
import { Dobavljac } from '../_models/dobavljac';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DobavljacService {
    private readonly API_URL = 'http://localhost:8080/api/dobavljac';
    dataChange: BehaviorSubject<Dobavljac[]> = new BehaviorSubject<Dobavljac[]>([]);
    private readonly API_URL_BYID = 'http://localhost:8083/igraciZaTimId/';
    dataChange: BehaviorSubject<Igrac[]> = new BehaviorSubject<Igrac[]>([]);
    
    constructor(private httpClient: HttpClient) { }

    public getDobavljac(): Observable<Dobavljac[]> {
        this.httpClient.get<Dobavljac[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChange.asObservable();
    }

    public getIgraceZaTim(idTima): Observable<Igrac[]> {
        this.httpClient.get<Igrac[]>(this.API_URL_BYID + idTima).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChange.asObservable();
    }

    public addDobavljac(dobavljac: Dobavljac): void {
        this.httpClient.post(this.API_URL, dobavljac).subscribe();
    }

    public updateDobavljac(dobavljac: Dobavljac): void {
        this.httpClient.put(this.API_URL, dobavljac).subscribe();
    }

    public deleteDobavljac(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}