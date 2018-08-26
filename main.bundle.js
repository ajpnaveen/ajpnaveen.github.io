webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".logo-float{\r\n\tposition:fixed;\r\n\theight:80px;\r\n\ttop:30px;\r\n    left:0px;\r\n    z-index: 10;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<nav class=\"navbar navbar-default\">\r\n<!--<div class=\"container-fluid\">\r\n <a href=\"\" class=\"navbar brand logo-float\"><img src=\"assets/images/PrimeScource.png\"></a>\r\n</div>\r\n-->\r\n</nav>\r\n<div class=\"container-fluid\">\r\n <app-map-view></app-map-view>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Prime Source Technologies, LLC';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_renderer_service__ = __webpack_require__("./src/app/services/renderer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_scrollbar__ = __webpack_require__("./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_draggable__ = __webpack_require__("./node_modules/angular2-draggable/angular2-draggable.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_map_map_view_component__ = __webpack_require__("./src/app/components/map/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_map_icon_header_icon_header_component__ = __webpack_require__("./src/app/components/map/icon-header/icon-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_map_info_template_info_template_component__ = __webpack_require__("./src/app/components/map/info-template/info-template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_map_pipeline_details_pipeline_details_component__ = __webpack_require__("./src/app/components/map/pipeline-details/pipeline-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_map_legend_legend_component__ = __webpack_require__("./src/app/components/map/legend/legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_map_table_of_contents_table_of_contents_component__ = __webpack_require__("./src/app/components/map/table-of-contents/table-of-contents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_pipeline_service__ = __webpack_require__("./src/app/services/pipeline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_map_usertable_usertable_component__ = __webpack_require__("./src/app/components/map/usertable/usertable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_map_pipeline_datatable_pipeline_datatable_component__ = __webpack_require__("./src/app/components/map/pipeline-datatable/pipeline-datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_map_map_view_component__["a" /* MapViewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_map_icon_header_icon_header_component__["a" /* IconHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_map_info_template_info_template_component__["a" /* InfoTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_map_pipeline_details_pipeline_details_component__["a" /* PipelineDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_map_legend_legend_component__["a" /* LegendComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_table_of_contents_table_of_contents_component__["a" /* TableOfContentsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_map_usertable_usertable_component__["a" /* UsertableComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_map_pipeline_datatable_pipeline_datatable_component__["a" /* PipelineDatatableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_cdk_table__["q" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__["b" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_scrollbar__["a" /* ScrollbarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__services_global_data_service__["a" /* GlobalDataService */], __WEBPACK_IMPORTED_MODULE_19__services_pipeline_service__["a" /* PipelineService */], __WEBPACK_IMPORTED_MODULE_22__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_renderer_service__["a" /* RendererService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/map/icon-header/icon-header.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding-left: 35px;\r\n\tmargin-bottom: 12px;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: #eee;\r\n\tborder-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n\tbackground-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n\tbackground-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n}\r\n/* #rcorners4 {\r\n\ttop: 3px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 20px;\r\n\theight: 450px;\r\n\tright: 90px;\r\n} */\r\n#rcorners4 {\r\n\ttop: 3px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 20px;\r\n}\r\nlabel {\r\n\tcolor: yellow;\r\n\tfont-family: \"Times New Roman\";\r\n\topacity: 1;\r\n}\r\n.panel-header-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: bold;\r\n\tfont-size: 90%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: bold;\r\n\tfont-size: 90%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-scale ul {\r\n\tmargin: 0;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 0;\r\n\tfloat: left;\r\n\tlist-style: none;\r\n}\r\n.my-legend .legend-scale ul li {\r\n\tfont-size: 80%;\r\n\tlist-style: none;\r\n\tmargin-left: 0;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 2px;\r\n\tcolor: yellow;\r\n}\r\n.my-legend ul.legend-labels li span {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\theight: 16px;\r\n\twidth: 30px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0;\r\n\topacity: 1;\r\n}\r\n.my-legend .legend-source {\r\n\tfont-size: 70%;\r\n\tcolor: yellow;\r\n\tclear: both;\r\n}\r\n.my-legend a {\r\n\tcolor: yellow;\r\n}\r\nbody {\r\n    background-color: #444;\r\n\tmargin: 0;\r\n\tz-index: 10;\r\n}\r\n#wrapper {\r\n     width: 1005px;\r\n\t margin: 0 auto;\r\n\t z-index: 10;\r\n}\r\n#leftcolumn, #rightcolumn {\r\n    border: 1px solid white;\r\n    float: left;\r\n    min-height: 450px;\r\n\tcolor: white;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn {\r\n     width: 250px;\r\n\t background-color: #111;\r\n\t z-index: 10;\r\n}\r\n#rightcolumn {\r\n     width: 750px;\r\n\t background-color: #777;\r\n\t z-index: 10;\r\n}\r\nli {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; /* allows align-items to work below */\r\n\t-webkit-box-pack: left;\r\n\t    -ms-flex-pack: left;\r\n\t        justify-content: left; /* Horizontally centers single-line elements */\r\n\ttext-align:center; /* Horizontally centers text within line-wrapped elements */\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center; /* vertical */\r\n  }"

/***/ }),

/***/ "./src/app/components/map/icon-header/icon-header.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container-fluid col-lg-1 col-md-1 col-sm-1 col-xs-1\" style=\"float:right\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<img src=\"assets/images/layers1.png\" alt=\"Layers Icon\" title=\"Layers Selection\" style=\"width:24px;height:24px;float:right\" (click)=\"layersFunc()\">\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<img src=\"assets/images/pipelinetable.png\" alt=\"Pipeline details table Icon\" title=\"Pipeline Details\" align=\"right\" style=\"width:24px;height:24px; float:right\" (click)=\"pipelineDetailsFunc()\">\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t\t<img src=\"assets/images/legend.png\" alt=\"Legend Icon\" title=\"Legend\" align=\"right\" style=\"width:24px;height:24px; float:right\" (click)=\"legendDisplayFunc()\">\r\n\t\t\t</div>\r\n\t\t<!--<div class=\"row\">\r\n\t\t\t<img src=\"assets/images/configuration.png\" alt=\"HTML5 Icon\" title=\"this will be displayed as a tooltip\" align=\"right\" style=\"width:24px;height:24px; float:right \">\r\n\t\t</div>-->\r\n\t</div>\r\n\r\n\r\n\r\n\t"

/***/ }),

/***/ "./src/app/components/map/icon-header/icon-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconHeaderComponent = /** @class */ (function () {
    function IconHeaderComponent(mapService) {
        this.mapService = mapService;
        this.bDisplayLayersPanel = false;
    }
    IconHeaderComponent.prototype.ngOnInit = function () {
    };
    IconHeaderComponent.prototype.layersFunc = function () {
        if (this.mapService.bTableOfContentsPanel == true)
            this.mapService.bTableOfContentsPanel = false;
        else
            this.mapService.bTableOfContentsPanel = true;
    };
    /*
    closeLayersPanel()
    {
      this.bDisplayLayersPanel = false;
    }
    */
    IconHeaderComponent.prototype.pipelineDetailsFunc = function () {
        if (this.mapService.bPipelineDetailsPanel == true)
            this.mapService.bPipelineDetailsPanel = false;
        else
            this.mapService.bPipelineDetailsPanel = true;
        /*
        if(this.mapService.bPipelineDataTable == true)
        this.mapService.bPipelineDataTable = false;
        else
        this.mapService.bPipelineDataTable = true;
        */
    };
    IconHeaderComponent.prototype.legendDisplayFunc = function () {
        if (this.mapService.bDisplayLegendsPanel == true)
            this.mapService.bDisplayLegendsPanel = false;
        else
            this.mapService.bDisplayLegendsPanel = true;
    };
    IconHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-icon-header',
            template: __webpack_require__("./src/app/components/map/icon-header/icon-header.component.html"),
            styles: [__webpack_require__("./src/app/components/map/icon-header/icon-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], IconHeaderComponent);
    return IconHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/map/info-template/info-template.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding-left: 35px;\r\n\tmargin-bottom: 12px;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: #eee;\r\n\tborder-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n\tbackground-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n\tbackground-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n}\r\n#rcorners4 {\r\n\ttop: 1px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 7px;\r\n}\r\nlabel {\r\n\tcolor: yellow;\r\n\tfont-family: \"Times New Roman\";\r\n\topacity: 1;\r\n}\r\n.panel-header-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: bold;\r\n\tfont-size: 90%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 0px;\r\n\tfont-weight: bold;\r\n\tfont-size: 80%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-scale ul {\r\n\tmargin: 0;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 0;\r\n\tfloat: left;\r\n\tlist-style: none;\r\n}\r\n.my-legend .legend-scale ul li {\r\n\tfont-size: 75%;\r\n\tlist-style: none;\r\n\tmargin-left: 0;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 2px;\r\n\tcolor: yellow;\r\n}\r\n.my-legend ul.legend-labels li span {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\theight: 16px;\r\n\twidth: 30px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0;\r\n\topacity: 1;\r\n\tfont-family: \"Times New Roman\";\r\n}\r\n.my-legend .legend-source {\r\n\tfont-size: 70%;\r\n\tcolor: yellow;\r\n\tclear: both;\r\n}\r\n.my-legend a {\r\n\tcolor: yellow;\r\n}\r\nbody {\r\n    background-color: #444;\r\n\tmargin: 0;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn, #rightcolumn {\r\n    border: 1px solid white;\r\n    float: left;\r\n    min-height: 450px;\r\n\tcolor: white;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn {\r\n     width: 250px;\r\n\t background-color: #111;\r\n\t z-index: 10;\r\n}\r\n#rightcolumn {\r\n     width: 750px;\r\n\t background-color: #777;\r\n\t z-index: 10;\r\n}\r\nli {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; /* allows align-items to work below */\r\n\t-webkit-box-pack: left;\r\n\t    -ms-flex-pack: left;\r\n\t        justify-content: left; /* Horizontally centers single-line elements */\r\n\ttext-align:center; /* Horizontally centers text within line-wrapped elements */\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center; /* vertical */\r\n  }"

/***/ }),

/***/ "./src/app/components/map/info-template/info-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngDraggable class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"mapService.bInfoTemplatePanel\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeInfoTemplatePanel()\">\t<span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"panel-body\">\n      <div class='my-legend'  style=\"cursor: move\">\n        <div class='legend-title'>City Information</div>\n        <div class='legend-scale'>\n          <ul class='legend-labels'>   \n          <li> Name : {{mapService.attrAREANAME}}</li>\n          <li> Population: {{mapService.attrPOP2000}}</li>\n          <li> State: {{mapService.attrST}}</li>\n          <li> Capital: {{mapService.attrCLASS}}</li>\n        </ul>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/map/info-template/info-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoTemplateComponent = /** @class */ (function () {
    function InfoTemplateComponent(mapService) {
        this.mapService = mapService;
    }
    InfoTemplateComponent.prototype.ngOnInit = function () {
    };
    InfoTemplateComponent.prototype.legendsFunc = function () {
        if (this.mapService.bInfoTemplatePanel == true)
            this.mapService.bInfoTemplatePanel = false;
        else
            this.mapService.bInfoTemplatePanel = true;
    };
    InfoTemplateComponent.prototype.closeInfoTemplatePanel = function () {
        this.mapService.bInfoTemplatePanel = false;
        this.mapService.highlightSelectedGraphicsLayer.removeAll();
    };
    InfoTemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-info-template',
            template: __webpack_require__("./src/app/components/map/info-template/info-template.component.html"),
            styles: [__webpack_require__("./src/app/components/map/info-template/info-template.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], InfoTemplateComponent);
    return InfoTemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/map/legend/legend.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding-left: 35px;\r\n\tmargin-bottom: 12px;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: #eee;\r\n\tborder-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n\tbackground-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n\tbackground-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n}\r\n/* #rcorners4 {\r\n\ttop: 3px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 20px;\r\n\theight: 450px;\r\n\tright: 90px;\r\n} */\r\n#rcorners4 {\r\n\ttop: 1px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 7px;\r\n}\r\nlabel {\r\n\tcolor: yellow;\r\n\tfont-family: \"Times New Roman\";\r\n\topacity: 1;\r\n}\r\n.panel-header-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: bold;\r\n\tfont-size: 90%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 5px;\r\n\tfont-weight: bold;\r\n\tfont-size: 80%;\r\n\tcolor: yellow;\r\n}\r\n.my-legend .legend-scale ul {\r\n\tmargin: 0;\r\n\tmargin-bottom: 0px;\r\n\tpadding: 0;\r\n\tfloat: left;\r\n\tlist-style: none;\r\n}\r\n.my-legend .legend-scale ul li {\r\n\tfont-size: 75%;\r\n\tlist-style: none;\r\n\tmargin-left: 0;\r\n\tline-height: 18px;\r\n\tmargin-bottom: 0px;\r\n\tcolor: yellow;\r\n}\r\n.my-legend ul.legend-labels li span {\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\theight: 16px;\r\n\twidth: 30px;\r\n\tmargin-right: 5px;\r\n\tmargin-left: 0;\r\n\topacity: 1;\r\n}\r\n.my-legend .legend-source {\r\n\tfont-size: 70%;\r\n\tcolor: yellow;\r\n\tclear: both;\r\n}\r\n.my-legend a {\r\n\tcolor: yellow;\r\n}\r\nbody {\r\n    background-color: #444;\r\n\tmargin: 0;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn, #rightcolumn {\r\n    border: 1px solid white;\r\n    float: left;\r\n    min-height: 450px;\r\n\tcolor: white;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn {\r\n     width: 250px;\r\n\t background-color: #111;\r\n\t z-index: 10;\r\n}\r\n#rightcolumn {\r\n     width: 750px;\r\n\t background-color: #777;\r\n\t z-index: 10;\r\n}\r\nli {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex; /* allows align-items to work below */\r\n\t-webkit-box-pack: left;\r\n\t    -ms-flex-pack: left;\r\n\t        justify-content: left; /* Horizontally centers single-line elements */\r\n\ttext-align:center; /* Horizontally centers text within line-wrapped elements */\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center; /* vertical */\r\n  }"

/***/ }),

/***/ "./src/app/components/map/legend/legend.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngDraggable>\n    <!--\n<div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"(mapService.legendLayer=='H2S PPM' || mapService.legendLayer=='Synthesized Risk' || mapService.legendLayer=='CO2 Mole Percentage') && mapService.bDisplayLegendsPanel\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeLegendsPanel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"panel-body\">\n            <div class='my-legend' style=\"cursor: move\">\n                <div class='legend-title'>Legend ({{mapService.legendLayer}})</div>\n                <div class='legend-scale'>\n                    <ul class='legend-labels'>\n                        <li>\n                            <span style='background:#FF0000; height:4px; width:90px; text-align: center;'></span>{{mapService.legendLayerSevere}}</li>\n                        <li>\n                            <span style='background:#FF8000; height:4px; width:90px;'></span>{{mapService.legendLayerHigh}}</li>\n                        <li>\n                            <span style='background:#FFFF33; height:4px; width:90px;'></span>{{mapService.lgendLayerModerate}}</li>\n                        <li>\n                            <span style='background:#90EE90; height:4px; width:90px;'></span>{{mapService.lgendLayerLowModerate}}</li>\n                        <li>\n                            <span style='background:#008000; height:4px; width:90px;'></span>{{mapService.lgendLayerLow}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n-->\n    <div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"(mapService.legendLayer=='Sulfate Reducing Bact.' || mapService.legendLayer=='Acid Producing Bact.' || 'Leak History' || 'Cost History' || 'ROF' || 'COF' || 'Leak History' || 'ENV Weight' || 'Public Safety' || 'PIG_WRF' || 'H2S Weights' || 'CO2 Weights') && mapService.bDisplayLegendsPanel\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeLegendsPanel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"panel-body\">\n            <div class='my-legend' style=\"cursor: move\">\n                <div class='legend-title'>Cities Legend</div>\n                <div class='legend-scale'>\n                    <ul class='legend-labels'>\n                        <li>\n                            <span style='background:#0082c8; height:16px; width:16px; text-align: center;'></span>NY</li>\n                        <li>\n                            <span style='background:#e6194b;  height:16px; width:16px;'></span>CA</li>\n                        <li>\n                            <span style='background:#ffe119;  height:16px; width:16px;'></span>MD</li>\n                        <li>\n                                <span style='background:#f58231;  height:16px; width:16px;'></span>WA</li>\n                        <li>\n                                    <span style='background:#911eb4;  height:16px; width:16px;'></span>VA</li>   \n                                    <li>\n                                        <span style='background:#f032e6;  height:16px; width:16px;'></span>TX</li>  \n                                        <li>\n                                            <span style='background:#d2f53c;  height:16px; width:16px;'></span>NJ</li>  \n                                            <li>\n                                                <span style='background:#800000;  height:16px; width:16px;'></span>WV</li>  \n                                                <li>\n                                                    <span style='background:#9b9b9b;  height:16px; width:16px;'></span>Otr.</li>                                                                                                                                                                                                                                 \n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--\n    <div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"(mapService.legendLayer=='Oxygen') && mapService.bDisplayLegendsPanel\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeLegendsPanel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"panel-body\">\n            <div class='my-legend' style=\"cursor: move\">\n                <div class='legend-title'>Legend ({{mapService.legendLayer}})</div>\n                <div class='legend-scale'>\n                    <ul class='legend-labels'>\n                        <li>\n                            <span style='background:#FF00FF; height:4px; width:90px; text-align: center;'></span>\n                            <39.99</li>\n                                <li>\n                                    <span style='background:#C0C0C0; height:4px; width:90px;'></span>40 - 44.99</li>\n                                <li>\n                                    <span style='background:#800000; height:4px; width:90px;'></span>45 - 49.99</li>\n                                <li>\n                                    <span style='background:#808000; height:4px; width:90px; text-align: center;'></span>50 - 54.99</li>\n                                <li>\n                                    <span style='background:#008000; height:4px; width:90px;'></span>55 - 59.99</li>\n                                <li>\n                                    <span style='background:#800080; height:4px; width:90px;'></span>60 - 64.99</li>\n                                <li>\n                                    <span style='background:#008080; height:4px; width:90px;'></span>>65</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"(mapService.legendLayer=='Water Dew Point') && mapService.bDisplayLegendsPanel\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeLegendsPanel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"panel-body\">\n            <div class='my-legend' style=\"cursor: move\">\n                <div class='legend-title'>Legend ({{mapService.legendLayer}})</div>\n                <div class='legend-scale'>\n                    <ul class='legend-labels'>\n                        <li>\n                            <span style='background:#00FF00; height:4px; width:90px; text-align: center;'></span>\n                            <4.99</li>\n                                <li>\n                                    <span style='background:#0000FF; height:4px; width:90px;'></span>5 - 7.99</li>\n                                <li>\n                                    <span style='background:#FFFF00; height:4px; width:90px;'></span>8 - 11.99</li>\n                                <li>\n                                    <span style='background:#00FFFF; height:4px; width:90px; text-align: center;'></span>>12</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n-->\n</div>"

/***/ }),

