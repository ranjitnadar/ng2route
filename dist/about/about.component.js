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
var router_1 = require('@angular/router');
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
        this.page = 'About';
    }
    AboutComponent.prototype.ngOnInit = function () {
        //this.service.getUsers().then(users => this.users = users);
        var _this = this;
        this.route.data.forEach(function (data) { return _this.users = data.users; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-page',
            template: "\n\t\t<div class=\"jumbotron text-center\">\n\t\t  <h1>Welcome to {{page}}</h1>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\" *ngFor=\"let user of users\">\n\t\t\t\t<div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n\t\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t\t\t\t<h2>{{user.name}}</h2>\n\t\t\t\t\t<a href=\"#\">{{user.username}}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t{{msg}}\n\t",
            styles: ["\n\t .profile-card   {\n\t\tcursor:pointer;\n\t\tbackground: #f3f3f3;\n\t\tborder-radius: 4px;\n\t\tpadding: 30px;\n\t\ttext-align: center;\n\t\tmargin-bottom:20px;\n    }\n    .profile-card img  {\n      max-width: 50%;\n      margin: 15px auto;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map