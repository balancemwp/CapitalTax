import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  contactPhone: string;
  emailAddress: string;

  constructor() { }

  ngOnInit() {
    this.contactPhone = Constants.ContactPhone;
    this.emailAddress = Constants.EmailAddress;
  }

}
