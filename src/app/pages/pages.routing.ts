
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const routes: Routes = [

    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar'} },
            { path: 'graficas1', component: Graficas1Component, data: { title: 'Graficas1'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'AcountSetting '} },
            { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } }

        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],

    exports: [
        RouterModule,
    ]

})
export class PagesRoutingModule {}