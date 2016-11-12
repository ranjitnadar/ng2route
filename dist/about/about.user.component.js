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
var AboutUserComponent = (function () {
    function AboutUserComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var username = this.route.snapshot.params['username'];
        //console.log(username);
        //this.service.getUser(username).then(user => this.user = user);
        this.route.data.forEach(function (data) { return _this.user = data.user; });
        // this.user = users.find(function(user){
        // 	return user.username === username;
        // });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
        //window.history.back();
    };
    AboutUserComponent = __decorate([
        core_1.Component({
            selector: 'about-user-page',
            template: "\n\t\t<a (click)=\"goBack()\" class=\"btn btn-sm btn-info\">Go Back</a>\n\t\t<div class=\"jumbotron text-center\">\n\t\t\t<div class=\"profileimg\">\n\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t\t</div>\n\t\t\t<div class=\"user-information\">\n\t\t\t\t<h1>Name:{{user.name}}</h1>\n\t\t\t\t<h2>Username:{{user.username}}</h2>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t",
            styles: ["\n\t\t.profileimg img{\n\t\t\twidth:50%;\n\t\t\tmargin:0 auto;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], AboutUserComponent);
    return AboutUserComponent;
}());
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about.user.component.js.map