import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { HomeComponent } from './componentes/home/home.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { MasComponent } from './componentes/mas/mas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteTecnicoComponent } from './componentes/soporte-tecnico/soporte-tecnico.component';

@NgModule({
  declarations: [AccederComponent, HomeComponent, AccesoriosComponent, CategoriasComponent, MasComponent, RegistroComponent, SoporteTecnicoComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
