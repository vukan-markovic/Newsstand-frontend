  
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Proizvodjac } from 'src/app/_models/proizvodjac';
import { ProizvodjacService } from 'src/app/_services/proizvodjac.service';
import { ProizvodjacDialogComponent } from '../dialogs/proizvodjac-dialog/proizvodjac-dialog.component';

@Component({
  selector: 'app-proizvodjac',
  templateUrl: './proizvodjac.component.html',
  styleUrls: ['./proizvodjac.component.css']
})
export class ProizvodjacComponent implements OnInit {
  displayedColumns = ['nazivProizvodjaca', 'kontaktProizvodjaca', 'adresaProizvodjaca', 'actions'];
  dataSource: MatTableDataSource<Proizvodjac>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public proizvodjacService: ProizvodjacService, public dialog: MatDialog) { }

  ngOnInit() { }

  public loadData() {
    this.proizvodjacService.getProizvodjac().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sortingDataAccessor = (data, property) => {
        return data[property].toLocaleLowerCase();
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  public openDialog(flag: number,  proizvodjacID: number,
    nazivProizvodjaca: string,
    kontaktProizvodjaca: string,
    adresaProizvodjaca: string) {
    const dialogRef = this.dialog.open(ProizvodjacDialogComponent, {
      data: {
        i: proizvodjacID, id: proizvodjacID, nazivProizvodjaca: nazivProizvodjaca, kontaktProizvodjaca: kontaktProizvodjaca,
        adresaProizvodjaca: adresaProizvodjaca
      }
    });
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}