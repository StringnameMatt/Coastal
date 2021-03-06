(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["places-places-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"discover\">\n      <ion-label>Home</ion-label>\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button [disabled]=\"true\" tab=\"offers\">\n      <ion-label>Events</ion-label>\n      <ion-icon name=\"ribbon-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button [disabled]=\"true\" tab=\"chat\">\n      <ion-label>Chat</ion-label>\n      <ion-icon name=\"chatbox-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/places/places-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlacesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesRoutingModule", function() { return PlacesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'tabs',
        component: _places_page__WEBPACK_IMPORTED_MODULE_2__["PlacesPage"],
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | discover-discover-module */[__webpack_require__.e("common"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null, /*! ./discover/discover.module */ "./src/app/places/discover/discover.module.ts")).then(function (m) { return m.DiscoverPageModule; }); }
                    },
                    {
                        path: ':placeId',
                        loadChildren: function () { return Promise.all(/*! import() | discover-place-detail-place-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("discover-place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ./discover/place-detail/place-detail.module */ "./src/app/places/discover/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: function () { return Promise.all(/*! import() | offers-offers-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null, /*! ./offers/offers.module */ "./src/app/places/offers/offers.module.ts")).then(function (m) { return m.OffersPageModule; }); }
                    },
                    {
                        path: 'new',
                        loadChildren: function () { return Promise.all(/*! import() | offers-new-offer-new-offer-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-new-offer-new-offer-module")]).then(__webpack_require__.bind(null, /*! ./offers/new-offer/new-offer.module */ "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) { return m.NewOfferPageModule; }); }
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: function () { return Promise.all(/*! import() | offers-edit-offer-edit-offer-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-edit-offer-edit-offer-module")]).then(__webpack_require__.bind(null, /*! ./offers/edit-offer/edit-offer.module */ "./src/app/places/offers/edit-offer/edit-offer.module.ts")).then(function (m) { return m.EditOfferPageModule; }); }
                    },
                    {
                        path: ':placeId',
                        loadChildren: function () { return Promise.all(/*! import() | offers-offer-bookings-offer-bookings-module */[__webpack_require__.e("common"), __webpack_require__.e("offers-offer-bookings-offer-bookings-module")]).then(__webpack_require__.bind(null, /*! ./offers/offer-bookings/offer-bookings.module */ "./src/app/places/offers/offer-bookings/offer-bookings.module.ts")).then(function (m) { return m.OfferBookingsPageModule; }); }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/places/tabs/discover',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    }
];
var PlacesRoutingModule = /** @class */ (function () {
    function PlacesRoutingModule() {
    }
    PlacesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PlacesRoutingModule);
    return PlacesRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/places.module.ts":
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/*! exports provided: PlacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/places/places.page.ts");
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./places-routing.module */ "./src/app/places/places-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlacesPageModule = /** @class */ (function () {
    function PlacesPageModule() {
    }
    PlacesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _places_routing_module__WEBPACK_IMPORTED_MODULE_4__["PlacesRoutingModule"]
            ],
            declarations: [_places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"]]
        })
    ], PlacesPageModule);
    return PlacesPageModule;
}());



/***/ }),

/***/ "./src/app/places/places.page.scss":
/*!*****************************************!*\
  !*** ./src/app/places/places.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/places/places.page.ts":
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/*! exports provided: PlacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPage", function() { return PlacesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
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

var PlacesPage = /** @class */ (function () {
    function PlacesPage() {
    }
    PlacesPage.prototype.ngOnInit = function () {
    };
    PlacesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-places',
            template: __importDefault(__webpack_require__(/*! raw-loader!./places.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/places.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./places.page.scss */ "./src/app/places/places.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesPage);
    return PlacesPage;
}());



/***/ })

}]);
//# sourceMappingURL=places-places-module.js.map