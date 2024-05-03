import {Component, OnInit, ViewChild} from '@angular/core';
import {UserDetails} from "../../models/user-details.model";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {UsermaintenanceService} from "../../service/usermainten/usermaintenance.service";
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-usermaintenance',
    templateUrl: './usermaintenance.component.html',
    styleUrls: ['./usermaintenance.component.scss']
})
export class UsermaintenanceComponent implements OnInit {
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
    handleFileInput(file: File): void {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
            jsonData.forEach((row: any) => {
                if (row.length === 0) {
                    console.log("Fila vacía, saltando...");
                    return;
                }
                console.log("Fila actual:", row);
                const usuario: UserDetails = {
                    userName: row[0],
                    mail: row[1],
                    password: row[2],
                    status: row[3],
                    intentoFallido: row[4],
                    personaByPersonaIdPersona2: {
                        identificacion: row[5],
                        apellido: row[6],
                        nombres: row[7],
                        idPersona: 0,
                        fechaNacimiento: row[8]
                    }
                } as UserDetails;

                this.createUser(usuario);
            });
        };
        reader.readAsArrayBuffer(file);
    }
    createUser(usuario: UserDetails): void {
        this.usermaintenanceService.createUser(usuario).subscribe(
            response => {
                console.log('Usuario creado exitosamente:', response);
                // Agrega esta línea para imprimir el usuario creado en la consola
                console.log(usuario);
            },
            error => {
                console.error('Error al crear el usuario:', error);
            }
        );
    }

    onUpload(event: any) {
        const file = event.files[0];
        if (file) {
            this.handleFileInput(file);
        }
    }
}