/***/ "./src/app/components/map/legend/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegendComponent = /** @class */ (function () {
    function LegendComponent(mapService) {
        this.mapService = mapService;
        this.bDisplayLegendsPanel = true;
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
    LegendComponent.prototype.legendsFunc = function () {
        if (this.mapService.bDisplayLegendsPanel == true)
            this.mapService.bDisplayLegendsPanel = false;
        else
            this.mapService.bDisplayLegendsPanel = true;
    };
    LegendComponent.prototype.closeLegendsPanel = function () {
        this.mapService.bDisplayLegendsPanel = false;
    };
    LegendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-legend',
            template: __webpack_require__("./src/app/components/map/legend/legend.component.html"),
            styles: [__webpack_require__("./src/app/components/map/legend/legend.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map-view.component.css":
/***/ (function(module, exports) {

module.exports = "#maps-container {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  min-height: calc(100% - 1px);\r\n  height: 0;\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n/* #viewDiv {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 650px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n} */\r\n\r\n#viewDiv {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 0; /* Just to keep it at the very top */\r\n}\r\n\r\n#verIconHeader{\r\n  padding: 0;\r\n  margin: 0;\r\n  right:10px;   \r\n  height: 50px;\r\n  width: 50px;\r\n  overflow: auto;\r\n}\r\n\r\n.float-icon-header{\r\nposition:fixed;\r\nwidth:20px;\r\nheight:40px;\r\ntop:10px;\r\nright:10px;\r\nz-index: 10;\r\n}\r\n\r\n.float-table-of-contents{\r\nposition:fixed;\r\nwidth:20%;\r\nheight:40px;\r\ntop:10px;\r\nright:15px;\r\nz-index: 10;\r\n}\r\n\r\n.float-legend{\r\nposition:fixed;\r\ntop:15px;\r\nz-index: 10;\r\n}\r\n\r\n.float-info-template{\r\nposition:fixed;\r\ntop:250px;\r\nz-index: 10;\r\n}\r\n\r\n.float-pipeline-details{\r\nposition:fixed;\r\nleft:80px;\r\nright:320px;\r\nbottom: 30px;\r\nz-index: 10;\r\n}\r\n\r\n.float-test{\r\nfloat: right;\r\n}\r\n\r\n.my-float{\r\nmargin-top:22px;\r\n}\r\n\r\n#mydiv {\r\nposition: absolute;\r\nz-index: 9;\r\nbackground-color: #f1f1f1;\r\nborder: 1px solid #d3d3d3;\r\ntext-align: center;\r\n}\r\n\r\n#mydivheader {\r\npadding: 10px;\r\ncursor: move;\r\nz-index: 10;\r\nbackground-color: #2196F3;\r\ncolor: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/map/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div  id=\"viewDiv\"></div>\r\n<app-legend class=\"float-legend\"></app-legend>\r\n<app-info-template class=\"float-info-template\"></app-info-template>\r\n\r\n<!-- <pipeline-details class=\"float-pipeline-details\"></pipeline-details>\r\n <app-pipeline-datatable></app-pipeline-datatable> -->\r\n\r\n\r\n<app-table-of-contents  class=\"float-table-of-contents\"></app-table-of-contents>\r\n<app-icon-header class=\"float-icon-header\"></app-icon-header>\r\n<!-- <usertable class=\"float-pipeline-details\"></usertable> -->\r\n<!-- <pipeline-details class=\"float-pipeline-details\"></pipeline-details> -->\r\n<!-- <app-pipeline-datatable class=\"float-pipeline-details\"></app-pipeline-datatable> -->\r\n<!-- <app-pipeline-datatable class=\"float-legend\"></app-pipeline-datatable> -->\r\n\r\n<!-- <app-pipeline-datatable class=\"float-pipeline-details\"></app-pipeline-datatable> -->\r\n<!-- <app-pipeline-datatable  class=\"float-table-of-contents\"></app-pipeline-datatable> -->\r\n\r\n<!-- <app-icon-header></app-icon-header> -->\r\n<!-- -->"

/***/ }),

/***/ "./src/app/components/map/map-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_cribs__ = __webpack_require__("./src/app/data/cribs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapViewComponent = /** @class */ (function () {
    function MapViewComponent(mapService, _globalData) {
        this.mapService = mapService;
        this._globalData = _globalData;
        this.mapView = {
            esriMapView1: {}
        };
        this.cribs = __WEBPACK_IMPORTED_MODULE_1__data_cribs__["a" /* cribs */];
    }
    MapViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.loadEsri().then(function () {
            _this.initMap();
        }, function (err) {
            console.log('Wrong loading maps: ' + err);
        });
    };
    MapViewComponent.prototype.initMap = function () {
        var _this = this;
        this.mapView.esriMapView1 = new this.mapService.esriMapView({
            container: "viewDiv",
            map: this.mapService.map1,
            zoom: 4,
            center: [-94.91, 38.67]
        });
        var searchWidget = new this.mapService.searchWidget({
            view: this.mapView.esriMapView1
        });
        var baseMapToogle = new this.mapService.basemapToggleWidget({
            view: this.mapView.esriMapView1,
            nextBasemap: "hybrid"
        });
        this.mapView.esriMapView1.ui.remove("zoom");
        var zoomWidget = new this.mapService.zoomWidget({
            view: this.mapView.esriMapView1,
            layout: "horizontal"
        });
        this.mapView.esriMapView1.ui.add([
            {
                component: zoomWidget,
                position: "bottom-right",
                index: 1
            },
            {
                component: searchWidget,
                position: "bottom-right",
                index: 2
            }, {
                component: baseMapToogle,
                position: "bottom-left",
                index: 3
            }
        ]);
        this.mapView.esriMapView1.on('click', function (e) {
            _this.getGeometrySegmentInformation(e);
            //alert('I am here');
        });
        this.mapView.esriMapView1.map.add(this.mapService.highlightSelectedGraphicsLayer);
    };
    MapViewComponent.prototype.getGeometrySegmentInformation = function (data) {
        var _this = this;
        this.mapService.highlightSelectedGraphicsLayer.removeAll();
        var identityTaskGeometry = new this.mapService.identifyTask(this._globalData.getData('pipeLineUrl'));
        var paramsGeometry = new this.mapService.identifyParameters();
        paramsGeometry.tolerance = 3;
        paramsGeometry.layerIds = [0];
        paramsGeometry.layersOption = "visible";
        paramsGeometry.geometry = data.mapPoint;
        paramsGeometry.returnGeometry = true;
        paramsGeometry.mapExtent = this.mapView.esriMapView1.extent;
        identityTaskGeometry.execute(paramsGeometry).then(function (response) {
            if (response.results.length == 0) {
                _this.mapService.bInfoTemplatePanel = false;
            }
            else {
                _this.mapService.attrAREANAME = response.results[0].feature.attributes.AREANAME;
                _this.mapService.attrPOP2000 = response.results[0].feature.attributes.POP2000;
                _this.mapService.attrST = response.results[0].feature.attributes.ST;
                _this.mapService.attrCLASS = response.results[0].feature.attributes.CLASS;
                _this.mapService.bInfoTemplatePanel = true;
                _this.highlightGeometry(response.results[0].feature.geometry);
            }
        }, function (error) {
            _this.mapService.bInfoTemplatePanel = false;
            console.log(error);
        });
    };
    MapViewComponent.prototype.highlightGeometry = function (data) {
        var polylineGraphic = new this.mapService.graphic({
            geometry: data,
            symbol: {
                type: "simple-marker",
                size: 18,
                color: "#00FFFF",
                outline: {
                    color: "rgba(255, 255, 255, 0.5)",
                    width: 0.75
                }
            }
        });
        this.mapService.highlightSelectedGraphicsLayer.add(polylineGraphic);
    };
    MapViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map-view',
            template: __webpack_require__("./src/app/components/map/map-view.component.html"),
            styles: [__webpack_require__("./src/app/components/map/map-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_3__services_global_data_service__["a" /* GlobalDataService */]])
    ], MapViewComponent);
    return MapViewComponent;
}());



/***/ }),

