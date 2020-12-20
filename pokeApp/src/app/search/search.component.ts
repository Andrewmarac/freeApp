
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
 selector: 'app-root',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent {
 query: string;
 title = 'pokeApp';
 obspoke: Observable<Object>;
 results: any;

 constructor(public pokemon: DataService) {
 }
 submit(query:HTMLInputElement): void {
 if (!query.value) {
 return;
 }
 this.query = query.value;
 this.obspoke = this.pokemon.searchPoke(this.query);
 this.obspoke.subscribe((data) => this.results = data);
 }
}
