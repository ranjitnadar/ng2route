import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {appRouting} from './app.routing';


import {DashboardModule} from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ 
	  BrowserModule,
	  FormsModule,
	  appRouting,
	  DashboardModule
   ],
  declarations: [
	  AppComponent,
	  HomeComponent,
	  ContactComponent,
	  NotFoundComponent
   ],
  providers:[],
  bootstrap: [ AppComponent ]
})
export class AppModule {}