import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor() { }

  contactPhone: string;

  ngOnInit() {
    this.contactPhone = Constants.ContactPhone;
  }

}
