import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { EmployeeService } from 'src/app/service/employee.service';
import { LocalStateService } from 'src/app/service/localstateservice.service';



@Component({
  selector: 'app-add-edit',
  // imports;[MatRadioGroup,MatRadioButton], add whn standalone fnc
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  
})
export class AddEditComponent implements OnInit{
  empform: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermiadiate',
    'Graduation',
    'Post Graduation'
  ];
  private data = inject(MAT_DIALOG_DATA);
  ngOnInit(): void {
    if (this.data) {
      this.empform.patchValue(this.data);
    }
  }
  constructor(    
    private _fb: FormBuilder, 
    private _localStateService: LocalStateService,     
    private _dialogueref: MatDialogRef<AddEditComponent>,
    ) 
    
    {
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
    console.log("form closed")
  }

  onSubmit() {
    if (this.empform.valid) {
      this._dialogueref.close(this.empform.value); // Close the dialog and return form data
    }
  }
}

