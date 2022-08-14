import { Component, OnInit } from '@angular/core';
import { Noviproizvod } from '../models/noviproizvod';
import { NoviproizvodService } from '../services/noviproizvod.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-noviproizvodi',
  templateUrl: './noviproizvodi.component.html',
  styleUrls: ['./noviproizvodi.component.css']
})
export class NoviproizvodiComponent implements OnInit {

  public proizvodi?: Noviproizvod[];

  constructor(private noviproizvodService: NoviproizvodService) { }

  ngOnInit(): void {
    this.getProizvodi();
  }

  public getProizvodi(): void {
    this.noviproizvodService.getProizvodi().subscribe({
      next:(response: Noviproizvod[]) => {
        this.proizvodi = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onAddProizvod(addForm: NgForm): void {
    document.getElementById('add-proizvod-form')!.click();
    this.noviproizvodService.addProizvod(addForm.value).subscribe({
      next:(response: Noviproizvod) => {
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

