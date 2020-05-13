import { Airport } from './airport';
import { Observable } from 'rxjs';

export interface AirportServiceInterface {
    getAirports() : Airport[];
    setAirports(test : Airport[]) : void;
    viewAirports() : Observable<any>;
    addAirport(airport:Airport):Observable<any>;
    deleteAirport(airportCode : string) : Airport[];
    updateAirport(airportCode : string,airport : Airport) : Airport[];
}
