(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-offer-new-offer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Event</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Date Start</ion-label>\n            <ion-datetime\n              min=\"2019-01-01\"\n              max=\"2025-12-31\"\n              formControlName=\"dateFrom\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Date End</ion-label>\n            <ion-datetime\n              min=\"2019-01-02\"\n              max=\"2025-12-31\"\n              formControlName=\"dateTo\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
  \*************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/places/offers/new-offer/new-offer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]
    }
];
var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/offers/new-offer/new-offer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
  \***********************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NewOfferPage = /** @class */ (function () {
    function NewOfferPage(placesService, router, loadingCtrl) {
        this.placesService = placesService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
    }
    NewOfferPage.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(180)]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]
            }),
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
        });
    };
    NewOfferPage.prototype.onCreateOffer = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl
            .create({
            message: 'Creating event...'
        })
            .then(function (loadingEl) {
            loadingEl.present();
            _this.placesService
                .addPlace(_this.form.value.title, _this.form.value.description, +_this.form.value.price, new Date(_this.form.value.dateFrom), new Date(_this.form.value.dateTo))
                .subscribe(function () {
                loadingEl.dismiss();
                _this.form.reset();
                _this.router.navigate(['/places/tabs/offers']);
            });
        });
    };
    NewOfferPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    NewOfferPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-offer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/places/offers/new-offer/new-offer.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], NewOfferPage);
    return NewOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-new-offer-new-offer-module.js.map