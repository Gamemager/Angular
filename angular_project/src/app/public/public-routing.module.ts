import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { MasComponent } from './componentes/mas/mas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteTecnicoComponent } from './componentes/soporte-tecnico/soporte-tecnico.component';

const routes: Routes = [
  { path: '', redirectTo: '/public/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'acceder', component: AccederComponent },
  { path: 'accesorios', component: AccesoriosComponent}, 
  { path: 'categorias', component: CategoriasComponent},
  { path: 'mas', component: MasComponent},
  { path: 'registro', component: RegistroComponent},
  {path: 'soporte_tecnico', component: SoporteTecnicoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
