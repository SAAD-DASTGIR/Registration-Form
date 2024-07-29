import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:1337/api/tables';

  constructor(private http: HttpClient) {}

  getEmployeeData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addEmployee(employee: any) {
    return this.http.post(this.apiUrl, { data: employee });
  }

  deleteEmployeeData(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editEmployeeData(id: number, employee: any) {
    return this.http.put(`${this.apiUrl}/${id}`, { data: employee });
  }
}
