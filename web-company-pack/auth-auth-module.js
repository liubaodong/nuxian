(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/pages/auth/auth.module.ts":
/*!***************************************!*\
  !*** ./src/pages/auth/auth.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/pages/auth/login/login.component.ts");
var register_component_1 = __webpack_require__(/*! ./register/register.component */ "./src/pages/auth/register/register.component.ts");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'login',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent
                    }
                ])
            ],
            declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/pages/auth/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/pages/auth/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <div class=\"login-con row\">\n    <div class=\"col login-left\">\n      <!--<div class=\"row left-con\">-->\n        <!--<div class=\"col col-auto\">-->\n          <!--<img src=\"assets/img/logo-w.png\" alt=\"\">-->\n        <!--</div>-->\n      <!--</div>-->\n      <img src=\"assets/img/logo-w.png\" alt=\"\">\n\n    </div>\n    <div class=\"col login-right\">\n      <span *ngIf=\" togo === 0\" class=\"zh\" (click)=\" togo=1;\">账号登录</span>\n      <!--<span *ngIf=\" togo === 1\" class=\"zh\" (click)=\" togo=0;\">二维码登录</span>-->\n      <div *ngIf='togo === 1'>\n        <div class=\"title\">机构登录</div>\n        <form action=\"\">\n          <input class=\"row\" type=\"text\" name=\"username\" placeholder=\"请输入手机号/账号\" [(ngModel)]=\"username\">\n          <input class=\"row\" type=\"password\" name=\"password\" placeholder=\"请输入密码\" [(ngModel)]=\"password\">\n          <!--<input *ngIf = 'mobile === 1' class=\"row\" type=\"text\" placeholder=\"请输入验证码\">-->\n        </form>\n        <div class=\"row bet\"><span class=\"pho\">短信验证码登录</span> <span class=\"forget\">忘记密码？</span></div>\n        <button mat-button class=\"btnd\" (click)=\"login()\">登录</button>\n      </div>\n      <div class=\"row qr\" *ngIf='togo === 0'>\n        <img src=\"assets/img/f_code.png\" alt=\"失败\">\n      </div>\n      <div class=\"c9\">注册即代表同意《沐贤协议》《隐私政策》</div>\n      <!--<div class=\"c8\" (click)=\"goRegister()\">注册机构号</div>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/auth/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/pages/auth/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\napp-login .login {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0 auto;\n  background: url('bg.png'); }\napp-login .login .login-con {\n    width: 800px;\n    flex-wrap: nowrap;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\napp-login .login .login-con .title {\n      text-align: center;\n      font-size: 1.5rem;\n      padding: 10px 0;\n      color: #7e8fbc; }\napp-login .login .login-con .login-left {\n      display: flex;\n      color: #fff;\n      font-weight: 600;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(to bottom right, #9db5dc, #49577d);\n      opacity: 0.9; }\napp-login .login .login-con .login-left img {\n        width: 200px; }\napp-login .login .login-con .login-left .fir, app-login .login .login-con .login-left .sec {\n        width: 100%; }\napp-login .login .login-con .login-left .left-con {\n        justify-content: center;\n        align-items: center;\n        width: 100%; }\napp-login .login .login-con .login-right {\n      padding: 10% 6%;\n      background: #fff;\n      position: relative; }\napp-login .login .login-con .login-right span {\n        display: inline-flex; }\napp-login .login .login-con .login-right .zh {\n        position: absolute;\n        right: -6px;\n        -webkit-transform: rotateZ(45deg);\n                transform: rotateZ(45deg);\n        top: 18px;\n        color: #7e8fbc;\n        cursor: pointer; }\napp-login .login .login-con .login-right .jg {\n        padding: 20px;\n        color: #7e8fbc;\n        text-align: center; }\napp-login .login .login-con .login-right .qr {\n        position: relative;\n        justify-content: center;\n        align-items: center;\n        padding: 35px 0 91px 0; }\napp-login .login .login-con .login-right .qr::after {\n          content: '请使用手机扫码登录';\n          position: absolute;\n          bottom: 40px;\n          color: #333;\n          font-size: 14px; }\napp-login .login .login-con .login-right .bet {\n        justify-content: space-between; }\napp-login .login .login-con .login-right input {\n        border: 0;\n        margin-bottom: 20px;\n        border-bottom: 1px solid #999999;\n        width: 100%; }\napp-login .login .login-con .login-right .pho {\n        color: #999999; }\napp-login .login .login-con .login-right .forget {\n        color: #7e8fbc; }\napp-login .login .login-con .login-right .btnd {\n        width: 100%;\n        margin: 40px 0;\n        background: #7e8fbc;\n        color: #fff; }\napp-login .login .login-con .login-right .c9 {\n        color: #999999; }\napp-login .login .login-con .login-right .c8 {\n        text-align: center;\n        color: #7e8fbc; }\n"

/***/ }),

/***/ "./src/pages/auth/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/pages/auth/login/login.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.togo = 1;
        this.username = 'ceping';
        this.password = 'ql12345678';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.username, this.password).then(function (resp) {
            _this.snackBar.open('登录成功', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.router.navigate(['project-management']);
        }).catch(function (err) {
            console.log(err);
            if (err && err.msg) {
                _this.snackBar.open(err.msg, '', {
                    duration: 2000,
                    verticalPosition: 'top'
                });
            }
        });
    };
    LoginComponent.prototype.goRegister = function () {
        this.router.navigate(['/auth/register']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/auth/login/login.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            material_1.MatSnackBar])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/pages/auth/register/register.component.html":
