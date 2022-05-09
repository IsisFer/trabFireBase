import { FuncionarioListaComponent } from './components/funcionario/funcionario-lista/funcionario-lista.component';
import { FuncionarioFormComponent } from './components/funcionario/funcionario-form/funcionario-form.component';
import { FuncionarioAdmComponent } from './components/funcionario/funcionario-adm/funcionario-adm.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/templates/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingsModule } from './app-routing.module';
import { FuncionarioCardComponent } from './components/funcionario/funcionario-card/funcionario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionarioAdmComponent,
    FuncionarioFormComponent,
    FuncionarioListaComponent,
    MainNavComponent,
    FuncionarioCardComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AppRoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
