/**
 * Created by macuser on 6/28/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariohomeComponent } from './usuariohome/usuariohome.component';
import { UsuariolecturasComponent } from './usuariolecturas/usuariolecturas.component';
import { UsuarioprofileComponent } from './usuarioprofile/usuarioprofile.component';
import { UsuariomensajesComponent } from './usuariomensajes/usuariomensajes.component';

const appRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UsuariohomeComponent },
      { path: 'lecturas', component: UsuariolecturasComponent },
      { path: 'mensajes', component: UsuariomensajesComponent },
      { path: 'profile', component: UsuarioprofileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
