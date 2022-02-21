(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner/banner.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner/banner.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"bannerImages.length > 0\">\n  <ion-slides pager=\"true\" [options]=\"slideOptions\">\n    <!-- *ngFor=\"let image of bannerImages\" -->\n    <ion-slide >\n      <ion-img [src]=\"model?.restaurant?.cover ? model.restaurant.cover : 'assets/imgs/group.jpg'\"></ion-img>\n      <!-- <div [ngStyle]=\"{'background-image':'url(' + image.banner + ')'}\"></div> -->\n    </ion-slide>\n    <ion-slide >\n      <ion-img [src]=\"model?.restaurant?.cover ? model.restaurant.cover : 'assets/imgs/addy.jpg'\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"white\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\">\n      </ion-menu-button>\n    </ion-buttons>\n   \n          <div text-center class=\"mainlogo\">\n            <ion-img class=\"logo\" src=\"https://i.postimg.cc/FspN4R6D/CCALogo.jpg\"></ion-img>\n          </div>\n        \n          <ion-buttons slot=\"end\">\n            <ion-menu-button class=\"dummy\" [disabled]=\"true\">\n            </ion-menu-button>\n          </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        \n        <p  class=\"quote paragraph\">\"The coach can make you practice. The crowd can cheer you on. But only the desire for success can make you a champion.\"</p>&nbsp;\n              <app-banner [bannerImages]=\"banners\"></app-banner>\n              <!-- <p class=\"ion-padding\" style=\"font-size: 17px;\">We're a non-profit that is looking to bring a new, fun and exciting youth cheerleading program to Lincoln City! We're in the early stages of this process, but during that time if you'd like to keep updated on what's to come, please subscribe below!</p> -->\n\n\n        <div class=\"cards\">\n        <ion-card-content class=\"ion-text-center\">\n          <ion-card class=\"quotecard\">\n              <p class=\"ion-padding\" style=\"font-size: 17px;\">We're a non-profit that is looking to bring a new, fun and exciting youth cheerleading program to Lincoln City! We're in the early stages of this process, but during that time if you'd like to keep updated on what's to come, please subscribe below!</p> \n          </ion-card>\n        </ion-card-content>\n        </div>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <ion-card-content>\n          <div class=\"subscribe\">\n            <ion-card class=\"subcard\">\n            <ion-toolbar style=\"height: 40px;\" color=\"primary\" class=\"ion-text-center\"><ion-text style=\"font-size: 19px;\" color=\"dark\">Subscribe!</ion-text></ion-toolbar>\n            <ion-item color=\"red\">\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input type=\"name\" \n                         ngModel \n                         name=\"name\" \n                         name\n                         color=\"dark\"\n                         \n              ></ion-input>\n            </ion-item>\n            <ion-item color=\"red\">\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" \n                         ngModel \n                         name=\"email\" \n                         email\n                         color=\"dark\"\n                         \n              ></ion-input>\n            </ion-item>\n          \n            <div class=\"ion-text-center\">\n            <ion-button \n              type=\"submit\" \n              color=\"primary\" \n              \n              >\n              \n            Submit\n            </ion-button>\n            </div>   \n          </ion-card>\n          \n          </div> \n        </ion-card-content>\n      </ion-col> \n    </ion-row>\n  </ion-grid>\n     \n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-content class=\"ion-padding\">\n  <ion-item-divider></ion-item-divider>\n  <div class=\"ion-text-center\">\n    <ion-text>Spotlight</ion-text>\n    \n  </div> -->\n  \n  <!-- <ion-segment (ionChange)=\"onFilterUpdate($event)\" value=\"all\">\n    <ion-segment-button value=\"all\">All Places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Places</ion-segment-button>\n  </ion-segment> -->\n  <!-- <ion-grid *ngIf=\"!relevantPlaces || relevantPlaces.length <= 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <p>There are no bookable places right now, please come back later!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle\n              >{{ relevantPlaces[0].price | currency }} /\n              Athlete</ion-card-subtitle\n            >\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ relevantPlaces[0].description }}</p>\n            \n          </ion-card-content>\n          <div>\n            <ion-button\n              fill=\"clear\"\n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'discover',\n                relevantPlaces[0].id\n              ]\"\n            >\n              More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-virtual-scroll\n          [items]=\"listedLoadedPlaces\"\n          approxItemHeight=\"70px\"\n        >\n          <ion-item\n            [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n            detail\n            *virtualItem=\"let place\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n -->");

