import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:1337/api/tables'; // endpoint from strapi

  constructor(private http: HttpClient) {} // use HTTPCLIENT module

  getEmployeeData(page: number, pageSize: number, sortField: string, sortOrder: string, filterValue: string): Observable<any> {
    let params = new HttpParams()
      .set('pagination[page]', page.toString()) // convert in order to use it in endpoint
      .set('pagination[pageSize]', pageSize.toString());

    if (sortField && sortOrder) { // asc/des + first, lastname
      params = params.set('sort', `${sortField}:${sortOrder}`);
    }

    if (filterValue) { // value from input as key and value pair
      params = params.set('filters[$or][0][first_name][$containsi]', filterValue)
                     .set('filters[$or][1][last_name][$containsi]', filterValue);
    }

    return this.http.get(this.apiUrl, { params }); // inject params into endpoint
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
