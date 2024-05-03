import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuChangeEvent } from './api/menuchangeevent';
import { Observable, throwError } from 'rxjs';
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { catchError, tap } from 'rxjs/operators';
import {UserDetails} from "../models/user-details.model";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private usuariosUrl = `${environment.apiBaseUrl}/usuarios/admin/usuarios`;
    private logoutUrl = `${environment.apiBaseUrl}/session/logout`;
    private menuSource = new Subject<MenuChangeEvent>();
    private resetSource = new Subject();
    constructor(private http: HttpClient, private router: Router) {}
    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
    logout(idUsuario: number | null): Observable<any> {
        if (idUsuario === null) {
            console.error('User ID is null, cannot logout');
            this.router.navigate(['/login']);
            return throwError('User ID is null, cannot logout');
        }
        return this.http.post(this.logoutUrl, { idUsuario }).pipe(
            tap(() => {
                localStorage.removeItem('idUsuario');
                this.router.navigate(['/login']);
            }),
            catchError(this.handleError)
        );
    }
    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            console.error('An error occurred:', error.error.message);
            errorMessage = `Client-side error: ${error.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
            errorMessage = `Server-side error: ${error.status} ${error.error.message}`;
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error(errorMessage));
    }

}
