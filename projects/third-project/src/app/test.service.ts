import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  printTOConsole(args) {
    console.log(args);
  }
}
