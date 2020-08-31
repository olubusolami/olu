import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { ListComponent } from './list/list.component';
import {CountriesComponent} from './countries/countries.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'list', component: ListComponent },
{ path: 'countries', component: CountriesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

