import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Cambiar fechas a español
import { registerLocaleData } from '@angular/common'
import localeES from '@angular/common/locales/es'
registerLocaleData(localeES, 'es')

import { AppComponent } from './app.component';
import { RutasRoutingModule } from './app-routing.module'

import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { ReactiveFormsModule } from '@angular/forms'
 
import { environment } from 'src/environments/environment'
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    ReactiveFormsModule,
    
    // StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
