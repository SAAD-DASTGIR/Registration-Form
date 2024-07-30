import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:1337/api/tables'; // api from strapi

  constructor(private http: HttpClient) {} // injecting HTTPCLIENT to use

  getEmployeeData(page: number, pageSize: number): Observable<any> { // loading data
    const params = { // used in endpoint to get paginated data from server
      'pagination[page]': page.toString(), // converting to string
      'pagination[pageSize]': pageSize.toString()
    };
    return this.http.get(this.apiUrl, { params }); // passing params in endpoint
  }

  addEmployee(employee: any) { // data is used because we get data in array of objects
    return this.http.post(this.apiUrl, { data: employee });
  }

  deleteEmployeeData(id: number) { // as strapi produces default ids therefore we take it as number otherwise locally we would use string
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editEmployeeData(id: number, employee: any) {
    return this.http.put(`${this.apiUrl}/${id}`, { data: employee });
  }
}
