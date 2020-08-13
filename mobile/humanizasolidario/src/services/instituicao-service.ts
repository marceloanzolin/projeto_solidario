import { Injectable } from "@angular/core";
import { INSTITUICOES } from "./mock-instituicao";
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { api } from './config';
import { Observable } from 'rxjs/Observable';
import { map, catchError, retry } from 'rxjs/operators';
import { Instituicao } from '../models/instituicao';


//import {throwError } from 'rxjs';

//i//mport { Game } from '../models/game';

@Injectable()
export class InstituicaoService {
  private instituicoes: any;
  private API_URL = 'http://localhost:3000/instituicao';
  url: string;

  base_path = 'http://localhost:3000/instituicao';

  constructor(private http: HttpClient) { }

  // Get Game data
  getAll(): Observable<Instituicao> {

    return this.http
      .get<Instituicao>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }


  getItem(id): Observable<Instituicao> {

    return this.http
      .get<Instituicao>('http://localhost:3000/instituicao/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }

  getCampanha(codinstituicao): Observable<Instituicao> {

    return this.http
      .get<Instituicao>('http://localhost:3000/campanha/' + codinstituicao)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }


  remove(item) {
    this.instituicoes.splice(this.instituicoes.indexOf(item), 1);
  }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
