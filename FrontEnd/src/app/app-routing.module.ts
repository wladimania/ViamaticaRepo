import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { GlobalGuardsGuard } from './guards/global-guards.guard';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { RecoverPasswordComponent } from './views/recover-password/recover-password.component';
import {UsermaintenanceComponent} from "./views/usermaintenance/usermaintenance.component";
import {MasiveChargeComponent} from "./views/masive-charge/masive-charge.component";
import {WelcomeComponent} from "./views/welcome/welcome.component";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: AppLayoutComponent,
        canActivate: [GlobalGuardsGuard],
        children: [
            { path: 'dashboard', component: WelcomeComponent },
            { path: 'recover-password', component: RecoverPasswordComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: 'user-manager', component: UsermaintenanceComponent },
            // { path: 'user-loader', component: MasiveChargeComponent },
            { path: '**', redirectTo: 'notfound' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