/***/ "./src/app/components/map/pipeline-datatable/pipeline-datatable.component.css":
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  .container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n\r\n\r\n  /* Hide the browser's default radio button */\r\n\r\n\r\n  .container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n  /* Create a custom radio button */\r\n\r\n\r\n  .container .checkmark:after {\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 9px;\r\n    height: 9px;\r\n    border-radius: 50%;\r\n    background: red;\r\n  }\r\n\r\n\r\n  #rcorners4 {\r\n    top: 1px;\r\n    border-radius: 15px;\r\n    background: #73AD21;\r\n    padding: 7px;\r\n  }\r\n\r\n\r\n  body {\r\n      background-color: #444;\r\n    margin: 0;\r\n    z-index: 10;\r\n  }\r\n\r\n\r\n  #leftcolumn, #rightcolumn {\r\n      border: 1px solid white;\r\n      float: left;\r\n      min-height: 450px;\r\n    color: white;\r\n    z-index: 10;\r\n  }\r\n\r\n\r\n  #leftcolumn {\r\n       width: 250px;\r\n     background-color: #111;\r\n     z-index: 10;\r\n  }\r\n\r\n\r\n  #rightcolumn {\r\n       width: 750px;\r\n     background-color: #777;\r\n     z-index: 10;\r\n  }\r\n\r\n\r\n  .font-cell {\r\n    color: yellow;\r\n    font-size: 85%;\r\n  }\r\n\r\n\r\n  .font-heading {\r\n    color: yellow;\r\n    font-weight: bold;\r\n    font-size: 90%;\r\n  }\r\n\r\n\r\n  .panel-body{\r\n    overflow: scroll;\r\n  }\r\n\r\n\r\n  ::ng-deep .mat-select-content{\r\n    background-color: #777;\r\n    color: yellow;\r\n    font-weight: bold;\r\n    font-size: 90%;\r\n    opacity: 0.8;\r\n    position: relative;\r\n}\r\n\r\n\r\n  ::ng-deep .cdk-overlay-pane{\r\n  width:40px;\r\n  position: relative;\r\n  z-index: 11;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/map/pipeline-datatable/pipeline-datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"float:left; background-color: black;  opacity: 0.6\" ngDraggable id=\"rcorners4\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePipelineDataTablePanel()\"> <span aria-hidden=\"true\">&times;</span>\n    </button>\n  <table mat-table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> No. </th>\n              <td mat-cell *matCellDef=\"let element\" class=\"font-cell\"> {{element.position}} </td>\n            </ng-container>\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> Name </th>\n              <td mat-cell *matCellDef=\"let element\" class=\"font-cell\"> {{element.name}} </td>\n            </ng-container>\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> Weight </th>\n              <td mat-cell *matCellDef=\"let element\" class=\"font-cell\"> {{element.weight}} </td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> Symbol </th>\n              <td mat-cell *matCellDef=\"let element\" class=\"font-cell\"> {{element.symbol}} </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"font-heading\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator class=\"font-cell\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/components/map/pipeline-datatable/pipeline-datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipelineDatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PipelineDatatableComponent = /** @class */ (function () {
    function PipelineDatatableComponent(mapService) {
        this.mapService = mapService;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatTableDataSource */](ELEMENT_DATA);
    }
    PipelineDatatableComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    PipelineDatatableComponent.prototype.closePipelineDataTablePanel = function () {
        this.mapService.bPipelineDataTable = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatPaginator */])
    ], PipelineDatatableComponent.prototype, "paginator", void 0);
    PipelineDatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pipeline-datatable',
            template: __webpack_require__("./src/app/components/map/pipeline-datatable/pipeline-datatable.component.html"),
            styles: [__webpack_require__("./src/app/components/map/pipeline-datatable/pipeline-datatable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]])
    ], PipelineDatatableComponent);
    return PipelineDatatableComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/app/components/map/pipeline-details/pipeline-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding-left: 35px;\r\n\tmargin-bottom: 12px;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.container .checkmark:after {\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n}\r\n#rcorners4 {\r\n\ttop: 1px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 7px;\r\n\twidth: 900px !important;\r\n}\r\nbody {\r\n    background-color: #444;\r\n\tmargin: 0;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn, #rightcolumn {\r\n    border: 1px solid white;\r\n    float: left;\r\n    min-height: 450px;\r\n\tcolor: white;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn {\r\n     width: 250px;\r\n\t background-color: #111;\r\n\t z-index: 10;\r\n}\r\n#rightcolumn {\r\n     width: 750px;\r\n\t background-color: #777;\r\n\t z-index: 10;\r\n}\r\n.font-cell {\r\n\tcolor: yellow;\r\n\tfont-size: 85%;\r\n}\r\n.font-heading {\r\n\tcolor: yellow;\r\n\tfont-weight: bold;\r\n\tfont-size: 90%;\r\n}\r\n.panel-body{\r\n\toverflow: scroll;\r\n}\r\n::ng-deep .mat-select-content{\r\n    background-color: #777;\r\n    color: yellow;\r\n    font-weight: bold;\r\n    font-size: 90%;\r\n    opacity: 0.8;\r\n    position: relative;\r\n}\r\n::ng-deep .cdk-overlay-pane{\r\n  width:40px;\r\n  position: relative;\r\n  z-index: 11;\r\n}\r\n::ng-deep .mat-icon-button {\r\nheight: 20px !important;\r\nwidth: 20px !important;\r\nline-height: 7px !important;\r\n}\r\n::ng-deep .mat-paginator-icon{\r\n\twidth: 14px !important;\r\n}\r\n::ng-deep .ng-scrollbar.-horizontal {\r\n    height: 10px !important;\r\n    left: 10px !important;\r\n    right: 10px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/map/pipeline-details/pipeline-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<!-- <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:left\" ngDraggable *ngIf=\"mapService.bPipelineDetailsPanel\"> -->\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:left; \" ngDraggable >\n        <div style=\"float:left; background-color: black; opacity: 0.6\" id=\"rcorners4\">\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePipelineDetailsPanel()\"> <span aria-hidden=\"true\">&times;</span>\n                </button>\n\n                <ng-scrollbar>\n\n\n              <table mat-table [dataSource]=\"dataSource\">\n                <!-- Position Column -->\n                        <ng-container matColumnDef=\"apb\">\n                          <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> No. </th>\n                          <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\"> {{pipeline.apb}} </td>\n                        </ng-container>\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"class\">\n                          <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> Name </th>\n                          <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\"> {{pipeline.class}} </td>\n                        </ng-container>\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"class_DATE\">\n                          <th mat-header-cell *matHeaderCellDef class=\"font-heading\"> Weight </th>\n                          <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\"> {{pipeline.class_DATE}} </td>\n                        </ng-container>\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"cmdty_DESC\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> CMDTY Desc </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.cmdty_DESC}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"co2\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> CO2 </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.co2}}</td>\n                            </ng-container>\n                            \n                            <ng-container matColumnDef=\"commodity1\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Comm. </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.commodity1}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"cor_RATE\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Cor Rate </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.cor_RATE}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"diameter\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Dia. </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.diameter}}</td>\n                            </ng-container>\n                            \n                            <ng-container matColumnDef=\"flow_REG\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Flow Reg. </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.flow_REG}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"h2S\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> H2S </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.h2S}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"length\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Len. </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.length}}</td>\n                            </ng-container>\n                            \n                            <ng-container matColumnDef=\"maop\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> MAOP </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.maop}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Name </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.name}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"ops_ID\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> OPS ID </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.ops_ID}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"oxygen\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Oxy. </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.oxygen}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"p5_NUM\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> P5 Num </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.p5_NUM}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"pline_ID\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> PLine Id </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.pline_ID}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"quality_CD\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Quality CD </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.quality_CD}}</td>\n                            </ng-container>\n                        \n                            <ng-container matColumnDef=\"route_ID\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Route ID </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.route_ID}}</td>\n                            </ng-container>            \n                        \n                            <ng-container matColumnDef=\"srb\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> SRB </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.srb}}</td>\n                            </ng-container>            \n                        \n                            <ng-container matColumnDef=\"status_CD\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Status CD </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.status_CD}}</td>\n                            </ng-container>                    \n                        \n                            <ng-container matColumnDef=\"subsys_NM\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Subsys NM </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.subsys_NM}}</td>\n                            </ng-container>                    \n                        \n                            <ng-container matColumnDef=\"sys_NM\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Sys NM </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.sys_NM}}</td>\n                            </ng-container>                    \n                        \n                            <ng-container matColumnDef=\"systype\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Sys type </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.systype}}</td>\n                            </ng-container>                                \n                        \n                            <ng-container matColumnDef=\"t4PERMIT\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> T 4 Permit </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.t4PERMIT}}</td>\n                            </ng-container>                                \n                        \n                            <ng-container matColumnDef=\"t4_AMD\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> T4 AMD </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.t4_AMD}}</td>\n                            </ng-container>                                        \n                        \n                            <ng-container matColumnDef=\"tx_REG\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Tx Reg </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.tx_REG}}</td>\n                            </ng-container>  \n                        \n                            <ng-container matColumnDef=\"water_DP\">\n                                <th mat-header-cell  *matHeaderCellDef class=\"font-heading\"> Water DP </th>\n                                <td mat-cell *matCellDef=\"let pipeline\" class=\"font-cell\">{{pipeline.water_DP}}</td>\n                            </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"font-heading\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n            </ng-scrollbar>\n              <mat-paginator class=\"font-cell\" [pageSizeOptions]=\"[3, 6, 9, 15]\" showFirstLastButtons ></mat-paginator>\n            </div>\n</div>"

