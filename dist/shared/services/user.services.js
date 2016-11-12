"use strict";
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
;
var UserSevice = (function () {
    function UserSevice() {
    }
    UserSevice.prototype.getusers = function () {
        return usersPromise;
    };
    UserSevice.prototype.getuser = function (username) {
        var user = usersPromise.then(function (users) {
            return users.find(function (user) {
                return user.username === username;
            });
        });
    };
    return UserSevice;
}());
exports.UserSevice = UserSevice;
//# sourceMappingURL=user.services.js.map