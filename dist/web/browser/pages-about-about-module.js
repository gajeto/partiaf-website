(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");





const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_top_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/top/top.component */ "./src/app/components/top/top.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AboutComponent {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
        this.document.body.style.background = 'rgba(0, 0, 0)';
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 60, vars: 1, consts: [[3, "color"], [1, "header"], [1, "row"], [1, "col", "mt-lg-5", "mt-md-5", "mt-xl-5"], [1, "jumbotron", "shadow-dark", "jumbotron-fluid", "mt-lg-5", "mt-md-5", "mt-xl-5", "mt-5", "pt-5"], [1, "container"], [1, "col-md-6"], [1, "display-4", "header-text"], [1, "about-text"], [1, "channel"], [1, "jumbotron", "jumbotron-fluid", "mt-lg-5", "mt-md-5", "mt-xl-5", "mt-5", "pt-5", "pb-5", "p-5"], [1, "col-md-7"], [1, "pay"], [1, "col-md-12", "text-center"], [1, "content-icons"], ["alt", "partiaf credit", "src", "../../../assets/images/credit_icon.png", "alt", "", 1, "icon"], ["alt", "partiaf debit", "src", "../../../assets/images/card_icon.png", "alt", "", 1, "icon"], ["alt", "partiaf pse", "src", "../../../assets/images/pse_icon.png", "alt", "", 1, "icon"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-top", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " MISI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Mejorar la seguridad y facilitar la gesti\u00F3n del proceso de compra y venta masiva de fiestas y eventos.\nSeguridad \u201Cgarantizamos un ambiente psicol\u00F3gicamente seguro, escuchamos tus ideas\u201D. Sensibilidad ambiental \u201Cconsideraci\u00F3n y compasi\u00F3n a los problemas ambientales, tenemos acciones voluntarias a favor del medio ambiente\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " VISI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Mejorar la seguridad y facilitar la gesti\u00F3n del proceso de compra y venta masiva de fiestas y eventos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " CANALES DE DISTRIBUCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Nuestros clientes y usuarios podr\u00E1n adquirir nuestra App descarg\u00E1ndola desde la Play Store para Android y App Store para Apple de forma Gratuita. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " METODOS DE PAGO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "white");
    } }, directives: [_components_top_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  background-image: url('background_about.png');\n  width: 100%;\n  background-color: black;\n  margin-top: -9em;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: black !important;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background: none;\n  margin: 0;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .header-little-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  font-size: 1em;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2em;\n  line-height: 1.8em;\n}\n\n.shadow-dark[_ngcontent-%COMP%] {\n  background: black;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);\n}\n\n.header-text[_ngcontent-%COMP%] {\n  color: #ebc74e;\n  font-weight: 400;\n  margin-top: 3em;\n  font-size: 4.5vh;\n}\n\n.header-text-oficial[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #ebc74e;\n  margin-top: 4em;\n  font-size: 1.5em;\n}\n\n.channel[_ngcontent-%COMP%] {\n  background-color: white;\n  background: white;\n}\n\n.channel[_ngcontent-%COMP%]   .header-little-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  font-size: 1em;\n}\n\n.channel[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  color: #5f5f64;\n  font-size: 1.2em;\n  line-height: 1.8em;\n}\n\n.pay[_ngcontent-%COMP%]   .header-little-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 2em;\n  font-size: 1em;\n}\n\n.pay[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2em;\n  line-height: 1.8em;\n}\n\n.pay[_ngcontent-%COMP%]   .content-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin-top: 5em;\n}\n\n.pay[_ngcontent-%COMP%]   .content-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 8em;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxHVVNUQVZPSkVSRVpcXFZpZGVvc1xcd2Vic2l0ZS9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNILGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0REOztBRElBO0VBQ0MsY0FBQTtFQUNHLGVBQUE7QUNESjs7QURJQTtFQUNJLGtDQUFBO0FDREo7O0FESUE7RUFDQyxnQkFBQTtFQUNHLFNBQUE7QUNESjs7QURJSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FETUE7RUFDSSxpQkFBQTtFQUNBLG9FQUFBO0FDSEo7O0FETUE7RUFDQyxjQUFBO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0gsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hEOztBRE9BO0VBRUksdUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRE1JO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE1JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURXSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNSUjs7QURVSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUlI7O0FEV0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNUUjs7QURVUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9hYm91dC5wbmcnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0bWFyZ2luLXRvcDogLTllbTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5yb3d7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uanVtYm90cm9ueyAgICBcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuXHJcbiAgICAuaGVhZGVyLWxpdHRsZS10ZXh0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogXHQxZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGV4dHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaGFkb3ctZGFya3tcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMCAwIDAgLyAwJSkgMCUsIHJnYigwIDAgMCkgMTAwJSk7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dHtcclxuXHRjb2xvcjogI2ViYzc0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBmb250LXNpemU6IDQuNXZoO1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQtb2ZpY2lhbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0Y29sb3I6ICNlYmM3NGU7XHJcblx0bWFyZ2luLXRvcDo0ZW07XHJcblx0Zm9udC1zaXplOiBcdDEuNWVtXHJcbn1cclxuXHJcblxyXG4uY2hhbm5lbHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLmhlYWRlci1saXR0bGUtdGV4dHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOjFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjJlbTtcclxuICAgICAgICBmb250LXNpemU6IFx0MWVtO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXRleHR7XHJcbiAgICAgICAgY29sb3I6IHJnYig5NSA5NSAxMDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnBheXtcclxuXHJcbiAgICAuaGVhZGVyLWxpdHRsZS10ZXh0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogXHQxZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGV4dHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtaWNvbnN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgaGVpZ2h0OiA4ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9hYm91dC5wbmdcIik7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogLTllbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLmp1bWJvdHJvbiAuaGVhZGVyLWxpdHRsZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uanVtYm90cm9uIC5hYm91dC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG5cbi5zaGFkb3ctZGFyayB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCBibGFjayAxMDAlKTtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgY29sb3I6ICNlYmM3NGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgZm9udC1zaXplOiA0LjV2aDtcbn1cblxuLmhlYWRlci10ZXh0LW9maWNpYWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ViYzc0ZTtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY2hhbm5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jaGFubmVsIC5oZWFkZXItbGl0dGxlLXRleHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5jaGFubmVsIC5hYm91dC10ZXh0IHtcbiAgY29sb3I6ICM1ZjVmNjQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cblxuLnBheSAuaGVhZGVyLWxpdHRsZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ucGF5IC5hYm91dC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG4ucGF5IC5jb250ZW50LWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cbi5wYXkgLmNvbnRlbnQtaWNvbnMgLmljb24ge1xuICBoZWlnaHQ6IDhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/top/top.module */ "./src/app/components/top/top.module.ts");
/* harmony import */ var src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/social-bar/social-bar.module */ "./src/app/components/social-bar/social-bar.module.ts");
/* harmony import */ var src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");









class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
            src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
        src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_components_top_top_module__WEBPACK_IMPORTED_MODULE_5__["TopModule"],
                    src_app_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                    src_app_components_social_bar_social_bar_module__WEBPACK_IMPORTED_MODULE_6__["SocialBarModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
                ],
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map