/***/ }),

/***/ "./src/app/components/map/pipeline-details/pipeline-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipelineDetailsComponent; });
/* unused harmony export PipelineDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pipeline_service__ = __webpack_require__("./src/app/services/pipeline.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PipelineDetailsComponent = /** @class */ (function () {
    function PipelineDetailsComponent(pipelineService, mapService, apiService) {
        this.pipelineService = pipelineService;
        this.mapService = mapService;
        this.apiService = apiService;
        this.displayedColumns = ['apb', 'class', 'class_DATE', 'cmdty_DESC', 'co2', 'commodity1', 'cor_RATE', 'diameter', 'flow_REG', 'h2S', 'length', 'maop', 'name', 'ops_ID', 'oxygen', 'p5_NUM', 'pline_ID', 'quality_CD', 'route_ID', 'srb', 'status_CD', 'subsys_NM', 'sys_NM', 'systype', 't4PERMIT', 't4_AMD', 'tx_REG', 'water_DP'];
        //displayedColumns = ['apb', 'class', 'class_DATE'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatTableDataSource */]();
        //this.elData = this.pipelineService.getPipelineData();
    }
    PipelineDetailsComponent.prototype.ngOnInit = function () {
        //this.dataSource.paginator = this.paginator;
        var _this = this;
        this.apiService.fetch('getLayerAttributeData', {}).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            _this.dataSource.data = data;
            _this.dataSource.paginator = _this.paginator;
        });
        /*this.pipelineService.getPipelineDataOld3().subscribe(
          data=>{
            this.dataSource.data = data
          }
    
        );*/
        //getPipelineDataOld3()
        /*
        this.pipelineService.getPipelineDataOld2().subscribe(
          data => {
            this.dataSource.data = data;
          }
        );
        */
    };
    PipelineDetailsComponent.prototype.closePipelineDetailsPanel = function () {
        this.mapService.bPipelineDetailsPanel = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */])
    ], PipelineDetailsComponent.prototype, "paginator", void 0);
    PipelineDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pipeline-details',
            template: __webpack_require__("./src/app/components/map/pipeline-details/pipeline-details.component.html"),
            styles: [__webpack_require__("./src/app/components/map/pipeline-details/pipeline-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pipeline_service__["a" /* PipelineService */], __WEBPACK_IMPORTED_MODULE_5__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */]])
    ], PipelineDetailsComponent);
    return PipelineDetailsComponent;
}());

var PipelineDataSource = /** @class */ (function (_super) {
    __extends(PipelineDataSource, _super);
    function PipelineDataSource(pipeLineService) {
        var _this = _super.call(this) || this;
        _this.pipeLineService = pipeLineService;
        return _this;
    }
    PipelineDataSource.prototype.connect = function () {
        return this.pipeLineService.getPipelineData();
        //return this.pipeLineService.getPipelineDataOld();
    };
    PipelineDataSource.prototype.disconnect = function () { };
    return PipelineDataSource;
}(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* DataSource */]));

/*const testPipeLineData: Pipeline[] = [
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5},
  {apb:5000, class:1, class_DATE:"2017-12-10",cmdty_DESC:"NATURAL GAS",co2:3, commodity1:" ", cor_RATE : 12, diameter : "8", flow_REG:2, h2S: 0.0135, length:2721.29, length_mls:0.51343215, maop:986, name:"SSP 8", ops_ID:"", oxygen:52, p5_NUM:" ",pline_ID:"1000", quality_CD:" ",route_ID:10,srb:200,status_CD:" ",subsys_NM:" ",sys_NM:"SOUTH SHORE PIPELINE",systype:" ",t4PERMIT:" ",t4_AMD:" ",tx_REG:" ", water_DP:9.5}
];*/ 


/***/ }),

/***/ "./src/app/components/map/table-of-contents/table-of-contents.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tpadding-left: 22px;\r\n\tmargin-bottom: 0px;\r\n\tcursor: pointer;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tfont-size: 75%;\r\n\t/* font-family: \"Times New Roman\"; */\r\n}\r\n/* Hide the browser's default radio button */\r\n.container input {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tcursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n\tposition: absolute;\r\n\ttop: 2px;\r\n\tleft: 0;\r\n\theight: 15px;\r\n\twidth: 15px;\r\n\tbackground-color: #eee;\r\n\tborder-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark {\r\n\tbackground-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark {\r\n\tbackground-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tdisplay: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark:after {\r\n\tdisplay: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark:after {\r\n\ttop: 3px;\r\n\tleft: 3px;\r\n\twidth: 9px;\r\n\theight: 9px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n}\r\n#rcorners4 {\r\n\ttop: 3px;\r\n\tborder-radius: 15px;\r\n\tbackground: #73AD21;\r\n\tpadding: 7px;\r\n}\r\nlabel {\r\n\tcolor: yellow;\r\n\t/* font-family: \"Times New Roman\"; */\r\n\topacity: 1;\r\n}\r\n.panel-header-title {\r\n\ttext-align: left;\r\n\tmargin-bottom: 0px;\r\n\tfont-weight: bold;\r\n\tfont-size: 80%;\r\n\tcolor: yellow;\r\n}\r\nbody {\r\n    background-color: #444;\r\n\tmargin: 0;\r\n\tz-index: 10;\r\n}\r\n#wrapper {\r\n     width: 1005px;\r\n\t margin: 0 auto;\r\n\t z-index: 10;\r\n}\r\n#leftcolumn, #rightcolumn {\r\n    border: 1px solid white;\r\n    float: left;\r\n    min-height: 450px;\r\n\tcolor: white;\r\n\tz-index: 10;\r\n}\r\n#leftcolumn {\r\n     width: 250px;\r\n\t background-color: #111;\r\n\t z-index: 10;\r\n}\r\n#rightcolumn {\r\n     width: 750px;\r\n\t background-color: #777;\r\n\t z-index: 10;\r\n}\r\n.checkmark_hur {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 15px;\r\n    width: 15px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.container:hover input ~ .checkmark_hur {\r\n    background-color: #ccc;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.container input:checked ~ .checkmark_hur {\r\n    background-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark_hur:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.container input:checked ~ .checkmark_hur:after {\r\n    display: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.container .checkmark_hur:after {\r\n    top: 3px;\r\n    left: 3px;\r\n    width: 9px;\r\n    height: 9px;\r\n    border-radius: 50%;\r\n    background: red;\r\n}"

/***/ }),

/***/ "./src/app/components/map/table-of-contents/table-of-contents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:right\" ngDraggable>\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:right\">\n           <div style=\"background-color: black;  opacity: 0.6; float:right \" id=\"rcorners4\" *ngIf=\"mapService.bTableOfContentsPanel\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeTableOfContentsPanel()\"> <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <div class=\"panel-header-title\">States Sel.</div>\n              <div class=\"panel-body\">\n                 <label class=\"container\">All States<input type=\"radio\" checked=\"checked\" name=\"radio\" (click)=\"showAll()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">New York<input type=\"radio\" name=\"radio\" (click)=\"showNY()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">New Jersey<input type=\"radio\" name=\"radio\" (click)=\"showNJ()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Texas<input type=\"radio\" name=\"radio\" (click)=\"showTX()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Virginia<input type=\"radio\" name=\"radio\" (click)=\"showVir()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Florida<input type=\"radio\" name=\"radio\" (click)=\"showFL()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">West Virginia<input type=\"radio\" name=\"radio\" (click)=\"showWV()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Maryland<input type=\"radio\" name=\"radio\" (click)=\"showMD()\"> <span class=\"checkmark\"></span>\n                 </label>                \n                 <label class=\"container\">California<input type=\"radio\" name=\"radio\" (click)=\"showCA()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Washington<input type=\"radio\" name=\"radio\" (click)=\"showWA()\"> <span class=\"checkmark\"></span>\n                 </label>\n                 <label class=\"container\">Other States<input type=\"radio\" name=\"radio\" (click)=\"showOtherStates()\"> <span class=\"checkmark\"></span>\n                 </label>                                \n                 <label class=\"container\">Hide Layer<input type=\"radio\" name=\"radio\" (click)=\"hideLayer()\"> <span class=\"checkmark\"></span>\n                 </label>                \n                 <label class=\"container\">Heat Map<input type=\"radio\" name=\"radio\" (click)=\"heatMapLayer()\"> <span class=\"checkmark\"></span>\n                 </label>                                \n              </div>\n              <div class=\"panel-header-title\">Heatmap</div>\n              <div class=\"panel-footer\">\n                 <form action=\"\">\n                    <label class=\"container\">ALL Hurricanes<input type=\"radio\" checked=\"checked\" name=\"radio\" (click)=\"showAllHUrricane()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                 </form>\n              </div>\n              \n              <div class=\"panel-header-title\">Hurricane.</div>\n              <div class=\"panel-footer\">\n                 <form action=\"\">\n                    <label class=\"container\">ALL Hurricanes<input type=\"radio\" checked=\"checked\" name=\"radio\" (click)=\"showAllHUrricane()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">IRENE<input type=\"radio\" name=\"radio\" (click)=\"showIRENE()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">KATRINA<input type=\"radio\" name=\"radio\" (click)=\"showKATRINA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">HARVEY<input type=\"radio\" name=\"radio\" (click)=\"showHARVEY()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">WILMA<input type=\"radio\" name=\"radio\" (click)=\"showWILMA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">RITA<input type=\"radio\" name=\"radio\" (click)=\"showRITA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">Others<input type=\"radio\" name=\"radio\" (click)=\"showOthersHUrricane()\"> <span class=\"checkmark_hur\"></span>\n                    </label>                              \n                    <label class=\"container\">Hide Hurricane Layers<input type=\"radio\" name=\"radio\" (click)=\"hideHurricaneLayer()\"> <span class=\"checkmark_hur\"></span>\n                    </label>  \n                 </form>\n              </div>\n              <div class=\"panel-header-title\">Highways.</div>\n              <div class=\"panel-footer\">\n                 <form action=\"\">\n                    <label class=\"container\">ALL Hurricanes<input type=\"radio\" checked=\"checked\" name=\"radio\" (click)=\"showAllHUrricane()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">IRENE<input type=\"radio\" name=\"radio\" (click)=\"showIRENE()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">KATRINA<input type=\"radio\" name=\"radio\" (click)=\"showKATRINA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">HARVEY<input type=\"radio\" name=\"radio\" (click)=\"showHARVEY()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">WILMA<input type=\"radio\" name=\"radio\" (click)=\"showWILMA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">RITA<input type=\"radio\" name=\"radio\" (click)=\"showRITA()\"> <span class=\"checkmark_hur\"></span>\n                    </label>\n                    <label class=\"container\">Others<input type=\"radio\" name=\"radio\" (click)=\"showOthersHUrricane()\"> <span class=\"checkmark_hur\"></span>\n                    </label>                              \n                    <label class=\"container\">Hide Hurricane Layers<input type=\"radio\" name=\"radio\" (click)=\"hideHurricaneLayer()\"> <span class=\"checkmark_hur\"></span>\n                    </label>  \n                 </form>\n              </div>\n           </div>\n        </div>\n     </div>"

/***/ }),

/***/ "./src/app/components/map/table-of-contents/table-of-contents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableOfContentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("./src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_renderer_service__ = __webpack_require__("./src/app/services/renderer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableOfContentsComponent = /** @class */ (function () {
    function TableOfContentsComponent(mapService, rendererService) {
        this.mapService = mapService;
        this.rendererService = rendererService;
    }
    TableOfContentsComponent.prototype.ngOnInit = function () {
    };
    TableOfContentsComponent.prototype.closeTableOfContentsPanel = function () {
        this.mapService.bTableOfContentsPanel = false;
    };
    TableOfContentsComponent.prototype.showAll = function () {
        //this.mapService.setRenderer(this.rendererService.getRendererWeight('H2S_WRF'));
        this.mapService.setDefinitionExpression("1=1");
        //this.mapService.setRenderer(this.rendererService.renderCities());
        //this.mapService.defnitionExpression = "1 = 1";    
    };
    TableOfContentsComponent.prototype.showNY = function () {
        this.mapService.setDefinitionExpression("ST = 'NY'");
        //this.mapService.defnitionExpression = "STATE = 'NY'";
    };
    TableOfContentsComponent.prototype.showNJ = function () {
        this.mapService.setDefinitionExpression("ST = 'NJ'");
    };
    TableOfContentsComponent.prototype.showTX = function () {
        this.mapService.setDefinitionExpression("ST = 'TX'");
    };
    TableOfContentsComponent.prototype.showWA = function () {
        this.mapService.setDefinitionExpression("ST = 'WA'");
    };
    TableOfContentsComponent.prototype.showVir = function () {
        this.mapService.setDefinitionExpression("ST = 'VA'");
    };
    TableOfContentsComponent.prototype.showFL = function () {
        this.mapService.setDefinitionExpression("ST = 'FL'");
    };
    TableOfContentsComponent.prototype.showWV = function () {
        this.mapService.setDefinitionExpression("ST = 'WV'");
    };
    TableOfContentsComponent.prototype.showMD = function () {
        this.mapService.setDefinitionExpression("ST = 'MD'");
    };
    TableOfContentsComponent.prototype.showCA = function () {
        this.mapService.setDefinitionExpression("ST = 'CA'");
    };
    TableOfContentsComponent.prototype.showOtherStates = function () {
        this.mapService.setDefinitionExpression("ST NOT IN ('CA','MD','WV','FL','VA','WA','TX','NJ','NY')");
    };
    TableOfContentsComponent.prototype.hideLayer = function () {
        this.mapService.setDefinitionExpression("1 = 0");
    };
    TableOfContentsComponent.prototype.showHARVEY = function () {
        this.mapService.setDefinitionExpressionHur(" NAME = 'HARVEY'");
    };
    TableOfContentsComponent.prototype.showRITA = function () {
        this.mapService.setDefinitionExpressionHur(" NAME = 'RITA'");
    };
    TableOfContentsComponent.prototype.showIRENE = function () {
        this.mapService.setDefinitionExpressionHur(" NAME = 'IRENE'");
    };
    TableOfContentsComponent.prototype.showKATRINA = function () {
        this.mapService.setDefinitionExpressionHur(" NAME = 'KATRINA'");
    };
    TableOfContentsComponent.prototype.showWILMA = function () {
        this.mapService.setDefinitionExpressionHur(" NAME = 'WILMA'");
    };
    TableOfContentsComponent.prototype.showAllHUrricane = function () {
        this.mapService.setDefinitionExpressionHur("1 = 1");
    };
    TableOfContentsComponent.prototype.showOthersHUrricane = function () {
        this.mapService.setDefinitionExpressionHur("NAME NOT IN ('HARVEY','RITA','IRENE','KATRINA','WILMA')");
    };
    TableOfContentsComponent.prototype.hideHurricaneLayer = function () {
        this.mapService.setDefinitionExpressionHur("1 = 0");
    };
    TableOfContentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table-of-contents',
            template: __webpack_require__("./src/app/components/map/table-of-contents/table-of-contents.component.html"),
            styles: [__webpack_require__("./src/app/components/map/table-of-contents/table-of-contents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_2__services_renderer_service__["a" /* RendererService */]])
    ], TableOfContentsComponent);
    return TableOfContentsComponent;
}());



