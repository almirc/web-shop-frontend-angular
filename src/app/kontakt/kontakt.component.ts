import { Component, OnInit } from '@angular/core';
import { Kontakt } from '../models/kontakt';
import { KontaktService } from '../services/kontakt.service';
import { Form, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent implements OnInit {
  public kontakti?: Kontakt[];

  constructor(private kontaktService: KontaktService) {}







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




}
