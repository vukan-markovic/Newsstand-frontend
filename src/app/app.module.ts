import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import {
    MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatGridListModule,
    MatExpansionModule, MatTableModule, MatToolbarModule, MatOptionModule, MatSelectModule,
    MatSnackBarModule, MatDialogModule, MatInputModule, MatNativeDateModule,
    MatCheckboxModule, MatDatepickerModule, MatPaginatorModule, MatSortModule, MatTooltipModule,
    MatStepperModule
} from '@angular/material';
import { DobavljacComponent } from './_components/dobavljac/dobavljac.component';
import { IzvestajComponent } from './_components/izvestaj/izvestaj.component';
import { PorudzbinaComponent } from './_components/porudzbina/porudzbina.component';
import { ProizvodComponent } from './_components/proizvod/proizvod.component';
import { ProdavacComponent } from './_components/prodavac/prodavac.component';
import { ProizvodjacComponent } from './_components/proizvodjac/proizvodjac.component';
import { RacunComponent } from './_components/racun/racun.component';
import { VrstaProizvodaComponent } from './_components/vrsta-proizvoda/vrsta-proizvoda.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            tapToDismiss: true
        }),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatExpansionModule,
        MatTableModule,
        MatToolbarModule,
        MatSelectModule,
        MatOptionModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatStepperModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DobavljacComponent,
        IzvestajComponent,
        PorudzbinaComponent,
        ProizvodComponent,
        ProdavacComponent,
        ProizvodjacComponent,
        RacunComponent,
        VrstaProizvodaComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };