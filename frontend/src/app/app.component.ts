import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { HrDetailsComponent } from './components/hr-details/hr-details.component';
import { IAddress, IHrDetails } from './interfaces/registration.interface';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, AddressComponent, HrDetailsComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      companyRegistrationNumber: ['', Validators.required],
      addresses: [[]],
      hrDetails: this.fb.group({
        firstName: [''],
        middleName: [''],
        lastName: [''],
        gender: [''],
        emails: [[]]
      })
    });
    this.formGroup = this.fb.group({
      companyName: ["", Validators.required],
      companyRegistrationNumber: ["", Validators.required],
      address: [[]],
      hrDetails: this.fb.group({
        firstName: [""],
        middleName: [""],
        lastName: [""],
        email: [""]
      })

    })
  }



  formGroup: FormGroup;



  updateAddresses(addressList: IAddress[]) {
    this.form.get('addresses')?.setValue(addressList);
  }

  updateHrDetails(hr: IHrDetails) {
    this.form.get('hrDetails')?.setValue(hr);
  }

  onSubmit() {
    console.log(this.form.value);
    this.http.post('http://localhost:3000/api/register', this.form.value)
      .subscribe({
        next: res => alert('Registered!'),
        error: err => console.error(err)
      });
  }
}