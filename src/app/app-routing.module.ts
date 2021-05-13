import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  // Declaramos rutas de la Pagina
  {
    // Ruta que referecia los componentes
    path: '', // Ruta raíz ( https://localhost:4200/)

    // Pasandole el componente que va a usarse en la ruta
    component: HomeComponent,
  },
  {
    path: ':room', // Ruta dinamica, es decir con una variable para hacer referencia a las salas
    component: RoomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
