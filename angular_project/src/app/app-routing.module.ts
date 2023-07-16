import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public/public.module';

const routes: Routes = [
  { path: '', redirectTo: '/public/home', pathMatch: 'full' },
  { path: 'public', loadChildren: () => PublicModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
