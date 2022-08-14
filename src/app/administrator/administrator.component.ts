import { Component, OnInit } from '@angular/core';
import { Proizvod } from '../models/proizvod';
import { ProizvodService } from '../services/proizvod.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Kontakt } from '../models/kontakt';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  public proizvodi!: Proizvod[];
  public ediProizvod!: Proizvod;
  public deleteProizvod!: Proizvod;
  constructor(private proizvodService: ProizvodService) { }

  ngOnInit(): void {
    this.getProizvodi();
  }

  public getProizvodi(): void {
    this.proizvodService.getProizvodi().subscribe({
      next:(response: Proizvod[]) => {
        this.proizvodi = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onAddProizvod(addForm: NgForm): void {
    document.getElementById('add-employee-form')!.click();
    this.proizvodService.addProizvod(addForm.value).subscribe({
      next:(response: Proizvod) => {
        console.log(response);
        this.getProizvodi();
        addForm.reset();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onDeleteProizvod(proizvodId: number): void {
    this.proizvodService.deleteProizvod(proizvodId).subscribe({
      next:(response: void) => {
        console.log(response);
        this.getProizvodi();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }


  }



