import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { EmployeeService } from './service/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'first_name', 'last_name', 'DOB', 'qualification', 'email', 'experience',
    'cnic', 'address', 'company', 'package', 'gender', 'action'
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.loadEmployeeData(); 
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openEditEmpForm(data?: any) {
    const dialogRef = this._dialog.open(AddEditComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data) {
          this._empService.editEmployeeData(data.id, result).subscribe(() => this.loadEmployeeData());
        } else {
          this._empService.addEmployee(result).subscribe(() => this.loadEmployeeData());
        }
      }
    });
  }

  loadEmployeeData() {
    this._empService.getEmployeeData().subscribe((res: any) => {
      const data = res.data.map((item: any) => ({
        id: item.id,
        ...item.attributes // because of data strapi gives and recieves
      }));
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    if (id !== undefined && id !== null) {
      this._empService.deleteEmployeeData(id).subscribe({
        next: () => {
          this.loadEmployeeData(); // Reload data to reflect changes
        }
      });
    } else {
      console.error('Invalid ID provided for deletion.');
    }
  }
  
  editEmployee(data: any) {
    this.openEditEmpForm(data);
  }
}
