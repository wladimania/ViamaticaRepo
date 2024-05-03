import {Component, ViewChild} from '@angular/core';
import {UserDetails} from "../../models/user-details.model";
import {UsermaintenanceService} from "../../service/usermainten/usermaintenance.service";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

    userDetails: UserDetails | null = null;
    idUsuario: number | null = null;
    usersList: UserDetails[] = [];
    loading: boolean = false;

    @ViewChild("dt2") public dt2: any;

    constructor(
        private usermaintenanceService: UsermaintenanceService,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loadUserDetails();
        this.loadUsersList();
    }

    filtrarTabla(event: any) {
        const valor = event.target.value;
        this.dt2.filterGlobal(valor, 'contains');
    }

    loadUserDetails() {
        if (this.authService.sessionExists()) {
            const userInfo = this.authService.getDataUser()!;
            this.userDetails = userInfo[0];
            this.idUsuario = userInfo[1];
        }
    }

    loadUsersList(): void {
        this.loading = true;
        this.usermaintenanceService.getUsuariosList(this.idUsuario!).subscribe(
            (users: UserDetails[]) => {
                users.forEach((user) => {
                    user.sesionActive = user.intentoFallido < 5 ? 'Activo' : 'Bloqueado';
                })
                this.usersList = users;
                this.loading = false;
            },
            error => {
                this.loading = false;
                console.error('Error loading users list', error);
                // Manejar el error aquí si es necesario
            }
        );
    }
}
