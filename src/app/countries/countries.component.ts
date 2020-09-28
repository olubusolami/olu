import { Component, OnInit } from '@angular/core';

import {HttpService } from '../http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: object;

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getCode().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    }
   ); 
  }

}
