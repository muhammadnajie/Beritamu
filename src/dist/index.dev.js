"use strict";

require("./scripts/components/nav-bar.js");

require("./scripts/components/news-list.js");

require("./scripts/components/footer-beritamu.js");

var _main = _interopRequireDefault(require("./scripts/view/main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
    Import Components
    * Komponen Navbar
    * 
*/

/* 
    Import additional package
    * Bootstrap
    *
*/
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

/* 
    Import app core
*/
document.addEventListener('DOMContentLoaded', _main["default"]);