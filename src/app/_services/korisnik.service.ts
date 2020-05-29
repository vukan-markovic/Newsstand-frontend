﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../_models/korisnik';

@Injectable()
export class KorisnikService {
    private readonly API_URL = 'http://localhost:8080/api/korisnik/';

    constructor(private httpClient: HttpClient) { }

    public getKorisnici() {
        return this.httpClient.get<Korisnik[]>(this.API_URL);
    }

    public getKorisnik(id: number) {
        return this.httpClient.get<Korisnik>(this.API_URL + id);
    }

    public getKorisnikByEmail(email: String) {
        return this.httpClient.get<Korisnik>(this.API_URL + 'email/' + email);
    }

    public addKorisnik(izvestaj: Korisnik): void {
        this.httpClient.post(this.API_URL, izvestaj).subscribe();
    }

    public updateKorisnik(izvestaj: Korisnik): void {
        this.httpClient.put(this.API_URL, izvestaj).subscribe();
    }

    public deleteKorisnik(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}