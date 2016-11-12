import {Component} from '@angular/core';

@Component({
	moduleId:module.id,
	selector:'home-page',
	template:`
		<div class="jumbotron text-center">
		  <h1>Welcome to {{page}}</h1>
		</div>
	`
})

export class HomeComponent{
	page ='Home';
}