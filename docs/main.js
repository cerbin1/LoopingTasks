(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <button class=\"col-md-6 offset-3 btn btn-primary\"\n            (click)=\"chooseOrganizingNotesComponent()\"\n            *ngIf=\"!organizingNotesChose\">\n      {{organizeNotesComponentName}}\n    </button>\n  </div>\n  <app-organize-notes *ngIf=\"organizingNotesChose\"></app-organize-notes>\n  <hr>\n  <div class=\"row\">\n    <button class=\"col-md-6 offset-3 btn btn-primary\"\n            (click)=\"chooseBackupSoftComponent()\"\n            *ngIf=\"!backupSoftChose\">\n      {{backupSoftComponentName}}\n    </button>\n  </div>\n  <app-backup-soft *ngIf=\"backupSoftChose\"></app-backup-soft>\n  <hr>\n  <div class=\"row\">\n    <button class=\"col-md-6 offset-3 btn btn-primary\"\n            (click)=\"chooseBackupHardComponent()\"\n            *ngIf=\"!backupHardChose\">\n      {{backupHardComponentName}}\n    </button>\n  </div>\n  <app-backup-hard *ngIf=\"backupHardChose\"></app-backup-hard>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _organize_notes_organize_notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organize-notes/organize-notes.component */ "./src/app/organize-notes/organize-notes.component.ts");
/* harmony import */ var _backup_soft_backup_soft_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backup-soft/backup-soft.component */ "./src/app/backup-soft/backup-soft.component.ts");
/* harmony import */ var _backup_hard_backup_hard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backup-hard/backup-hard.component */ "./src/app/backup-hard/backup-hard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.organizingNotesChose = false;
        this.organizeNotesComponentName = _organize_notes_organize_notes_component__WEBPACK_IMPORTED_MODULE_1__["OrganizeNotesComponent"].assignmentName;
        this.backupSoftChose = false;
        this.backupSoftComponentName = _backup_soft_backup_soft_component__WEBPACK_IMPORTED_MODULE_2__["BackupSoftComponent"].assignmentName;
        this.backupHardChose = false;
        this.backupHardComponentName = _backup_hard_backup_hard_component__WEBPACK_IMPORTED_MODULE_3__["BackupHardComponent"].assignmentName;
    }
    AppComponent.prototype.chooseOrganizingNotesComponent = function () {
        this.organizingNotesChose = true;
    };
    AppComponent.prototype.chooseBackupSoftComponent = function () {
        this.backupSoftChose = true;
    };
    AppComponent.prototype.chooseBackupHardComponent = function () {
        this.backupHardChose = true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _organize_notes_organize_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organize-notes/organize-notes.component */ "./src/app/organize-notes/organize-notes.component.ts");
