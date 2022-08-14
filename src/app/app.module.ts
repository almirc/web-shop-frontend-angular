import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { ProizvodService } from './services/proizvod.service';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormsModule } from '@angular/forms';
import { AdministratorComponent } from './administrator/administrator.component';
import { PorukeComponent } from './poruke/poruke.component';
import { NoviproizvodiComponent } from './noviproizvodi/noviproizvodi.component';
import { OnamaComponent } from './onama/onama.component';

@NgModule({
  declarations: [
    AppComponent,
    ProizvodiComponent,
    PocetnaComponent,
    KontaktComponent,
    AdministratorComponent,
    PorukeComponent,
    NoviproizvodiComponent,
    OnamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProizvodService],
  bootstrap: [AppComponent]
})
export class AppModule { }

