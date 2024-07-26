// import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AddEditComponent } from './component/add-edit/add-edit.component';
// import { EmployeeService } from './service/employee.service';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';
// import { MatIcon, MatIconModule } from '@angular/material/icon';
// import { LocalStateService } from './service/localstateservice.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   // imports;[]
// })

// // --------------------------------------Using JsonServer for Service Employee-------------------------------
// // ----------------------------------------------------------------------------------------------------------

// // export class AppComponent implements OnInit{
// //   displayedColumns: string[] = ['id', 'firstname', 'lastname', 'dob','education','email','experience',
// //   'cnic','address','company','package','gender','action',];
// //   dataSource!: MatTableDataSource<any>;

// //   @ViewChild(MatPaginator) paginator!: MatPaginator;
// //   @ViewChild(MatSort) sort!: MatSort;
// //   constructor(private _dialog:MatDialog, private _empService:EmployeeService,private _localStateService: LocalStateService){}
// //   ngOnInit(): void {
// //       this.getEmployeeData()
// //   }
// //   openEditEmpForm(){
// //     const dialogRef=this._dialog.open(AddEditComponent)
// //     dialogRef.afterClosed().subscribe({
// //       next: (val)=>{
// //         this.getEmployeeData()
// //       }
// //     })
// //   }
// //   getEmployeeData(){
// //     this._empService.getEmployeeData().subscribe({
// //       next:(res:any)=>{
// //         this.dataSource= new MatTableDataSource(res)
// //         this.dataSource.sort=this.sort
// //         this.dataSource.paginator= this.paginator
// //         // this.getEmployeeData()

// //       },
// //     })
// //   }
// //   applyFilter(event: Event) {
// //     const filterValue = (event.target as HTMLInputElement).value;
// //     this.dataSource.filter = filterValue.trim().toLowerCase();

// //     if (this.dataSource.paginator) {
// //       this.dataSource.paginator.firstPage();
// //     }
// //   }
// //   deleteEmployee(id:number){
// //     this._empService.deleteEmployeeData(id).subscribe({
// //       next: (res)=>{
// //         console.log('delete employee')
// //         this.getEmployeeData()
// //       }
// //     })
// //   }
// // }

// // ------------------------------------------------------------------------------- // 
// // ------------------------------------------------------------------------------- //
// export class AppComponent implements OnInit, AfterViewInit {
//   displayedColumns: string[] = [ 
//     'firstname', 
//     'lastname', 
//     'dob', 
//     'education', 
//     'email', 
//     'experience',
//     'cnic', 
//     'address', 
//     'company', 
//     'package', 
//     'gender',
//     'action'];

//   dataSource!: MatTableDataSource<any>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(
//     private _dialog: MatDialog, 
//     private _localStateService: LocalStateService) 
//   { }

//   ngOnInit(): void {
//     this.loadEmployeeData();
//   }

//   ngAfterViewInit(): void {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   openEditEmpForm(data?: any) {
//     const dialogRef = this._dialog.open(AddEditComponent, {
//       data: data
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         if (data) {
//           this._localStateService.editEmployee(data.cnic, result);
//         } else {
//           this._localStateService.addEmployee(result);
//         }
//         this.loadEmployeeData();
//       }
//     });
//   }

 
//   loadEmployeeData() {
//     const employeeData = this._localStateService.getEmployeeData();
//     this.dataSource = new MatTableDataSource(employeeData);
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
    
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// //--------------------------------USING CNIC AS IDENTIFIER-------------------------------- 
//   // deleteEmployee(cnic: number) {
//   //   this._localStateService.deleteEmployee(cnic);
//   //   this.loadEmployeeData();
//   //   // console.log(this.deleteEmployee(cnic))
//   // }
//   // editEmployee(cnic: number, data: any) {
//   //   this.openEditEmpForm(data);
//   // }
// // ------------------------------------------------------------------------------------------
//   deleteEmployee(index: number) {
//     const employeeData = this.dataSource.data;
//     employeeData.splice(index, 1);
//     this.dataSource.data = employeeData; // giving redundant data check later
//     this._localStateService.setEmployeeData(employeeData);
//     this.loadEmployeeData();
//   }

//   editEmployee(index: number,data:any) {
//     const employeeData = this.dataSource.data[index];
//     this.openEditEmpForm(employeeData);
//   }
  
 
// }


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
    // Assign paginator and sort after view has been initialized
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
      console.log('Fetched data:', res);
      // Ensure `id` is included and accessible
      const data = res.data.map((item: any) => ({
        id: item.id,
        ...item.attributes
      }));
      console.log('Mapped data:', data);
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
    console.log('Attempting to delete employee with ID:', id);
    if (id !== undefined && id !== null) {
      this._empService.deleteEmployeeData(id).subscribe({
        next: () => {
          this.loadEmployeeData(); // Reload data to reflect changes
        },
        error: (err) => {
          console.error('Error deleting employee:', err);
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
