import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDetails} from "../../models/user-details.model";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = `${environment.apiBaseUrl}/users`; // URL to web api

    private usuariosUrl = `${environment.apiBaseUrl}/usuarios/admin/usuarios`;
    private crearurl = `${environment.apiBaseUrl}/usuarios`;

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }

    // Method for generating and verifying unique emails
    generateEmail(firstName: string, lastName: string): string {
        return `${firstName}.${lastName}@mail.com`;
    }

    getUsuariosList(idUsuario: number): Observable<UserDetails[]> {
        const url = `${this.usuariosUrl}/${idUsuario}`;
        return this.http.post<UserDetails[]>(url, {});
    }

    createUser(usuario: UserDetails): Observable<any> {
        return this.http.post<any>(this.crearurl + '/crear', usuario);
    }
}
