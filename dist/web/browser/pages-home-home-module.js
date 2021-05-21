(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_top_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/top/top.component */ "./src/app/components/top/top.component.ts");
/* harmony import */ var _components_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/social-bar/social-bar.component */ "./src/app/components/social-bar/social-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");







class HomeComponent {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
        this.document.body.style.background = 'rgba(0, 0, 0)';
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 53, vars: 2, consts: [[3, "color"], [1, "header"], [1, "jumbotron", "jumbotron-fluid"], [1, "container"], [1, "display-4", "header-text"], [1, "header-text-oficial"], [1, "row", "social-bar"], [1, "col"], [1, "row", "text-center"], [1, "col-12", "header-text-oficial"], [1, "col-12", "header-little-text"], [1, "cover"], [1, "row"], [1, "col", "mt-lg-5", "mt-md-5", "mt-xl-5"], [1, "col-md-5", "mt-5"], [1, "col-md-7", "mt-5", "bg-white"], [1, "cover-title", "pay"], [1, "col-12", "cover-title"], [1, "without"], [1, "separator", "mt-5"], [1, "options", "mt-4"], [1, "about-text", "mt-5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " CONCIERTOS EXCLUSIVOS, RUMBA, RAVE O PARTIES TU DECIDES! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " DESCARGA NUESTRA APP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-social-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " WWW.PARTIAF.COM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Copyright 2020 \u00A9 All rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "PAGA COVER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "SIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "CAJEROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "FILAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "EFECTIVO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Somos un equipo multidisciplinario de profesionales expertos en hacer los procesos, interacciones, relaciones y tareas diarias de las personas mas sencillas; facilitar y minimizar los pasos para conseguir lo que desean nuestros clientes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "oficial");
    } }, directives: [_components_top_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"], _components_social_bar_social_bar_component__WEBPACK_IMPORTED_MODULE_3__["SocialBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('background_header.png');\n  width: 100%;\n  background-color: black;\n  margin-top: -9em;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.header[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  background: none;\n  padding-top: 2em;\n  margin: 0;\n  background-color: #00000094 !important;\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  margin-top: 3em;\n  font-size: 7vh;\n}\n.header[_ngcontent-%COMP%]   .header-text-oficial[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #ebc74e;\n  margin-top: 4em;\n  font-size: 1.5em;\n}\n.header[_ngcontent-%COMP%]   .header-little-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  font-size: 1em;\n}\n.row[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: black !important;\n}\n.cover[_ngcontent-%COMP%] {\n  background-color: white;\n  background: white;\n  background-image: url('background_cover.png');\n  background-position: 38% 20%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.cover[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.cover[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.cover[_ngcontent-%COMP%]   .header-little-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  font-size: 1em;\n}\n.cover[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  color: #5f5f64;\n  font-size: 1.2em;\n}\n.cover[_ngcontent-%COMP%]   .cover-title.pay[_ngcontent-%COMP%] {\n  color: #5f5f64;\n  font-size: 5em;\n  line-height: 1em;\n}\n.cover[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%]   .without[_ngcontent-%COMP%] {\n  color: #5f5f64;\n  font-size: 10em;\n  float: left;\n  line-height: 0.7em;\n  margin-top: 0.2em;\n}\n.cover[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: #ebc74e;\n  font-size: 11em;\n  float: left;\n  line-height: 0.7em;\n  font-weight: 100;\n}\n.cover[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #5f5f64;\n  font-size: 3em;\n  line-height: 1.35em;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXEdVU1RBVk9KRVJFWlxcVmlkZW9zXFx3ZWJzaXRlL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDSCxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDRDtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FETUE7RUFDQyxjQUFBO0VBQ0csZUFBQTtBQ0hKO0FETUE7RUFDSSxrQ0FBQTtBQ0hKO0FETUE7RUFFSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNKSjtBREtJO0VBQ0kscUJBQUE7QUNIUjtBRElRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0ZaO0FES0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSFI7QURLSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0hSO0FET1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTFo7QURPUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNMWjtBRE9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xaO0FET1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2hlYWRlci5wbmcnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0bWFyZ2luLXRvcDogLTllbTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgLmp1bWJvdHJvbnsgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlci10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgICAgICBmb250LXNpemU6IDd2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlci10ZXh0LW9maWNpYWx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogI2ViYzc0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOjRlbTtcclxuICAgICAgICBmb250LXNpemU6IFx0MS41ZW1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlci1saXR0bGUtdGV4dHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOjFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjJlbTtcclxuICAgICAgICBmb250LXNpemU6IFx0MWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm93e1xyXG5cdG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdmVye1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfY292ZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzOCUgMjAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAuanVtYm90cm9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItbGl0dGxlLXRleHR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiBcdDFlbTtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiByZ2IoOTUgOTUgMTAwKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3Zlci10aXRsZXtcclxuICAgICAgICAmLnBheXtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZjVmNjQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud2l0aG91dHtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZjVmNjQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXBhcmF0b3J7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWJjNzRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExZW07XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC43ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpb25ze1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBjb2xvcjogIzVmNWY2NDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1ZW07XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaGVhZGVyLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAtOWVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmhlYWRlciAuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy10b3A6IDJlbTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTQgIWltcG9ydGFudDtcbn1cbi5oZWFkZXIgLmhlYWRlci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGZvbnQtc2l6ZTogN3ZoO1xufVxuLmhlYWRlciAuaGVhZGVyLXRleHQtb2ZpY2lhbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZWJjNzRlO1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uaGVhZGVyIC5oZWFkZXItbGl0dGxlLXRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uY292ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9jb3Zlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDM4JSAyMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uY292ZXIgLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5jb3ZlciAuanVtYm90cm9uIC5jb250YWluZXIge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNvdmVyIC5oZWFkZXItbGl0dGxlLXRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5jb3ZlciAuYWJvdXQtdGV4dCB7XG4gIGNvbG9yOiAjNWY1ZjY0O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmNvdmVyIC5jb3Zlci10aXRsZS5wYXkge1xuICBjb2xvcjogIzVmNWY2NDtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG4uY292ZXIgLmNvdmVyLXRpdGxlIC53aXRob3V0IHtcbiAgY29sb3I6ICM1ZjVmNjQ7XG4gIGZvbnQtc2l6ZTogMTBlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgbWFyZ2luLXRvcDogMC4yZW07XG59XG4uY292ZXIgLmNvdmVyLXRpdGxlIC5zZXBhcmF0b3Ige1xuICBjb2xvcjogI2ViYzc0ZTtcbiAgZm9udC1zaXplOiAxMWVtO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNvdmVyIC5jb3Zlci10aXRsZSAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjNWY1ZjY0O1xuICBmb250LXNpemU6IDNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzVlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/top/top.module */ "./src/app/components/top/top.module.ts");
/* harmony import */ var src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/social-bar/social-bar.module */ "./src/app/components/social-bar/social-bar.module.ts");
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
        src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
                    src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                    src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                ],
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map