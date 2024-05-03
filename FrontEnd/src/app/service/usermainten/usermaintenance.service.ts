import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetails} from "../../models/user-details.model";

@Injectable({
  providedIn: 'root'
})
export class UsermaintenanceService {
    private usuariosUrl = `${environment.apiBaseUrl}/usuarios/admin/usuarios`;
    private crearurl = `${environment.apiBaseUrl}/usuarios`;
    constructor(private http: HttpClient) { }
    getUsuariosList(idUsuario: number): Observable<UserDetails[]> {
        const url = `${this.usuariosUrl}/${idUsuario}`;
        return this.http.post<UserDetails[]>(url,{});
    }
    createUser(usuario: UserDetails): Observable<any> {
        return this.http.post<any>(this.crearurl + '/crear', usuario);
    }
    createUsers(usuarios: UserDetails[]): Observable<any> {
        return this.http.post<any>(`${this.crearurl}/crear-multiples`, usuarios);
    }

}
