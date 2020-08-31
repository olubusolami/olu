import { Component, OnInit } from '@angular/core';


import {HttpService } from '../../app/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: any[]=[];

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.getCode().subscribe((data:any) => {
      this.countries = data.result;
      console.log(this.countries);
    }
   ); 
  }

}
