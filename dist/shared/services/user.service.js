"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usersPromise = Promise.resolve([
    {
        id: 1,
        name: 'Ranjit',
        username: 'ranjitnadar',
        avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-afro-guy.png'
    },
    {
        id: 2,
        name: 'Rapper',
        username: 'Yobuddy',
        avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-rapper-guy.png'
    },
    {
        id: 3,
        name: 'Wolf',
        username: 'dearwolf',
        avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-bad-werewolf.png'
    },
    {
        id: 4,
        name: 'Sam Doe',
        username: 'sam',
        avatar: 'https://cdn3.f-cdn.com/ppic/4596980/logo/3703140/59593_448873375179894_887317911_n.jpg'
    },
    {
        id: 5,
        name: 'Mr.Deer',
        username: 'deerme',
        avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png'
    },
    {
        id: 6,
        name: 'Cute',
        username: 'cuteangle',
        avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map