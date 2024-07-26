import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  empform: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduation',
    'Post Graduation',
  ];

  constructor(
    private _fb: FormBuilder,
    private _dialogueref: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empform = this._fb.group({
      first_name: '',
      last_name: '',
      email: ['', [Validators.required, Validators.email]],
      qualification: '',
      DOB: '',
      gender: '',
      company: '',
      cnic: '',
      address: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.empform.patchValue(this.data);
    }
  }

  onClose(): void {
    this._dialogueref.close();
    console.log('form closed');
  }

  onSubmit(): void {
    if (this.empform.valid) {
      console.log(this.empform.value); // Log form value
      this._dialogueref.close(this.empform.value); // Close the dialog and return form data
    }
  }
}
