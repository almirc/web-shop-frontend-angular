import { Component, OnInit } from '@angular/core';
import { KontaktComponent } from '../kontakt/kontakt.component';
import { Kontakt } from '../models/kontakt';
import { KontaktService } from '../services/kontakt.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-poruke',
  templateUrl: './poruke.component.html',
  styleUrls: ['./poruke.component.css']
})
export class PorukeComponent implements OnInit {
  public kontakti?: Kontakt[];

  constructor(private kontaktService: KontaktService) { }

  ngOnInit(): void {
    this.getKontakti();
  }

  public getKontakti(): void {
    this.kontaktService.getKontakti().subscribe({
      next:(response: Kontakt[]) => {
        this.kontakti = response;
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onAddKontakt(addForm: NgForm): void {
    document.getElementById('add-kontakt-form')?.click();
    this.kontaktService.addKontakt(addForm.value).subscribe({
      next:(response: Kontakt) => {
        console.log(response);
        this.getKontakti();
        addForm.reset();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onDeleteKontakt(kontaktId: number): void {
    this.kontaktService.deleteKontakt(kontaktId).subscribe({
      next:(response: void) => {
        console.log(response);
        this.getKontakti();
      },
      error:(error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
