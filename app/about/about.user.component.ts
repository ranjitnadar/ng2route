import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {User} from '../shared/models/user';

@Component({
	selector:'about-user-page',
	template:`
		<a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
		<div class="jumbotron text-center">
			<div class="profileimg">
				<img [src]="user.avatar" class="img-responsive img-circle">
			</div>
			<div class="user-information">
				<h1>Name:{{user.name}}</h1>
				<h2>Username:{{user.username}}</h2>
			</div>
			
		</div>
	`,
	styles:[`
		.profileimg img{
			width:50%;
			margin:0 auto;
		}
	`]
})

export class AboutUserComponent implements OnInit{
	user:User;
	constructor(
			private route: ActivatedRoute, 
			
			private router:Router
	){

	}
	ngOnInit(){
		let username = this.route.snapshot.params['username'];
		//console.log(username);

		//this.service.getUser(username).then(user => this.user = user);
		this.route.data.forEach((data:{user:User}) => this.user = data.user);
		// this.user = users.find(function(user){
		// 	return user.username === username;
		// });
	}

	goBack(){
		this.router.navigate(['/about']);
		//window.history.back();
	}
}