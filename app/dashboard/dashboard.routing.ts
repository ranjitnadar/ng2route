import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {DashboardUserDetailsComponent} from './users/dashboard-user-details.component';

import {DashboardUsersHomeComponent} from './users/dashboard-users-home.component';
import {DashboardUsersComponent} from './users/dashboard-users.component';

export const dashboardRoutes : Routes = [
	{
		path:'dashboard',
		children:[
			{
				path:'',
				component:DashboardComponent,
			},{
				path:'users',
				component:DashboardUsersComponent,
				children:[
					{
						path:'',
						component:DashboardUsersHomeComponent
					},{
						path:':username',
						component:DashboardUserDetailsComponent
					}
				]
			}
		]
	}
]

export const dashboardRouting:ModuleWithProviders = RouterModule.forChild(dashboardRoutes);