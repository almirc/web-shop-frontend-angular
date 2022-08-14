import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OnamaComponent } from './onama/onama.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';

const routes: Routes = [
  {path: '', component: PocetnaComponent},
  {path: 'proizvodi', component: ProizvodiComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'admin', component: AdministratorComponent},
  {path: 'onama', component: OnamaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

