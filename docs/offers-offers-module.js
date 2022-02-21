(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item [routerLink]=\"['/', 'places', 'tabs', 'offers', offer.id]\">\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{ offer.title }}</h1>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n      <ion-text color=\"dark\" class=\"space-left\">{{\n        offer.availableFrom | date\n      }}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" class=\"space-left\" color=\"primary\"></ion-icon>\n      <ion-text color=\"dark\" class=\"space-left\">{{\n        offer.availableTo | date\n      }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\">\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <div text-center class=\"mainlogo\">\n      <ion-img class=\"logo\" src=\"https://i.postimg.cc/FspN4R6D/CCALogo.jpg\"></ion-img>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button class=\"dummy\" [disabled]=\"true\">\n      </ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"primary\">\n      <ion-button [disabled]=\"true\"  routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        \n        \n        <ion-list>\n          <div class=\"eventtext\">\n            <ion-text >Upcoming Events</ion-text>\n          </div>\n            \n          \n          \n          <ion-item-sliding *ngFor=\"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <!-- <ion-item-options side=\"end\">\n              <ion-item-option\n                color=\"dark\"\n                (click)=\"onEdit(offer.id, slidingItem)\"\n              >\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options> -->\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-dark);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-dark);\n}\n\n.offer-details {\n  display: flex;\n  align-items: center;\n}\n\n.offer-details .space-left {\n  margin-left: 5px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL0Q6XFxBcHAgU3R1ZmZcXHN0YXRlLTA0LWZpbmlzaGVkL3NyY1xcYXBwXFxwbGFjZXNcXG9mZmVyc1xcb2ZmZXItaXRlbVxcb2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL29mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItaXRlbS9vZmZlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5vZmZlci1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc3BhY2UtbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbiIsImgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4ub2ZmZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub2ZmZXItZGV0YWlscyAuc3BhY2UtbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/*! exports provided: OfferItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function() { return OfferItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../place.model */ "./src/app/places/place.model.ts");
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


var OfferItemComponent = /** @class */ (function () {
    function OfferItemComponent() {
    }
    OfferItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _place_model__WEBPACK_IMPORTED_MODULE_1__["Place"])
    ], OfferItemComponent.prototype, "offer", void 0);
    OfferItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-item',
            template: __importDefault(__webpack_require__(/*! raw-loader!./offer-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./offer-item.component.scss */ "./src/app/places/offers/offer-item/offer-item.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], OfferItemComponent);
    return OfferItemComponent;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-item/offer-item.component */ "./src/app/places/offers/offer-item/offer-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"]
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"], _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_6__["OfferItemComponent"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".eventtext {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL29mZmVycy9EOlxcQXBwIFN0dWZmXFxzdGF0ZS0wNC1maW5pc2hlZC9zcmNcXGFwcFxccGxhY2VzXFxvZmZlcnNcXG9mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnR0ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuZXZlbnR0ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
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



var OffersPage = /** @class */ (function () {
    function OffersPage(placesService, router) {
        this.placesService = placesService;
        this.router = router;
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesSub = this.placesService.places.subscribe(function (places) {
            _this.offers = places;
        });
    };
    OffersPage.prototype.onEdit = function (offerId, slidingItem) {
        slidingItem.close();
        this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
        console.log('Editing item', offerId);
    };
    OffersPage.prototype.ngOnDestroy = function () {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    };
    OffersPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    OffersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers',
            template: __importDefault(__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module.js.map