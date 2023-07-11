import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosComponent } from './utl/alumnos/alumnos.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './utl/agregar/agregar.component';
import { EditarComponent } from './utl/editar/editar.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from './utl/alumnos-filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MenuComponent,
    HomeComponent,
    AgregarComponent,
    AlumnoFilterPipe,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
