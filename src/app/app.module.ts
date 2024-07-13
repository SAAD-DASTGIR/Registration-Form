import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatProgressSpinnerModule,MatCardModule,
    MatIconModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,ReactiveFormsModule,
    HttpClientModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule,MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
