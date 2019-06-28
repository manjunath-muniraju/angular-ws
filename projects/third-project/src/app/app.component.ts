import { Component } from '@angular/core';
import { TestService } from './test.service';

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
  constructor(svc: TestService) {
    svc.printTOConsole("Got the service!");
  }
}