/***/ }),

/***/ "./src/app/components/map/usertable/usertable.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/map/usertable/usertable.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:left\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"float:left\">\n    <!--       <div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\" *ngIf=\"mapService.bPipelineDetailsPanel\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closePipelineDetailsPanel()\"> <span aria-hidden=\"true\">&times;</span>\n                  </button> -->\n                  <div style=\"background-color: black;  opacity: 0.6; float:left \" id=\"rcorners4\">\n                      <button type=\"button\" class=\"close\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span>\n                          </button>\n              <div class=\"panel-body\">\n                  <div>\n                    <mat-table [dataSource]=\"dataSource\">\n    \n                      <ng-container matColumnDef=\"name\">\n                        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\"> {{user.name}} </mat-cell>\n                      </ng-container>\n                  \n                      <ng-container matColumnDef=\"email\">\n                        <mat-header-cell *matHeaderCellDef> E-Mail </mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\"> {{user.email}} </mat-cell>\n                      </ng-container>\n                  \n                      <ng-container matColumnDef=\"phone\">\n                        <mat-header-cell *matHeaderCellDef> Phone </mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\"> {{user.phone}} </mat-cell>\n                      </ng-container>\n                  \n                      <ng-container matColumnDef=\"company\">\n                        <mat-header-cell *matHeaderCellDef> Company </mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\"> {{user.company.name}} </mat-cell>\n                      </ng-container>\n                  \n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  \n                    </mat-table>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/map/usertable/usertable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertableComponent; });
/* unused harmony export UserDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsertableComponent = /** @class */ (function () {
    function UsertableComponent(userService) {
        this.userService = userService;
        this.dataSource = new UserDataSource(this.userService);
        this.displayedColumns = ['name', 'email', 'phone', 'company'];
    }
    UsertableComponent.prototype.ngOnInit = function () {
    };
    UsertableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'usertable',
            template: __webpack_require__("./src/app/components/map/usertable/usertable.component.html"),
            styles: [__webpack_require__("./src/app/components/map/usertable/usertable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UsertableComponent);
    return UsertableComponent;
}());

var UserDataSource = /** @class */ (function (_super) {
    __extends(UserDataSource, _super);
    function UserDataSource(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        return _this;
    }
    UserDataSource.prototype.connect = function () {
        return this.userService.getUser();
    };
    UserDataSource.prototype.disconnect = function () { };
    return UserDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/data/cribs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cribs; });
var cribs = [
    {
        "id": 1,
        "type": "Condo",
        "price": 220000,
        "address": "213 Grove Street",
        "description": "Excellent place, really nice view!",
        "bedrooms": 2,
        "bathrooms": 1.5,
        "area": 921,
        "image": "crib-1"
    },
    {
        "id": 2,
        "type": "House",
        "price": 410500,
        "address": "7823 Winding Way",
        "description": "Beautiful home with lots of space for a large family.",
        "bedrooms": 4,
        "bathrooms": 3,
        "area": 2145,
        "image": "crib-2"
    },
    {
        "id": 3,
        "type": "Duplex",
        "price": 395000,
        "address": "834 River Lane",
        "description": "Great neighbourhood and lot's of nice green space.",
        "bedrooms": 3,
        "bathrooms": 2.5,
        "area": 1500,
        "image": "crib-3"
    },
    {
        "id": 4,
        "type": "House",
        "price": 755990,
        "address": "7807 Forest Avenue",
        "description": "Best house on the block!",
        "bedrooms": 6,
        "bathrooms": 4.5,
        "area": 3230,
        "image": "crib-4"
    },
    {
        "id": 5,
        "type": "Condo",
        "price": 210500,
        "address": "1857 Andover Court",
        "description": "Nice little condo with room to grow.",
        "bedrooms": 2,
        "bathrooms": 1.5,
        "area": 1023,
        "image": "crib-5"
    },
    {
        "id": 6,
        "type": "House",
        "price": 334900,
        "address": "7398 East Avenue",
        "description": "You'll love the view!",
        "bedrooms": 4,
        "bathrooms": 2.5,
        "area": 1788,
        "image": "crib-6"
    }
];


/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.fetch = function (method, data, additional) {
        if (data === void 0) { data = {}; }
        if (additional === void 0) { additional = null; }
        var url = '';
        var type = 'get';
        switch (method) {
            case 'getLayerAttributeData':
                //url = 'http://localhost:8080/SpringRESTFulExample_19May2018/user/';
                //url = 'http://localhost:8080/SpringRESTFulExample/user/';
                url = 'http://localhost:8080/SpringRESTFulExample/pipelinedata/';
                type = 'get';
                break;
            default:
                return;
        }
        if (type == 'get' || type == 'delete') {
            data['headers'] = this.headers;
            if (url.indexOf('export') > -1) {
                this.headers.append('Accept', '*/*');
            }
            return this.http[type.toLowerCase()](url, data);
        }
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/global-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalDataService = /** @class */ (function () {
    function GlobalDataService() {
        this.golbalDataInfo = {
            //pipeLineUrl: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer'
            //pipeLineUrl: 'https://useagan2193s:6443/arcgis/rest/services/ES_NC_Midstream/NE_Sample/MapServer'
            //pipeLineUrl: 'https://useagan2193s:6443/arcgis/rest/services/ES_NC_Midstream/Dav_Outputs/MapServer'
            //pipeLineUrl: 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Boston_2017_Parcel_data/MapServer'
            //pipeLineUrl: 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/USA_County_Crops_2007/FeatureServer/0'
            pipeLineUrl: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
            harricaneUrl: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer'
        };
    }
    GlobalDataService.prototype.getData = function (key) {
        return this.golbalDataInfo[key];
    };
    GlobalDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalDataService);
    return GlobalDataService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader__ = __webpack_require__("./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_esri_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_data_service__ = __webpack_require__("./src/app/services/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import * as $ from 'jquery';
var MapService = /** @class */ (function () {
    function MapService(apiService, http, _globalData) {
        this.apiService = apiService;
        this.http = http;
        this._globalData = _globalData;
        this.legendLayer = "Synthesized Risk";
        this.legendLayerSevere = "Severe";
        this.legendLayerHigh = "High";
        this.lgendLayerModerate = "Moderate";
        this.lgendLayerLowModerate = "Low - Moderate";
        this.lgendLayerLow = "Low";
        this.defnitionExpression = "1 = 1";
        this.bInfoTemplatePanel = false;
        this.bPipelineDetailsPanel = false;
        this.bPipelineDataTable = false;
        this.bTableOfContentsPanel = false;
        this.bDisplayLegendsPanel = true;
        this._maps = {
            map1: {
                mapName: 'map1',
                map: {},
                mapView: {},
                layers: {
                    pipeLineLayer: {},
                    hurricaneLayer: {}
                }
            }
        };
    }
    MapService.prototype.loadEsri = function () {
        var _this = this;
        // only load the ArcGIS API for JavaScript when this component is loaded
        var options = {
            url: 'https://js.arcgis.com/4.8/'
        };
        return Object(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["loadModules"])([
            'esri/Map',
            'esri/views/MapView',
            'esri/widgets/Search',
            "esri/widgets/BasemapToggle",
            "esri/widgets/Zoom",
            "esri/layers/MapImageLayer",
            "esri/tasks/IdentifyTask",
            "esri/tasks/support/IdentifyParameters",
            "esri/Graphic",
            "esri/layers/GraphicsLayer",
            "esri/layers/FeatureLayer"
        ], options)
            .then(function (_a) {
            var EsriMap = _a[0], EsriMapView = _a[1], Search = _a[2], BasemapToggle = _a[3], Zoom = _a[4], MapImageLayer = _a[5], IdentifyTask = _a[6], IdentifyParameters = _a[7], Graphic = _a[8], GraphicsLayer = _a[9], FeatureLayer = _a[10];
            _this.esriMap = EsriMap;
            _this.esriMapView = EsriMapView;
            _this.searchWidget = Search;
            _this.basemapToggleWidget = BasemapToggle;
            _this.zoomWidget = Zoom;
            _this.mapImageLayer = MapImageLayer;
            _this.identifyTask = IdentifyTask;
            _this.identifyParameters = IdentifyParameters;
            _this.graphic = Graphic;
            _this.graphicsLayer = GraphicsLayer;
            _this.featureLayer = FeatureLayer;
            _this._maps.map1.map = _this.esriMap({
                basemap: 'streets'
            });
            _this.highlightSelectedGraphicsLayer = new _this.graphicsLayer();
            return Promise.resolve();
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    Object.defineProperty(MapService.prototype, "map1", {
        get: function () {
            /*var severeSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#FF0000",
                width: 10,
                style: "solid"
            };
    
            var highSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#FF8000",
                width: 10,
                style: "solid"
            };
    
            var moderateSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#FFFF33",
                width: 10,
                style: "solid"
            };
    
            var lowModerateSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "‎#90EE90",
                width: 10,
                style: "solid"
            };
    
            var lowSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#008000",
                width: 10,
                style: "solid"
            };
    
            // Symbol for freeways
            var fwySym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#FFAA00",
                width: 10,
                style: "solid"
            };
    
            // Symbol for U.S. Highways
            var hwySym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#DF73FF",
                width: 3,
                style: "solid"
            };
    
            // Symbol for other major highways
            var otherSym = {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#FFAA00",
                width: 5,
                style: "short-dot"
            };
    
            var hwyRenderer = {
                type: "class-breaks", // autocasts as new ClassBreaksRenderer()
                field: "length",
                defaultSymbol: {
                    type: "simple-fill", // autocasts as new SimpleFillSymbol()
                    color: "gray",
                    outline: {
                        width: 0.5,
                        color: "white"
                    }
                },
                defaultLabel: "no data",
                classBreakInfos: [{
                    minValue: 0,
                    maxValue: 3,
                    symbol: severeSym,
                    label: "SEVERE"
                }, {
                    minValue: 3.01,
                    maxValue: 6,
                    symbol: highSym,
                    label: "HIGH"
                }, {
                    minValue: 6.01,
                    maxValue: 10,
                    symbol: moderateSym,
                    label: "MODERATE"
                }, {
                    minValue: 10.01,
                    maxValue: 50,
                    symbol: lowModerateSym,
                    label: "LOW - MODERATE"
                }, {
                    minValue: 50.01,
                    maxValue: 10000,
                    symbol: lowSym,
                    label: "LOW"
                }]
            };*/
            var severeSym = {
                type: "simple-line",
                color: "#FF0000",
                width: 5,
                style: "solid"
            };
            var hwyRenderer = {
                type: "class-breaks",
                field: "OXYGEN",
                defaultSymbol: {
                    type: "simple-fill",
                    color: "gray",
                    outline: {
                        width: 0.5,
                        color: "white"
                    }
                },
                defaultLabel: "no data",
                classBreakInfos: [{
                        minValue: -99,
                        maxValue: 1000000,
                        symbol: severeSym,
                        label: "SEVERE"
                    }]
            };
            /*this.apiService.fetch('getLayerAttributeData', {}).map(resp => resp.json())
               .subscribe((data) => {
                   console.log(' Here is the data: ' + data);
    
                   
                   var tbl_body = "<table>";
                   var odd_even = false;
                   $.each(data, function() {
                       var tbl_row = "";
                       $.each(this, function(k , v) {
                           tbl_row += "<td>"+v+"</td>";
                       })
                       tbl_body += "<tr>"+tbl_row+"</tr>";
                       odd_even = !odd_even;
                   });
    
                   this.tablePipelineData = tbl_body + "</table>";
                   //console.log('Here is the table we are talking about: ' + tbl_body);
                   
            }); */
            /*
                $.getJSON(url , function(data) {
                var tbl_body = "";
                var odd_even = false;
                $.each(data, function() {
                    var tbl_row = "";
                    $.each(this, function(k , v) {
                        tbl_row += "<td>"+v+"</td>";
                    })
                    tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
                    odd_even = !odd_even;
                })
                    $("#target_table_id tbody").html(tbl_body);
                });
            */
            //var testContent = "<ul><li><span style=" + "/'background: red/'"+ "></span>Highly Corrosive</li><li><span style=" + "/'background: orange/'"+ "></span>Mooderately Corrosive</li></ul>";
            //var layer = new this.mapImageLayer({
            //    url: this._globalData.getData('pipeLineUrl'),
            //    sublayers: [{
            //        id: 0,
            //        visible: true,
            //        //renderer: hwyRenderer
            //    }]
            //});
            //this._maps.map1.map.add(layer); // adds the layer to the map
            /*
            this._maps.map1.layers.pipeLineLayer = new this.mapImageLayer({
                url: this._globalData.getData('pipeLineUrl'),
                sublayers: [{
                    id: 0,
                    visible: true,
                    renderer: hwyRenderer
                }]
            });
            */
            this._maps.map1.layers.pipeLineLayer = new this.mapImageLayer({
                url: this._globalData.getData('pipeLineUrl'),
                sublayers: [{
                        id: 0,
                        visible: true,
                        renderer: this.setCitiesRenderer()
                    }]
            });
            this._maps.map1.layers.hurricaneLayer = new this.mapImageLayer({
                url: this._globalData.getData('harricaneUrl'),
                sublayers: [{
                        id: 1,
                        visible: true //,
                        //renderer: this.setHurricaneRenderer()
                    }]
            });
            // Carbon storage of trees in Warren Wilson College.
            /*this._maps.map1.layers.pipeLineLayer = new this.featureLayer({
                url: this._globalData.getData('pipeLineUrl')
              });
              */
            this._maps.map1.map.add(this._maps.map1.layers.pipeLineLayer); // adds the layer to the map
            this._maps.map1.map.add(this._maps.map1.layers.hurricaneLayer); // adds the layer to the map
            return this._maps.map1.map;
        },
        enumerable: true,
        configurable: true
    });
    MapService.prototype.setRenderer = function (renderer) {
        //var tempPipeLineLayer = this._maps.map1.layers.pipeLineLayer;
        //tempPipeLineLayer.findSublayerById(0).renderer = renderer;
        this._maps.map1.layers.pipeLineLayer.findSublayerById(0).renderer = renderer;
        this._maps.map1.layers.pipeLineLayer.findSublayerById(0).visible = true;
        //this._maps.map1.layers.pipeLineLayer.findSublayerById(0).renderer = hwyRenderer;
    };
    MapService.prototype.setHurricaneRenderer = function () {
        // Symbol for freeways
        var fwySym = {
            type: "simple-line",
            color: "#FFAA00",
            width: 10,
            style: "solid"
        };
        // Symbol for U.S. Highways
        var hwySym = {
            type: "simple-line",
            color: "#DF73FF",
            width: 7,
            style: "solid"
        };
        // Symbol for other major highways
        var otherSym = {
            type: "simple-line",
            color: "#EBEBEB",
            width: 3,
            style: "short-dot"
        };
        var hwyRenderer = {
            type: "unique-value",
            field: "NAME",
            defaultSymbol: otherSym,
            defaultLabel: "Other major roads",
            // used for specifying unique values
            uniqueValueInfos: [{
                    value: "IRENE",
                    symbol: fwySym,
                    label: "Interstate" // used in the legend to describe features with this symbol
                }, {
                    value: "KATRINA",
                    symbol: hwySym,
                    label: "US Highway" // used in the legend to describe features with this symbol
                }]
        };
        return hwyRenderer;
    };
    MapService.prototype.setCitiesRenderer = function () {
        var citiesRenderer = {
            type: "unique-value",
            field: "ST",
            defaultSymbol: {
                type: "simple-marker",
                size: 4,
                color: "rgb(155, 155, 155)",
                outline: {
                    color: "rgba(155, 155, 155, 0.5)",
                    width: 0.75
                }
            },
            uniqueValueInfos: [{
                    value: "NY",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#0082c8",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "CA",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#e6194b",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                },
                {
                    value: "FL",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#3cb44b",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                },
                {
                    value: "MD",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#ffe119",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "WA",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#f58231",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "VA",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#911eb4",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "TX",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#f032e6",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "NJ",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#d2f53c",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "WV",
                    symbol: {
                        type: "simple-marker",
                        size: 7,
                        color: "#800000",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }]
        };
        return citiesRenderer;
    };
    MapService.prototype.setDefinitionExpression = function (exp) {
        this._maps.map1.layers.pipeLineLayer.findSublayerById(0).definitionExpression = exp;
        //this._maps.map1.layers.pipeLineLayer.definitionExpression = exp;
    };
    MapService.prototype.setDefinitionExpressionHur = function (exp) {
        this._maps.map1.layers.hurricaneLayer.findSublayerById(1).definitionExpression = exp;
        //this._maps.map1.layers.pipeLineLayer.definitionExpression = exp;
    };
    MapService.prototype.hidePipeLineLayer = function () {
        this._maps.map1.layers.pipeLineLayer.findSublayerById(0).visible = false;
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__global_data_service__["a" /* GlobalDataService */]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/pipeline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipelineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PipelineService = /** @class */ (function () {
    function PipelineService(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.serviceUrl = '';
    }
    PipelineService.prototype.getPipelineData = function () {
        //return this.http.get<Pipeline[]>("http://localhost:8080/SpringRESTFulExample_19May2018/user/");
        return this.http.get("http://localhost:8080/SpringRESTFulExample/pipelinedata/");
    };
    PipelineService.prototype.getPipelineDataOld = function () {
        //let dataOuput: any;
        return this.apiService.fetch('getLayerAttributeData', {}).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            return data;
        });
        //return dataOuput;
        //http://localhost:8080/SpringRESTFulExample_19May2018/user/
    };
    PipelineService.prototype.getPipelineDataOld2 = function () {
        //let dataOuput: any;
        return this.apiService.fetch('getLayerAttributeData', {}).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            return data;
        });
    };
    PipelineService.prototype.getPipelineDataOld3 = function () {
        //let dataOuput: any;
        var pipelineData;
        this.apiService.fetch('getLayerAttributeData', {}).map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            pipelineData = data;
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(pipelineData).delay(500);
        //return dataOuput;
        //http://localhost:8080/SpringRESTFulExample_19May2018/user/
    };
    PipelineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PipelineService);
    return PipelineService;
}());



/***/ }),

/***/ "./src/app/services/renderer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendererService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RendererService = /** @class */ (function () {
    function RendererService() {
        this.initializeSymbols();
    }
    RendererService.prototype.initializeSymbols = function () {
        this.orangeClr = {
            type: "simple-line",
            color: "#FF8C00",
            width: 5,
            style: "solid"
        };
        this.simpleFill_orangeClr = {
            type: "simple-line",
            color: "#FF8C00",
            size: 7,
        };
        this.blackClr = {
            type: "simple-line",
            color: "#000000",
            width: 5,
            style: "solid"
        };
        this.whiteClr = {
            type: "simple-line",
            color: "#FFFFFF",
            width: 5,
            style: "solid"
        };
        this.redClr = {
            type: "simple-line",
            color: "#FF0000",
            width: 5,
            style: "solid"
        };
        this.limeClr = {
            type: "simple-line",
            color: "#00FF00",
            width: 5,
            style: "solid"
        };
        this.blueClr = {
            type: "simple-line",
            color: "#0000FF",
            width: 5,
            style: "solid"
        };
        this.yellowClr = {
            type: "simple-line",
            color: "#FFFF00",
            width: 5,
            style: "solid"
        };
        this.cyanClr = {
            type: "simple-line",
            color: "#00FFFF",
            width: 5,
            style: "solid"
        };
        this.megentaClr = {
            type: "simple-line",
            color: "#FF00FF",
            width: 5,
            style: "solid"
        };
        this.silverClr = {
            type: "simple-line",
            color: "#C0C0C0",
            width: 5,
            style: "solid"
        };
        this.grayClr = {
            type: "simple-line",
            color: "#808080",
            width: 5,
            style: "solid"
        };
        this.maroonClr = {
            type: "simple-line",
            color: "#800000",
            width: 5,
            style: "solid"
        };
        this.oliveClr = {
            type: "simple-line",
            color: "#808000",
            width: 5,
            style: "solid"
        };
        this.greenClr = {
            type: "simple-line",
            color: "#008000",
            width: 5,
            style: "solid"
        };
        this.purpleClr = {
            type: "simple-line",
            color: "#800080",
            width: 5,
            style: "solid"
        };
        this.tealClr = {
            type: "simple-line",
            color: "#008080",
            width: 5,
            style: "solid"
        };
        this.navyClr = {
            type: "simple-line",
            color: "#000080",
            width: 5,
            style: "solid"
        };
        this.severeSym = {
            type: "simple-line",
            color: "#FF0000",
            width: 5,
            style: "solid"
        };
        this.highSym = {
            type: "simple-line",
            color: "#FF8000",
            width: 5,
            style: "solid"
        };
        this.moderateSym = {
            type: "simple-line",
            color: "#FFFF33",
            width: 5,
            style: "solid"
        };
        this.lowModSym = {
            type: "simple-line",
            color: "#90EE90",
            width: 5,
            style: "solid"
        };
        this.lowSym = {
            type: "simple-line",
            color: "#008000",
            width: 5,
            style: "solid"
        };
        // Symbol for other major highways
        this.otherSym = {
            type: "simple-line",
            color: "#FFAA00",
            width: 5,
            style: "short-dot"
        };
    };
    RendererService.prototype.renderCities = function () {
        var otherSymbol = {
            type: "simple-fill",
            color: [51, 51, 204, 0.9],
            style: "solid",
            outline: {
                color: "white",
                width: 1
            }
        };
        var redSymbol = {
            type: "simple-fill",
            color: [255, 0, 0, 0.9],
            style: "solid",
            outline: {
                color: "white",
                width: 1
            }
        };
        var greenSymbol = {
            type: "simple-fill",
            color: [0, 0, 255, 0.9],
            style: "solid",
            outline: {
                color: "white",
                width: 1
            }
        };
        var citiesRenderer = {
            type: "unique-value",
            field: "ST",
            uniqueValueInfos: [{
                    value: "NY",
                    symbol: {
                        type: "simple-marker",
                        size: 9,
                        color: "rgb(0, 92, 230)",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }, {
                    value: "CA",
                    symbol: {
                        type: "simple-marker",
                        size: 9,
                        color: "rgb(255, 20, 20)",
                        outline: {
                            color: "rgba(255, 255, 255, 0.5)",
                            width: 0.75
                        }
                    }
                }]
        };
        /*type: "unique-value",
        field: "ST",
        uniqueValueInfos: [{
          value: "Obama",
          symbol: {
            type: "simple-marker",
            size: 9,
            color: "rgb(0, 92, 230)",
            outline: {
              color: "rgba(255, 255, 255, 0.5)",
              width: 0.75
            }
          }
        }, {
          value: "McCain",
          symbol: {
            type: "simple-marker",
            size: 9,
            color: "rgb(255, 20, 20)",
            outline: {
              color: "rgba(255, 255, 255, 0.5)",
              width: 0.75
            }
          }
        }*/
        return citiesRenderer;
    };
    RendererService.prototype.getSynthesizedRisk = function () {
        var sysRiskRenderer = {
            type: "class-breaks",
            field: "OXYGEN",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: -99,
                    maxValue: 1000000,
                    symbol: this.severeSym,
                    label: "SEVERE"
                }]
        };
        return sysRiskRenderer;
    };
    RendererService.prototype.getRendererCO2 = function () {
        //-9999 to 8.9999999
        //9 to 14.999999
        //15 to 24.999999
        //25 to 39.999999
        //40 to 99999.999999
        var rendererCO2 = {
            type: "class-breaks",
            field: "CO2",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: 0,
                    maxValue: 8.9999,
                    symbol: this.severeSym
                }, {
                    minValue: 9,
                    maxValue: 14.9999,
                    symbol: this.highSym
                }, {
                    minValue: 15,
                    maxValue: 24.9999,
                    symbol: this.moderateSym
                }, {
                    minValue: 25,
                    maxValue: 39.9999,
                    symbol: this.lowModSym
                }, {
                    minValue: 40,
                    maxValue: 10000,
                    symbol: this.lowSym
                }]
        };
        return rendererCO2;
    };
    RendererService.prototype.getRendererWeight = function (weight) {
        //H2S
        //-9999 to 0.0149999
        //0.0150000 to 0.0199999
        //0.200000 to 0.0490000
        //0.0500000 to 0.099999
        //0.1000 to 9999.99999
        var rendererH2SPPM = {
            type: "class-breaks",
            field: weight,
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: 0,
                    maxValue: 2,
                    symbol: this.greenClr
                }, {
                    minValue: 2,
                    maxValue: 4,
                    symbol: this.orangeClr
                }, {
                    minValue: 4,
                    maxValue: 5,
                    symbol: this.redClr
                }]
        };
        return rendererH2SPPM;
    };
    RendererService.prototype.getRendererSynthesizedWeight = function () {
        //H2S
        //-9999 to 0.0149999
        //0.0150000 to 0.0199999
        //0.200000 to 0.0490000
        //0.0500000 to 0.099999
        //0.1000 to 9999.99999
        var rendererH2SPPM = {
            type: "class-breaks",
            field: "TOTAL_WRF",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: 0,
                    maxValue: 10,
                    symbol: this.greenClr
                }, {
                    minValue: 10,
                    maxValue: 20,
                    symbol: this.orangeClr
                }, {
                    minValue: 20,
                    maxValue: 25,
                    symbol: this.redClr
                }]
        };
        return rendererH2SPPM;
    };
    RendererService.prototype.getRendererH2SPPM = function () {
        //H2S
        //-9999 to 0.0149999
        //0.0150000 to 0.0199999
        //0.200000 to 0.0490000
        //0.0500000 to 0.099999
        //0.1000 to 9999.99999
        var rendererH2SPPM = {
            type: "class-breaks",
            field: "H2S",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: 0,
                    maxValue: 0.0149999,
                    symbol: this.severeSym
                }, {
                    minValue: 0.0150000,
                    maxValue: 0.0199999,
                    symbol: this.highSym
                }, {
                    minValue: 0.0200000,
                    maxValue: 0.0490000,
                    symbol: this.moderateSym
                }, {
                    minValue: 0.0500000,
                    maxValue: 0.099999,
                    symbol: this.moderateSym
                }, {
                    minValue: 0.1,
                    maxValue: 9999.99999,
                    symbol: this.moderateSym
                }]
        };
        return rendererH2SPPM;
    };
    RendererService.prototype.getRendererSulfReduBact = function () {
        var rendererSRB = {
            type: "class-breaks",
            field: "SRB",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: -9999,
                    maxValue: 49.9999,
                    symbol: this.severeSym
                }, {
                    minValue: 50,
                    maxValue: 199.9999,
                    symbol: this.highSym
                }, {
                    minValue: 200,
                    maxValue: 999.9999,
                    symbol: this.greenClr
                }]
        };
        return rendererSRB;
    };
    RendererService.prototype.getRendererAcidProdBact = function () {
        var rendererAPB = {
            type: "class-breaks",
            field: "APB",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: 0,
                    maxValue: 1499.9999,
                    symbol: this.severeSym
                }, {
                    minValue: 1500,
                    maxValue: 4999.9999,
                    symbol: this.highSym
                }, {
                    minValue: 5000,
                    maxValue: 10000.9999,
                    symbol: this.greenClr
                }]
        };
        return rendererAPB;
    };
    RendererService.prototype.getRendererWaterDewPoint = function () {
        var rendererWDP = {
            type: "class-breaks",
            field: "WATER_DP",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: -9999,
                    maxValue: 4.999,
                    symbol: this.limeClr
                }, {
                    minValue: 5,
                    maxValue: 7.9999,
                    symbol: this.blueClr
                }, {
                    minValue: 8,
                    maxValue: 11.9999,
                    symbol: this.yellowClr
                }, {
                    minValue: 12,
                    maxValue: 9999.9999,
                    symbol: this.cyanClr
                }]
        };
        return rendererWDP;
    };
    RendererService.prototype.getRendererOxygen = function () {
        var rendererH2SPPM = {
            type: "class-breaks",
            field: "OXYGEN",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: -9999,
                    maxValue: 39.9999,
                    symbol: this.megentaClr
                }, {
                    minValue: 40,
                    maxValue: 44.999999,
                    symbol: this.silverClr
                }, {
                    minValue: 45,
                    maxValue: 49.999999,
                    symbol: this.maroonClr
                }, {
                    minValue: 50,
                    maxValue: 54.99999,
                    symbol: this.oliveClr
                }, {
                    minValue: 55,
                    maxValue: 59.99999,
                    symbol: this.greenClr
                }, {
                    minValue: 60,
                    maxValue: 64.99999,
                    symbol: this.purpleClr
                }, {
                    minValue: 65,
                    maxValue: 99999.99999,
                    symbol: this.tealClr
                }]
        };
        return rendererH2SPPM;
    };
    RendererService.prototype.getRendererPercSMYS = function () {
        var percSMYSRenderer = {
            type: "class-breaks",
            field: "OXYGEN",
            defaultSymbol: {
                type: "simple-fill",
                color: "gray",
                outline: {
                    width: 0.5,
                    color: "white"
                }
            },
            defaultLabel: "no data",
            classBreakInfos: [{
                    minValue: -99,
                    maxValue: 1000000,
                    symbol: this.severeSym,
                    label: "SEVERE"
                }]
        };
        return percSMYSRenderer;
    };
    RendererService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RendererService);
    return RendererService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serviceUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.serviceUrl);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map