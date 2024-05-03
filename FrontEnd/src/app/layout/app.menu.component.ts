import {LOCALE_ID, OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth/auth.service";
import {MenuService} from "../../app/layout/app.menu.service";
import {UserDetails} from "../models/user-details.model";
import {registerLocaleData} from "@angular/common";
import localeEs from '@angular/common/locales/es';

interface User {
    idUsuario: number;
    userName: string;
    mail: string;
    personaByPersonaIdPersona2: {
        identificacion: string;
        apellido: string;
        idPersona: number;
        nombres: string;
        fechaNacimiento: string;
    };
    rolUsuariosByIdUsuario: any[];
}

registerLocaleData(localeEs);

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    providers: [
        {provide: LOCALE_ID, useValue: 'es-ES'} // Configura el locale a español de España
    ]
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    usersList: UserDetails[] = [];
    userDetails?: UserDetails;
    userId?: number;

    constructor(public layoutService: LayoutService,
                private accountService: AuthService,
                private router: Router,
                private route: ActivatedRoute,
                private authService: AuthService,
                private menuservice: MenuService) {
    }

    ngOnInit(): void {
        this.model = [];

        if (this.accountService.sessionExists()) {
            const userInfo = this.accountService.getDataUser();
            const userDetails: UserDetails = userInfo![0];
            if (userDetails) {
                this.userDetails = userDetails;
                this.userId = userInfo![1];

                if (this.accountService.isAdmin()) {
                    this.model.push({
                        label: 'Administrador',
                        items: [
                            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard']},
                            {label: 'Lista de Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/user-manager']},
                            // {label: 'Carga Masiva', icon: 'pi pi-fw pi-book', routerLink: ['/user-loader']},
                        ]
                    });
                }

            }



        } else {
            this.accountService.removeAccount();
            this.router.navigateByUrl('/login');
        }
    }

    cerrarSession(): void {
        const idUsuario = this.userId!;
        this.authService.logout(idUsuario).subscribe(
            response => {
                console.log('Logout successful, navigating to login');
                this.router.navigateByUrl('/login').then(success => {
                    console.log('Navigation to login successful:', success);
                }).catch(error => {
                    console.error('Navigation to login failed:', error);
                });
            },
            error => {
                console.error('Error during logout', error);
            }
        );
    }
}
