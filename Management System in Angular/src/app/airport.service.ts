import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from './airport';
import { AirportServiceInterface } from './airport-service-interface';

@Injectable({
  providedIn: 'root'
})
export class AirportService implements AirportServiceInterface{
  
  private airport: Airport[] = [];
  constructor(private http: HttpClient) {}

  viewAirports():Observable<any>
  {
    return this.http.get("http://localhost:8068/airports"); 
  }
  setAirports(airport:Airport[]):void {
    this.airport=airport;
  }
  getAirports():Airport[]{
    return this.airport;
  }
  addAirport(airport:Airport):Observable<any>{
    console.log("Addded");
    return this.http.post("http://localhost:8068/airport",airport,{responseType:"text"});
  }
  deleteAirport(airportCode:string): Airport[]
  {
    this.airport = this.airport.filter(airport=>airport.airportCode!=airportCode);
    this.http.delete("http://localhost:8068/delete/"+airportCode).subscribe(data=>{
      console.log(data);
    });
    return this.airport;
  }
  updateAirport(airportCode:string, airport:Airport):Airport[]{
    this.http.put("http://localhost:8068/airport/"+airportCode,airport).subscribe(data=>{
      console.log(data);
    });
    return this.airport;
  }
}
