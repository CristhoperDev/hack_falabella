import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {any} from 'codelyzer/util/function';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// const apiUrl = "http://localhost:1337/localhost:3000/api/classroom";
const apiUrl = 'http://c13c1378.ngrok.io/rest/index.php/mostrar/mostrarDatos/';
const apiUrl2 = 'http://c13c1378.ngrok.io/rest/index.php/recomend/recomendDatos';
const apiUrl3 = 'http://c13c1378.ngrok.io/rest/index.php/ranking/rankingDatos';
@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    valueqr: any ;
    value: any;
    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    getClassroom(): Observable<any> {
        return this.http.get(apiUrl, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    getClassroomById(id: string): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    postClassroom(data): Observable<any> {
        const url = `${apiUrl}/add_with_students`;
        return this.http.post(url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateClassroom(id: string, data): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteClassroom(id: string): Observable<{}> {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    detailProduct(id: string): Observable<any> {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    recomendationProduct(id: string): Observable<any> {
        const url = `${apiUrl2}/${id}`;
        return this.http.get(url)
            .pipe(
                catchError(this.handleError)
            );
    }
    rankingProduct(): Observable<any> {
        const url = `${apiUrl3}`;
       // alert(url);
        return this.http.get(url)
            .pipe(
                catchError(this.handleError)
            );
    }
}
