import {Injectable} from '@angular/core';

import {User} from '../models/user';


const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id:1,
		name:'Ranjit',
		username:'ranjitnadar',
		avatar:'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-afro-guy.png'	
	},
	{
		id:2,
		name:'Rapper',
		username:'Yobuddy',
		avatar:'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rapper-guy.png'	
	},
	{
		id:3,
		name:'Wolf',
		username:'dearwolf',
		avatar:'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-bad-werewolf.png'	
	},
	{
		id:4,
		name:'Sam Doe',
		username:'sam',
		avatar:'https://cdn3.f-cdn.com/ppic/4596980/logo/3703140/59593_448873375179894_887317911_n.jpg'	
	},
	{
		id:5,
		name:'Mr.Deer',
		username:'deerme',
		avatar:'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png'	
	},
	{
		id:6,
		name:'Cute',
		username:'cuteangle',
		avatar:'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png'	
	}	
]);

@Injectable()

export class UserService {
	getUsers(){
		return usersPromise;
	}

	getUser(username){
		return usersPromise.then(users => users.find(user => user.username === username));
	}
}