/*!*********************************************************!*\
  !*** ./src/pages/auth/register/register.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\">\n  <div class=\"login-con row\">\n    <div class=\"col col-auto login-right\">\n      <div class=\"jg\">注册机构号</div>\n      <div *ngIf='togo === 0'>\n        <form (submit)=\"addSubmit()\" #registerForm='ngForm'>\n          <input class=\"row\" type=\"text\" name=\"userName\"\n                 [(ngModel)]='forms.userName' #userName=\"ngModel\"\n                 placeholder=\"请输入手机号/账号\" required>\n          <span [hidden]=\"forms.pasword || forms.pasword\" class=\"red\">账号/手机号不能为空</span>\n          <input class=\"row\" type=\"password\" name=\"password\"\n                 [(ngModel)]='forms.pasword' #Password='ngModel'\n                 placeholder=\"请输入密码\">\n          <input class=\"row\" type=\"password\"\n                 [(ngModel)]='forms.doublePasword' name=\"doublePasword\" #DoubulePassword='ngModel'\n                 placeholder=\"请再次输入密码\">\n          <span class=\"red\" [hidden]='forms.pasword === forms.doublePasword'>两次密码不正确</span>\n          <input type=\"text\" placeholder=\"公司名称\"\n                 [(ngModel)]='forms.company' name=\"company\" #Company='ngModel'\n          >\n          <span class=\"red\" [hidden]='forms.company'>请填写公司</span>\n          <input type=\"text\" placeholder=\"姓名\">\n          <input type=\"text\" placeholder=\"电话\">\n          <div class=\"yy\">上传营业执照</div>\n          <div class=\"file\">\n            <img src=\"assets/img/add.png\" alt=\"\">\n            <input type=\"file\">\n          </div>\n          <button mat-button class=\"btnd\">注册等待审核</button>\n        </form>\n\n      </div>\n      <div class=\"c9\">注册即代表同意《沐贤协议》《隐私政策》</div>\n      <div class=\"c8\" (click)=\"goLogin()\"><span class=\"c9\">已有账号？</span> <span class=\"c8\">登录</span></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/auth/register/register.component.scss":
/*!*********************************************************!*\
  !*** ./src/pages/auth/register/register.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\napp-register .register {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0 auto;\n  background: url('bg.png'); }\napp-register .register .login-con {\n    flex-wrap: nowrap;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\napp-register .register .login-con .login-right {\n      max-width: 460px;\n      padding: 40px;\n      background: #fff;\n      position: relative; }\napp-register .register .login-con .login-right span {\n        display: inline-flex; }\napp-register .register .login-con .login-right .red {\n        color: red;\n        border: 1px solid red;\n        border-radius: 6px;\n        padding: 2px 5px; }\napp-register .register .login-con .login-right .zh {\n        position: absolute;\n        right: -6px;\n        -webkit-transform: rotateZ(45deg);\n                transform: rotateZ(45deg);\n        top: 18px;\n        color: #7e8fbc; }\napp-register .register .login-con .login-right .jg {\n        padding: 15px;\n        color: #7e8fbc;\n        text-align: center; }\napp-register .register .login-con .login-right .qr {\n        position: relative;\n        justify-content: center;\n        align-items: center;\n        padding: 35px 0 91px 0; }\napp-register .register .login-con .login-right .qr::after {\n          content: '请使用手机扫码登录';\n          position: absolute;\n          bottom: 40px;\n          color: #333;\n          font-size: 14px; }\napp-register .register .login-con .login-right .bet {\n        justify-content: space-between; }\napp-register .register .login-con .login-right input {\n        border: 0;\n        margin-bottom: 20px;\n        border-bottom: 1px solid #999999;\n        width: 100%; }\napp-register .register .login-con .login-right .btnd {\n        width: 100%;\n        margin: 20px 0;\n        background: #7e8fbc;\n        color: #fff; }\napp-register .register .login-con .login-right .yy {\n        color: #a9a9a9; }\napp-register .register .login-con .login-right .file {\n        position: relative;\n        margin-top: 10px;\n        width: 80px;\n        height: 80px;\n        border-radius: 6px;\n        border: 1px dashed #7e8fbc; }\napp-register .register .login-con .login-right .file img {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\napp-register .register .login-con .login-right .file input {\n          opacity: 0;\n          position: absolute;\n          height: 80px; }\napp-register .register .login-con .login-right .c9 {\n        color: #999999; }\napp-register .register .login-con .login-right .c8 {\n        cursor: pointer;\n        text-align: center;\n        color: #7e8fbc; }\n"

/***/ }),

/***/ "./src/pages/auth/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/pages/auth/register/register.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.togo = 0;
        this.forms = {
            userName: '测试',
            pasword: '123456',
            doublePasword: '123456',
            company: '青龙智能',
            realname: '刘',
            phone: '17853592055'
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.addSubmit = function () {
        // console.log('register', this.forms);
    };
    RegisterComponent.prototype.goLogin = function () {
        this.router.navigate(['/auth/login']);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/auth/register/register.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map