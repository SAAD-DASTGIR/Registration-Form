import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStateService {
  private employeeData: any[] = [
    
  ];

  // ------------------------HERE I SAVED DATA IN LOCAL STORAGE----------------------
  // ---------------------------------------------------------------------------------
  constructor() { 
    // this.loadFromLocalStorage();
  }

  // private saveToLocalStorage() {
  //   localStorage.setItem('employeeData', JSON.stringify(this.employeeData));
  // }

  // private loadFromLocalStorage() {
  //   const data = localStorage.getItem('employeeData');
  //   if (data) {
  //     this.employeeData = JSON.parse(data);
  //   }
  // }

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  setEmployeeData(data: any[]) {
    this.employeeData = data;
    // this.saveToLocalStorage(); 
  }

  getEmployeeData() {
    return this.employeeData;
  }

  addEmployee(employee: any) { // change interface after error goes
    this.employeeData.push(employee);
    // this.saveToLocalStorage();
  }

  deleteEmployee(cnic: number) {
    this.employeeData = this.employeeData.filter(emp => emp.cnic !== cnic);
    // this.saveToLocalStorage();
  }
  editEmployee(cnic: number, updatedEmployee: any) {
    const index = this.employeeData.findIndex(emp => emp.cnic === cnic);
    if (index !== -1) {
      this.employeeData[index] = updatedEmployee;
    }
  }
  
}
