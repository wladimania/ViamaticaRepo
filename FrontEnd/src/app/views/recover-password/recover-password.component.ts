import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss'],
    providers: [DialogService, MessageService]
})
export class RecoverPasswordComponent {

    showPassword = false;

    public recoverForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private messageService: MessageService) {
    }

    onSubmitRecover(): void {
        const email = this.recoverForm.get('email')?.value;
        const newPassword = this.recoverForm.get('newPassword')?.value;

        if (email && newPassword && this.recoverForm.valid) {
            this.authService.cambiarContrasena(email, newPassword).subscribe({
                next: (response: any) => {
                    console.log('Contraseña actualizada correctamente.', response);
                    // alert('Tu contraseña ha sido actualizada correctamente.');
                    this.messageService.add({
                        severity: 'success',
                        summary: '¡Todo bien!',
                        detail: 'Tu contraseña ha sido actualizada correctamente.'
                    });
                },
                error: (error: any) => {
                    console.error('Error:', error);
                    // alert('Error al cambiar la contraseña. Por favor, verifica los datos e intenta de nuevo.');
                    this.messageService.add({
                        severity: 'error',
                        summary: '¡Hubo un problema!',
                        detail: 'Error al cambiar la contraseña. Por favor, verifica los datos e intenta de nuevo.' + error?.error?.text
                    });
                }
            });
        } else {
            // alert('Por favor, asegúrate de que todos los campos están correctamente llenados y validados.');
            this.messageService.add({
                severity: 'warn',
                summary: '¡Hubo un problema!',
                detail: 'Por favor, asegúrate de que todos los campos están correctamente llenados y validados.'
            });
        }
    }
}