/***/ }),

/***/ "./src/app/components/banner/banner/banner.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/banner/banner/banner.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background: rgb(194, 250, 250);\n  height: 25vh;\n}\nion-slides ion-slide ion-img {\n  height: 25vh;\n  width: 94%;\n  margin: auto;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyL0Q6XFxBcHAgU3R1ZmZcXHN0YXRlLTA0LWZpbmlzaGVkL3NyY1xcYXBwXFxjb21wb25lbnRzXFxiYW5uZXJcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDTTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDE5NCwgMjUwLCAyNTApO1xyXG4gIGhlaWdodDogMjV2aDtcclxuICBpb24tc2xpZGUge1xyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufSIsImlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IoMTk0LCAyNTAsIDI1MCk7XG4gIGhlaWdodDogMjV2aDtcbn1cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1pbWcge1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/banner/banner/banner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/banner/banner/banner.component.ts ***!
  \**************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.slideOptions = {
            slidesPerView: 1
        };
    }
    BannerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BannerComponent.prototype, "bannerImages", void 0);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/banner/banner/banner.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./banner.component.scss */ "./src/app/components/banner/banner/banner.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");
/* harmony import */ var _components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/banner/banner/banner.component */ "./src/app/components/banner/banner/banner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"], _components_banner_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paragraph {\n  font-family: \"Courier New\", Courier, monospace;\n  text-align: center;\n}\n\n.pic {\n  width: 50%;\n  align-content: center;\n}\n\n.cards {\n  align-content: center;\n}\n\n.quote {\n  font-family: \"Comforter\", cursive;\n  font-family: \"Pacifico\", cursive;\n  font-family: \"Yellowtail\", cursive;\n  font-size: 19px;\n  color: black;\n  padding: 15px;\n  text-align: center;\n}\n\n.subscribe {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border: 2px 2px black;\n}\n\n.subcard {\n  border: 20px;\n}\n\n.quotecard {\n  border-radius: 10px;\n}\n\np {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL0Q6XFxBcHAgU3R1ZmZcXHN0YXRlLTA0LWZpbmlzaGVkL3NyY1xcYXBwXFxwbGFjZXNcXGRpc2NvdmVyXFxkaXNjb3Zlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURHQTtFQUNFLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxpQ0FBQTtFQUNGLGdDQUFBO0VBQ0Esa0NBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREtBO0VBRUUsWUFBQTtBQ0hGOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURXQTtFQUNFLGtCQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvZGlzY292ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFncmFwaCB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waWMge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRlcicsIGN1cnNpdmU7XHJcbmZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xyXG5mb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUge1xyXG4gIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOm1heC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAycHggMnB4IGJsYWNrO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLnN1YmNhcmQge1xyXG4gXHJcbiAgYm9yZGVyOiAyMHB4O1xyXG4gIC8vYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG59XHJcblxyXG4ucXVvdGVjYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gLy9ib3gtc2hhZG93OiAxcHggMnB4IDJweCBncmF5O1xyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIucGFyYWdyYXBoIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5waWMge1xuICB3aWR0aDogNTAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkcyB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnF1b3RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGVyXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCIsIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlllbGxvd3RhaWxcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1YnNjcmliZSB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBib3JkZXI6IDJweCAycHggYmxhY2s7XG59XG5cbi5zdWJjYXJkIHtcbiAgYm9yZGVyOiAyMHB4O1xufVxuXG4ucXVvdGVjYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");
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





var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, menuCtrl, authService, api) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.api = api;
        this.banners = [];
    }
    DiscoverPage.prototype.ngOnInit = function () {
        this.banners = this.api.banners;
        /* this.placesSub = this.placesService.places.subscribe(places => {
          this.loadedPlaces = places;
          this.relevantPlaces = this.loadedPlaces;
          this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }); */
    };
    DiscoverPage.prototype.onOpenMenu = function () {
        this.menuCtrl.toggle();
    };
    DiscoverPage.prototype.onFilterUpdate = function (event) {
        var _this = this;
        if (event.detail.value === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(function (place) { return place.userId !== _this.authService.userId; });
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    };
    DiscoverPage.prototype.ngOnDestroy = function () {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    };
    DiscoverPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    DiscoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __importDefault(__webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
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

var ApiService = /** @class */ (function () {
    function ApiService() {
        this.banners = [
            { banners: 'assets/imgs/addy.jpg' },
            { banners: 'assets/imgs/group.jpg' },
        ];
    }
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map