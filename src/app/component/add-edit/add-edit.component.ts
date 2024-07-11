import { DialogRef } from '@angular/cdk/dialog';
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { EmployeeService } from 'src/app/service/employee.service';
import { LocalStateService } from 'src/app/service/localstateservice.service';


@Component({
  selector: 'app-add-edit',
  // imports;[MatRadioGroup,MatRadioButton],
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  
})
export class AddEditComponent {
  empform: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermiadiate',
    'Graduation',
    'Post Graduation'
  ];

  constructor(private _fb: FormBuilder, private _localStateService: LocalStateService, private _dialogueref: MatDialogRef<AddEditComponent>) {
    this.empform = this._fb.group({
      
      firstname: '',
      lastname: '',
      email: '',
      education: '',
      dob: '',
      gender: '',
      company: '',
      cnic: '',
      address: '',
      experience: '',
      package: '',
      
    });
  }

  onClose(): void {
    this._dialogueref.close();
  }

  onSubmit() {
    if (this.empform.valid ) {
      this._localStateService.addEmployee(this.empform.value);
      this._dialogueref.close(true);
    }
  }
}

