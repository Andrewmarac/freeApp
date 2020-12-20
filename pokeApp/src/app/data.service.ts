import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class DataService{

 constructor(private http: HttpClient) { }
 searchPoke(query: string) {
 const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

 let obsPoke = this.http.get(url);
 return obsPoke;
 }
}
