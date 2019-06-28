import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user1: any;
  @Input('name') userName: string;
  @Input('name') userName1: string = 'Temp';

  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() { 

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    /*this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone
    };
*/
    /*
    this.user = {
      name: this.userName,
      title: 'Software Dev',
      address: '1234 Main St, city, state',
      phone:[
        '123-123-1234',
        '456-456-4567',
        '456-456-9999'
      ]
    };
    */
  }
}
