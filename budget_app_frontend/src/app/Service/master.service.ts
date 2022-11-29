import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Irasas } from '../Modal/Irasas';

@Injectable({providedIn: 'root'})
export class MasterService {

  private apiurl = environment.apiBaseUrl;
  

  private _refreshrequired = new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {
  }

  GetIrasai(): Observable<Irasas[]> {
    return this.http.get<Irasas[]>(`${this.apiurl}/irasas/all`);
  }

  GetBalansas(): Observable<any> {
    return this.http.get<number>(`${this.apiurl}/irasas/balance`);
  }
  
  GetIrasas(): Observable<Irasas> {
    return this.http.get<Irasas>(`${this.apiurl}/irasas`);
  }
  GetIrasasById(id:any){
    return this.http.get(`${this.apiurl}/irasas/find/${id}`);
  }
  
  // addIrasas(irasas: Irasas): Observable<Irasas> {
  //   return this.http.post<Irasas>(`${this.apiurl}/irasas/add`, irasas);
  // }

  // updateIrasas(irasas: Irasas): Observable<Irasas> {
  //   return this.http.put<Irasas>(`${this.apiurl}/irasas/update`, irasas);
  // }

  deleteIrasas(IrasasId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiurl}/irasas/delete/${IrasasId}`);
  }
  
  Save(inputdata:any){
    return this.http.post(`${this.apiurl}/irasas/add`,inputdata).pipe(
      tap(()=>{
  this.RequiredRefresh.next();
      })
    );
  }

  // Edit(inputdata:any){
  //   return this.http.put(`${this.apiurl}/irasas/update`,inputdata)
  // }

}

