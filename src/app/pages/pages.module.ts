import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    ChartsModule
  ]
})

export class PagesModule { }
