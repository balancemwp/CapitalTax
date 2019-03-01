import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactPhone: string;
  emailAddress: string;

  constructor() { }

  ngOnInit() {
    this.contactPhone = Constants.ContactPhone;
    this.emailAddress = Constants.EmailAddress;
  }

  sendEmail(){
    
  }
}
