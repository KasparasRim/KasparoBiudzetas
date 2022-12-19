import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Irasas } from '../Modal/Irasas';
import { Tipas } from '../Modal/Tipas';

@Injectable({providedIn: 'root'})
export class MasterService {

  private apiurl = environment.apiBaseUrl;
  

  private _refreshrequired = new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private http: HttpClient) {
  }

  // public getTemplateData(start:number,limit:number):Observable<any>{
  //   return this.http.post(`${this.apiurl}/irasas/TemplateData`,{
  //     startIndex:start,
  //     pageLimit:limit
  //   });
  // }

  GetIrasai(): Observable<Irasas[]> {
    return this.http.get<Irasas[]>(`${this.apiurl}/irasas/all`);
  }

  GetTipai(): Observable<Tipas[]> {
    return this.http.get<Tipas[]>(`${this.apiurl}/tipas/all`);
  }

  // GetBalansas(): Observable<any> {
  //   return this.http.get<number>(`${this.apiurl}/irasas/balance`);
  // }
  
  GetIrasas(): Observable<Irasas> {
    return this.http.get<Irasas>(`${this.apiurl}/irasas`);
    
  }

  GetTipas(): Observable<Tipas> {
    return this.http.get<Tipas>(`${this.apiurl}/tipas`);
    
  }
  GetIrasasById(id:any){
    return this.http.get(`${this.apiurl}/irasas/find/${id}`);
  }

  GetTipasById(id:any){
    return this.http.get(`${this.apiurl}/tipas/find/${id}`);
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

  deleteTipas(TipasId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/tipas/delete/${TipasId}`);
}
  
  Save(inputdata:any){
    return this.http.post(`${this.apiurl}/irasas/add`,inputdata).pipe(
      tap(()=>{
  this.RequiredRefresh.next();
      })
    );
  }

  Save2(inputdata:any){
    return this.http.post(`${this.apiurl}/tipas/add`,inputdata).pipe(
      tap(()=>{
  this.RequiredRefresh.next();
      })
    );
  }

  // Edit(inputdata:any){
  //   return this.http.put(`${this.apiurl}/tipas/update`,inputdata)
  // }

}

