import { FuncionarioAdmComponent } from './components/funcionario/funcionario-adm/funcionario-adm.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { NgModule } from '@angular/core';
import { FuncionarioCardComponent } from './components/funcionario/funcionario-card/funcionario-card.component';

const routes: Routes = [
{path:"", component: HomeComponent},
{path:"func-adm", component:FuncionarioAdmComponent},
{path:"cards-func", component:FuncionarioCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingsModule {}
