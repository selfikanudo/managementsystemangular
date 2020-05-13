import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';
import { Airport } from '../airport';

@Component({
  selector: 'app-viewairport',
  templateUrl: './viewairport.component.html',
  styleUrls: ['./viewairport.component.css']
})
export class ViewairportComponent implements OnInit {


  airports: Airport[] = [];
  airport: Airport = new Airport();


  editFlag: boolean = false;
  constructor(private airportService: AirportService) { }

  ngOnInit(){
    this.airportService.viewAirports().subscribe(data=>{this.airports = data;
    console.log(data);
    this.airportService.setAirports(this.airports);
  });
}
  deleteAirport(airportCode:string):void{
    this.airports=this.airportService.deleteAirport(airportCode);
  }
  updateAirport(airportCode: string) {

    let tmpairports: Airport[] = this.airportService.getAirports().filter(airport => airport.airportCode == airportCode);
    if (tmpairports.length > 0) {
      this.airport = tmpairports[0];
      this.editFlag = true;
      }
    }
  editAirport(): void {
    this.airportService.updateAirport(this.airport.airportCode,this.airport);
      this.editFlag = false;
    }

}

