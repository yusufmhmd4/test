import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IHrDetails } from '../../interfaces/registration.interface';

@Component({
  selector: 'app-hr-details',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './hr-details.component.html',
  styleUrl: './hr-details.component.css'
})
export class HrDetailsComponent {
  hrForm: FormGroup;
  @Output() hrDetailsChanged = new EventEmitter<IHrDetails>();

  constructor(private fb: FormBuilder) {
    this.hrForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      gender: [''],
      emails: this.fb.array([this.fb.control('')])
    });

    this.hrForm.valueChanges.subscribe(val => {
      this.hrDetailsChanged.emit(val);
    });
  }

  get emails() {
    return this.hrForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }
}