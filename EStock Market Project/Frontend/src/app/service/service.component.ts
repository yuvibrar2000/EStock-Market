import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, StockDetail, StockResDetail } from '../model/model.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  addCmpURL: string;
  getCmpURL: string;
  getAllCmpURL: string;
  deleteCmpUrl: string;

  constructor(private http: HttpClient) {
    this.addCmpURL = 'http://localhost:9091/company/register';
    this.getCmpURL = 'http://localhost:9091/company/info'
    this.getAllCmpURL = 'http://localhost:9091/company/getAll';
    this.deleteCmpUrl = 'http://localhost:9091/company/deleteCompanyByCode';
  }

  addCompany(cmp: Company): Observable<Company> {
    return this.http.post<Company>(this.addCmpURL, cmp);

  }

  getCompanyByCode(cmpCode:string): Observable<Company>{
    return this.http.get<Company>(this.getCmpURL+'/'+cmpCode);
  }
  getAllCompany(): Observable<Company[]>{
    return this.http.get<Company[]>(this.getAllCmpURL);
  }
  deletePatient(cmp : Company) : Observable<Company> {
    return this.http.delete<Company>(this.deleteCmpUrl+'/'+cmp.code);
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class StockService{
  getStkURL: string; 
  
  constructor(private http: HttpClient) {
    this.getStkURL = 'http://localhost:9091/stock/get';
  }

  getStockByFromAndTo(stk:StockDetail): Observable<StockResDetail[]> {
    return this.http.get<StockResDetail[]>(this.getStkURL+'/'+stk.code+'/'+stk.from+'/'+stk.to);
  }


  
}
