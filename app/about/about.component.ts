import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {User} from '../shared/models/user';

@Component({
	
	selector:'about-page',
	template:`
		<div class="jumbotron text-center">
		  <h1>Welcome to {{page}}</h1>
		</div>
		<div class="row">
			<div class="col-sm-4" *ngFor="let user of users">
				<div class="profile-card" [routerLink]="['/about', user.username]">
					<img [src]="user.avatar" class="img-responsive img-circle">
					<h2>{{user.name}}</h2>
					<a href="#">{{user.username}}</a>
				</div>
			</div>
		</div>
		{{msg}}
	`,
	styles:[`
	 .profile-card   {
		cursor:pointer;
		background: #f3f3f3;
		border-radius: 4px;
		padding: 30px;
		text-align: center;
		margin-bottom:20px;
    }
    .profile-card img  {
      max-width: 50%;
      margin: 15px auto;
    }
    `]
})

export class AboutComponent{
	page = 'About';


	users: User[];
	constructor(private route:ActivatedRoute){

	}

	ngOnInit(){
		//this.service.getUsers().then(users => this.users = users);

		this.route.data.forEach((data:{users:User[]}) => this.users = data.users);
	}
}