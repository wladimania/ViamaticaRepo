import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Global} from "../utils/Global";
import {AuthService} from "../service/auth/auth.service";
import {User} from "../models/user.model";
import {UserDetails} from "../models/user-details.model";
@Injectable({
    providedIn: 'root'
})
export class GlobalGuardsGuard implements CanActivate {
    constructor(private router: Router,
                private accountService: AuthService) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.accountService.sessionExists()) {
            const storagedData: [UserDetails, number] = this.accountService.getDataUser()!;
            const user: UserDetails = storagedData[0];
            // Aquí puedes agregar la lógica de validación de accesos
            if (this.validateAccess(user)) {
                return true;
            } else {
                // Redirigir al usuario a una página de acceso no autorizado
                return this.router.parseUrl('/unauthorized');
            }
        } else {
            // Redirigir al usuario a la página de inicio de sesión
            return this.router.parseUrl('/login');
        }
    }
    private validateAccess(user: UserDetails): boolean {
        // return !!user.rolUsuariosByIdUsuario.rolByRolIdRol.rolName
        //     && user.rolUsuariosByIdUsuario.rolByRolIdRol.rolName.includes('admin');
        return true;
    }
}
