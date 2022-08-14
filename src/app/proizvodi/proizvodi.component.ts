import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proizvod } from '../models/proizvod';
import { ProizvodService } from '../services/proizvod.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {

  public proizvodi?: Proizvod[];

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
    document.getElementById('add-proizvod-form')!.click();
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


}
