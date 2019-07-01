import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  constructor() {
    let svc = new TestService();
    svc.printTOConsole('Hi');
  }
*/

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc = svc;
    svc.printTOConsole("Got the service!");
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/manjunath-muniraju');
    obs.subscribe((response) => console.log(response));
  }
}
