import {Injectable} from "@angular/core";
import {INSTITUICOES} from "./mock-instituicao";
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { api } from './config';
import { Observable } from 'rxjs/Observable';
import { map, catchError,retry } from 'rxjs/operators';
import { Instituicao } from  '../models/instituicao';


//import {throwError } from 'rxjs';

//i//mport { Game } from '../models/game';

@Injectable()
export class InstituicaoService{
  private instituicoes: any;
  private API_URL = 'http://localhost:3000/instituicao';
  url: string;

base_path = 'http://localhost:3000/instituicao';

	constructor(private http: HttpClient) { }

// Get Game data
getAll(): Observable<Instituicao>   {
 
  return this.http
  .get<Instituicao>(this.base_path)
  .pipe(
    retry(2),
    catchError(this.handleError)
  )
   
}


   // return new Promise((resolve, reject) => {

   

    //  return this.http
 //     .get(this.base_path)
     // .pipe(
     //   retry(2),
      //  catchError(this.handleError)
     // )
  // }


   // this.http.get(url)
   //   .subscribe((result: any) => {
    //    resolve(result.json());
    //  },
     // (error) => {
     //   reject(error.json());
     // });
  //});
//}

// Handle API errors
//handleError(error: HttpErrorResponse) {
 // if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
  //  console.error('An error occurred:', error.error.message);
 // } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
   // console.error(
   //   `Backend returned code ${error.status}, ` +
    //  `body was: ${error.error}`);
 // }
  // return an observable with a user-facing error message
 // return throwError('Something bad happened; please try again later.');
//};

// Private

 // getAll() {
//console.log(this.http.get(this.url));

//console.log(this.http.get(this.url).pipe(
    //  map(this.extractData),
    // catchError(this.handleError)
  //  ));
    
 // return this.http.get(this.url).pipe(
  //  map(this.extractData),
   // catchError(this.handleError)
  //);

// return new Promise((resolve, reject) => {

   // let url = this.API_URL;

   // this.http.get(url)
    //  .subscribe((result: any) => {
     //   console.log(result);
     // },
     // (error) => {
     //   reject(error.json());
    //  });
  //});

   
  //  return this.instituicoes;
 // new Promise((resolve, reject) => {
   // let url = this.API_URL;
  //  let url = this.API_URL + 'users/?per_page=10&page=' + page;

 //   this.http.get(url)
     // .subscribe((result: any) => {
     //   console.log(result);
     //   resolve(result.json());
    //  },
    //  (error) => {
     //   reject(error.json());
    //  });
 /// });
  //return null;

  //}


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  private handleError (error: Response | any) {
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
  
  
  getItem(id) {
    for (var i = 0; i < this.instituicoes.length; i++) {
      if (this.instituicoes[i].id === parseInt(id)) {
        return this.instituicoes[i];
      }
    }
    return null;
  }

  remove(item) {
    this.instituicoes.splice(this.instituicoes.indexOf(item), 1);
  }
}
