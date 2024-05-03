import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';

import {ActivatedRoute, Router} from "@angular/router";

import {GlobalGuardsGuard} from "../../../guards/global-guards.guard";

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule
    ],
    declarations: [DocumentationComponent]
})
export class DocumentationModule {}
