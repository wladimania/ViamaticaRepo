import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../service/auth/auth.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.loginForm = this.fb.group({
            userName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    onLogin(): void {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value.userName, this.loginForm.value.password)
                .subscribe({
                    next: (response: HttpResponse<any>) => {
                        if (response.ok) {
                            console.log('response', response)

                            this.router.navigate(['/dashboard']).then((navigationResult) => {
                                if (navigationResult) {
                                    console.log('Navigation to dashboard successful. Redirected from:', this.router.url);
                                } else {
                                    console.error('Navigation to dashboard failed');
                                }
                            }).catch((error) => {
                                console.error('Navigation error:', error);
                            });
                        }
                    },
                    error: (error) => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Login Failed',
                            detail: 'Invalid username or password'
                        });
                    }
                });
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Validation Error',
                detail: 'Check your username and password'
            });
        }
    }





    // Redirige al usuario a la página de recuperación de contraseña
    onForgotPassword(): void {
        this.router.navigate(['/recover-password'])
            .then(() => {
                console.log('Redireccionado a la página de recuperación de contraseña');
                this.messageService.add({
                    severity: 'info',
                    summary: '¡Todo está bien!',
                    detail: 'Redireccionado a la página de recuperación de contraseña'
                });
            })
            .catch(err => {
                console.error('Error al redirigir a la página de recuperación de contraseña', err);
                this.messageService.add({
                    severity: 'warn',
                    summary: '¡Tenemos un problema!',
                    detail: 'Error al redirigir a la página de recuperación de contraseña'
                });
            });
    }
}
