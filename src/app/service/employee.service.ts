import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:1337/api/tables';  

  constructor(private http: HttpClient) { }

  getEmployeeData(): Observable<any> {
    return this.http.get('http://localhost:1337/api/tables');
  }


  addEmployee(employee: any) {
    return this.http.post('http://localhost:1337/api/tables', { data: employee });
  }
  

  deleteEmployeeData(id: number) {
    return this.http.delete(`http://localhost:1337/api/tables/${id}`);
  }
  

  editEmployeeData(id: number, employee: any) {
    return this.http.put(`http://localhost:1337/api/tables/${id}`, { data: employee });
  }
  
}
