import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css']
})
export class AddairportComponent{
 airport: Airport = new Airport();

 
 constructor(private airportService: AirportService, private route: Router) { }

 addAirport() {
   console.log("add airport");
   this.airportService.addAirport(this.airport).subscribe(data=>{this.airport=data});
   this.route.navigateByUrl("/add");
 }
}
