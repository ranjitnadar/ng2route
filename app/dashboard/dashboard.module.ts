import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import {dashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';
import {DashboardUserDetailsComponent} from './users/dashboard-user-details.component';
import {DashboardUsersHomeComponent} from './users/dashboard-users-home.component';
import {DashboardUsersComponent} from './users/dashboard-users.component';
@NgModule({
	imports:[
		dashboardRouting,
		CommonModule
	],
	declarations:[
		DashboardComponent,
		DashboardUserDetailsComponent,
		DashboardUsersHomeComponent,
		DashboardUsersComponent
	],
	providers:[
		
	]
})

export class DashboardModule {}