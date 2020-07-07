import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  public paymentInfo: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
