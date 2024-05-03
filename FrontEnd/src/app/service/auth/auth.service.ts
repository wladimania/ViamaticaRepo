import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {Router} from '@angular/router';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Global} from "../../utils/Global";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user.model";
import {UserDetails} from '../../models/user-details.model';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginSuccessSubject = new Subject<UserDetails>();
    private loginUrl = `${environment.apiBaseUrl}/session/login`;
    private logoutUrl = `${environment.apiBaseUrl}/session/logout`;
    private recoverPasswordUrl = `${environment.apiBaseUrl}/session/cambiarContrasena`;

    constructor(private http: HttpClient, private router: Router) {
    }

    cambiarContrasena(email: string, nuevaContrasena: string): Observable<any> {
        const body = {mail: email, nuevaContrasena};
        return this.http.post(this.recoverPasswordUrl, body).pipe(
            catchError(this.handleError)
        );
    }

    login(userName: string, password: string): Observable<HttpResponse<any>> {
        return this.http.post<any>(this.loginUrl, {userName, password}, {observe: 'response'})
            .pipe(
                tap(response => {
                    if (response.status === 200 && response.body) {
                        this.setDataUser(response.body, response.body.idUsuario);
                        this.loginSuccessSubject.next(response.body);
                    }
                }),
                catchError(this.handleError)
            );
    }

    getLoginSuccessSignal(): Observable<UserDetails> {
        return this.loginSuccessSubject.asObservable();
    }

    logout(idUsuario: number | null): Observable<any> {
        if (idUsuario === null) {
            console.error('User ID is null, cannot logout');
            this.router.navigate(['/login']);
            return throwError('User ID is null, cannot logout');
        }
        return this.http.post(this.logoutUrl, {idUsuario}).pipe(
            tap(() => {
                // localStorage.removeItem('idUsuario');
                this.removeAccount();
                this.router.navigate(['/login']);
            }),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
            errorMessage = `Client-side error: ${error.error.message}`;
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
            errorMessage = `Server-side error: ${error.status} ${error.error.message}`;
        }
        return throwError(() => new Error(errorMessage));
    }

    public setDataUser(data: User, userId: number): void {
        if (this.sessionExists()) {
            this.removeAccount();
        }
        localStorage.setItem(environment.userKey, JSON.stringify(data));
        localStorage.setItem(environment.userIdKey, userId.toString());
    }

    public getDataUser(): [UserDetails, number] | null {
        if (this.sessionExists()) {
            const objS = localStorage.getItem(environment.userKey);
            const objid = localStorage.getItem(environment.userIdKey);
            if (!Global.isNullOrUndefined(objS) && !Global.isNullOrUndefined(objid)) {
                return [(JSON.parse(objS!) as UserDetails), Number(objid)];
            }
        }
        return null;
    }

    public sessionExists(): boolean {
        return localStorage.getItem(environment.userKey) !== null && localStorage.getItem(environment.userIdKey) !== null;
    }

    public removeAccount(): void {
        localStorage.removeItem(environment.userKey);
        localStorage.removeItem(environment.userIdKey);
    }

    public isAdmin() {
        const user: UserDetails = this.getDataUser()![0];
        console.log('admin', user);
        let isAdminFlag = false;
        for (const rolUsuario of user?.rolUsuariosByIdUsuario) {
            if (rolUsuario?.rolByRolIdRol?.rolName === "Admin") {
                console.log('admin', true);
                return true;
            }
        }
        console.log('admin', false);
        return false;
    }

}
