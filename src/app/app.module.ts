import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Rutas Principales
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    RouterModule,
  ],
  
  
  bootstrap: [AppComponent]
})


export class AppModule { }
