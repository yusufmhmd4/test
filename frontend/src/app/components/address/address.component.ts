import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAddress } from '../../interfaces/registration.interface';

@Component({
  selector: 'app-address',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  addressForm: FormGroup;
  addressList: IAddress[] = [];
  @Output() addressesChanged = new EventEmitter<IAddress[]>();

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      type: [''],
      houseNo: [''],
      location: [''],
      state: [''],
      street: [''],
      city: [''],
      zipcode: ['']
    });
  }

  addAddress() {
    this.addressList.push(this.addressForm.value);
    this.addressForm.reset();
    this.addressesChanged.emit(this.addressList);
  }

  removeAddress(index: number) {
    this.addressList.splice(index, 1);
    this.addressesChanged.emit(this.addressList);
  }
}