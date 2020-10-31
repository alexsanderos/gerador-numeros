import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeradorPaginaComponent } from './gerador/gerador-pagina/gerador-pagina.component';

const routes: Routes = [{
  path: 'gerador',
  component: GeradorPaginaComponent
},
{
  path: '',
  redirectTo: 'gerador',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
