import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, retry } from 'rxjs/operators';
import { Instituicao } from '../models/instituicao';
import { AlertController } from 'ionic-angular';
import { Campanha } from "../models/campanha";
import { Localdoacao } from "../models/localdoacao";

@Injectable()
export class InstituicaoService {
  
  private instituicoes: any;

  private API_URL = 'http://localhost:3000/';
  url: string;

  base_path = 'http://localhost:3000/instituicao';

  constructor(private http: HttpClient, private alertCtrl: AlertController) { }
 

  getAll(): Observable<Instituicao> {

    return this.http
      .get<Instituicao>(this.API_URL+'instituicao')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }


  getItem(id): Observable<Instituicao> {

    return this.http
      .get<Instituicao>(this.API_URL+'instituicao/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }

  getCampanha(codinstituicao): Observable<Instituicao> {

    return this.http
      .get<Instituicao>(this.API_URL+'campanha/' + codinstituicao)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  save(post): Observable<Instituicao> {

    return this.http
      .post<Instituicao>(this.base_path, post.instituicao)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getLocaldoacao(codcampanha): Observable<Localdoacao> {
    return this.http
      .get<Localdoacao>('http://localhost:3000/localdoacao/' + codcampanha)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  login(post): Observable<Instituicao> {
    console.log(post);
    return this.http
      .post<Instituicao>('http://localhost:3000/login', post.instituicao)
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
