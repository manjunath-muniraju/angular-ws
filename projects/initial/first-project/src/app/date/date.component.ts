import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.styl']
})
export class DateComponent implements OnInit {

  message: string = "Hey !!!";
  dateMessage: string = new Date().toDateString();

  someNumber: Number = 10;

  newDateMessage: string;

  constructor() { 
    setInterval( () => {
      let currentDate = new Date();
      this.newDateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000)
  }

  ngOnInit() {
  }

  addTwoNumbers(a: Number, b: Number) {
    return a + b;
  }

}