/* harmony import */ var _backup_soft_backup_soft_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backup-soft/backup-soft.component */ "./src/app/backup-soft/backup-soft.component.ts");
/* harmony import */ var _backup_hard_backup_hard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backup-hard/backup-hard.component */ "./src/app/backup-hard/backup-hard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _organize_notes_organize_notes_component__WEBPACK_IMPORTED_MODULE_3__["OrganizeNotesComponent"],
                _backup_soft_backup_soft_component__WEBPACK_IMPORTED_MODULE_4__["BackupSoftComponent"],
                _backup_hard_backup_hard_component__WEBPACK_IMPORTED_MODULE_5__["BackupHardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backup-hard/backup-hard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/backup-hard/backup-hard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/backup-hard/backup-hard.component.html":
/*!********************************************************!*\
  !*** ./src/app/backup-hard/backup-hard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-10 offset-1 text-center alert alert-primary\">\n    Links:\n    <br>\n    <a class=\"alert-link\" href=\"https://takeout.google.com/settings/takeout\" target=\"_blank\">Google backup</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"btn-group-vertical col-xl-10 offset-1\">\n    <div class=\"btn\"\n         *ngFor=\"let element of tasksName; let index = index\"\n         (click)=\"changeTaskStatus(index)\"\n         [ngClass]=\"clickedTask[index] ? 'btn-success' : 'btn-danger'\">\n      {{element}}\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <h1 class=\"col-xl-10 offset-1 text-center\"\n      [ngClass]=\"{'text-success':allTasksClicked()}\">\n    {{getTasksCompletionStatus()}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/backup-hard/backup-hard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backup-hard/backup-hard.component.ts ***!
  \******************************************************/
/*! exports provided: BackupHardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupHardComponent", function() { return BackupHardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackupHardComponent = /** @class */ (function () {
    function BackupHardComponent() {
        this.tasksName = ['OneNote whole notebook as doc',
            'Folder Documents (Ubuntu)',
            'Folder Dane (Dysk D)',
            'Chrome Passwords Export',
            'Google Calendar',
            'Google Chrome (all)',
            'Google Contacts',
            'Google Gmail',
            'Google Drive'];
        this.clickedTask = [false, false, false, false, false, false, false, false, false];
    }
    BackupHardComponent.prototype.ngOnInit = function () {
    };
    BackupHardComponent.prototype.changeTaskStatus = function (index) {
        this.clickedTask[index] = !this.clickedTask[index];
    };
    BackupHardComponent.prototype.getNumberOfClickedTasks = function () {
        return this.clickedTask.filter(function (status) { return status === true; }).length;
    };
    BackupHardComponent.prototype.getTasksCompletionStatus = function () {
        return this.getNumberOfClickedTasks() + '/' + this.clickedTask.length;
    };
    BackupHardComponent.prototype.allTasksClicked = function () {
        return this.getNumberOfClickedTasks() === this.clickedTask.length;
    };
    BackupHardComponent.assignmentName = 'Backup Hard';
    BackupHardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backup-hard',
            template: __webpack_require__(/*! ./backup-hard.component.html */ "./src/app/backup-hard/backup-hard.component.html"),
            styles: [__webpack_require__(/*! ./backup-hard.component.css */ "./src/app/backup-hard/backup-hard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackupHardComponent);
    return BackupHardComponent;
}());



/***/ }),

/***/ "./src/app/backup-soft/backup-soft.component.css":
/*!*******************************************************!*\
  !*** ./src/app/backup-soft/backup-soft.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/backup-soft/backup-soft.component.html":
/*!********************************************************!*\
  !*** ./src/app/backup-soft/backup-soft.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-10 offset-1 text-center alert alert-primary\">\n    Links:\n    <br>\n    <a class=\"alert-link\" href=\"https://takeout.google.com/settings/takeout\" target=\"_blank\">Google backup</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"btn-group-vertical col-xl-10 offset-1\">\n    <div class=\"btn\"\n         *ngFor=\"let element of tasksName; let index = index\"\n         (click)=\"changeTaskStatus(index)\"\n         [ngClass]=\"clickedTask[index] ? 'btn-success' : 'btn-danger'\">\n      {{element}}\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <h1 class=\"col-xl-10 offset-1 text-center\"\n      [ngClass]=\"{'text-success':allTasksClicked()}\">\n    {{getTasksCompletionStatus()}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/backup-soft/backup-soft.component.ts":
/*!******************************************************!*\
  !*** ./src/app/backup-soft/backup-soft.component.ts ***!
  \******************************************************/
/*! exports provided: BackupSoftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupSoftComponent", function() { return BackupSoftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackupSoftComponent = /** @class */ (function () {
    function BackupSoftComponent() {
        this.tasksName = ['OneNote Quick',
            'Google Calendar',
            'Google Chrome (Bookmarks)',
            'Google Drive (Notes)'];
        this.clickedTask = [false, false, false, false];
    }
    BackupSoftComponent.prototype.ngOnInit = function () {
    };
    BackupSoftComponent.prototype.changeTaskStatus = function (index) {
        this.clickedTask[index] = !this.clickedTask[index];
    };
    BackupSoftComponent.prototype.getNumberOfClickedTasks = function () {
        return this.clickedTask.filter(function (status) { return status === true; }).length;
    };
    BackupSoftComponent.prototype.getTasksCompletionStatus = function () {
        return this.getNumberOfClickedTasks() + '/' + this.clickedTask.length;
    };
    BackupSoftComponent.prototype.allTasksClicked = function () {
        return this.getNumberOfClickedTasks() === this.clickedTask.length;
    };
    BackupSoftComponent.assignmentName = 'Backup Soft';
    BackupSoftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backup-soft',
            template: __webpack_require__(/*! ./backup-soft.component.html */ "./src/app/backup-soft/backup-soft.component.html"),
            styles: [__webpack_require__(/*! ./backup-soft.component.css */ "./src/app/backup-soft/backup-soft.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackupSoftComponent);
    return BackupSoftComponent;
}());



/***/ }),

/***/ "./src/app/organize-notes/organize-notes.component.css":
/*!*************************************************************!*\
  !*** ./src/app/organize-notes/organize-notes.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/organize-notes/organize-notes.component.html":
/*!**************************************************************!*\
  !*** ./src/app/organize-notes/organize-notes.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"btn-group-vertical col-xl-10 offset-1\">\n    <div class=\"btn\"\n         *ngFor=\"let element of tasksName; let index = index\"\n         (click)=\"changeTaskStatus(index)\"\n         [ngClass]=\"clickedTask[index] ? 'btn-success' : 'btn-danger'\">\n      {{element}}\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <h1 class=\"col-xl-10 offset-1 text-center\"\n      [ngClass]=\"{'text-success':allTasksClicked()}\">\n    {{getTasksCompletionStatus()}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/organize-notes/organize-notes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/organize-notes/organize-notes.component.ts ***!
  \************************************************************/
/*! exports provided: OrganizeNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizeNotesComponent", function() { return OrganizeNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganizeNotesComponent = /** @class */ (function () {
    function OrganizeNotesComponent() {
        this.tasksName = ['Onenote Temp', 'Telefon Chrome', 'Telefon notatki', 'Todoist Skrzynka odbiorcza'];
        this.clickedTask = [false, false, false, false];
    }
    OrganizeNotesComponent.prototype.ngOnInit = function () {
    };
    OrganizeNotesComponent.prototype.changeTaskStatus = function (index) {
        this.clickedTask[index] = !this.clickedTask[index];
    };
    OrganizeNotesComponent.prototype.getNumberOfClickedTasks = function () {
        return this.clickedTask.filter(function (status) { return status === true; }).length;
    };
    OrganizeNotesComponent.prototype.getTasksCompletionStatus = function () {
        return this.getNumberOfClickedTasks() + '/' + this.clickedTask.length;
    };
    OrganizeNotesComponent.prototype.allTasksClicked = function () {
        return this.getNumberOfClickedTasks() === this.clickedTask.length;
    };
    OrganizeNotesComponent.assignmentName = 'Organizing Notes';
    OrganizeNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organize-notes',
            template: __webpack_require__(/*! ./organize-notes.component.html */ "./src/app/organize-notes/organize-notes.component.html"),
            styles: [__webpack_require__(/*! ./organize-notes.component.css */ "./src/app/organize-notes/organize-notes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizeNotesComponent);
    return OrganizeNotesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bartek/WebstormProjects/LoopingTasks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map