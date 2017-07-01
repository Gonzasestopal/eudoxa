import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsuariohomeComponent } from './usuariohome/usuariohome.component';
import { UsuariolecturasComponent } from './usuariolecturas/usuariolecturas.component';

import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { BarraComponent } from './barra/barra.component';
import { HomeComponent } from './home/home.component';
import { UsuariobarraComponent } from './usuariobarra/usuariobarra.component';
import { UsuariomensajesComponent } from './usuariomensajes/usuariomensajes.component';
import { UsuarioprofileComponent } from './usuarioprofile/usuarioprofile.component';

import { ServerService } from './server.service';
import { UsuariofooterComponent } from './usuariofooter/usuariofooter.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariohomeComponent,
    UsuariolecturasComponent,
    UsuarioComponent,
    BarraComponent,
    HomeComponent,
    UsuariobarraComponent,
    UsuariomensajesComponent,
    UsuarioprofileComponent,
    UsuariofooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
