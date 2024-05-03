import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, HashLocationStrategy, LocationStrategy, NgIf} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {StyleClassModule} from "primeng/styleclass";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {TagModule} from "primeng/tag";
import {MessageModule} from "primeng/message";
import {PasswordModule} from "primeng/password";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MessagesModule} from "primeng/messages";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import { RecoverPasswordComponent } from './views/recover-password/recover-password.component';
import { LoginComponent } from './views/login/login.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { UsermaintenanceComponent } from './views/usermaintenance/usermaintenance.component';
import { MasiveChargeComponent } from './views/masive-charge/masive-charge.component';
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, RecoverPasswordComponent, LoginComponent, WelcomeComponent, UsermaintenanceComponent, MasiveChargeComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ButtonModule,
        DividerModule,
        StyleClassModule,
        PanelModule,
        DropdownModule,
        FormsModule,
        NgIf,
        RippleModule,
        CardModule,
        TableModule,
        ToastModule,
        TagModule,
        MessageModule,
        PasswordModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        MessagesModule,
        ConfirmDialogModule,
        CheckboxModule,
        DialogModule,
        ReactiveFormsModule,
        CommonModule,
        ToolbarModule,
        FileUploadModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, DatePipe, FormsModule, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
