/*
    Import Components
    * Komponen Navbar
    * 
*/
import "./scripts/components/nav-bar.js";
import "./scripts/components/news-list.js";
import "./scripts/components/footer-beritamu.js";

/* 
    Import third-party styling packages
    * Bootstrap
    * Swiper
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';

/* 
    Import third-party scripts packages
    * Bootstrap
*/
import 'bootstrap/dist/js/bootstrap.min.js';

/* 
    Import app core
*/
import main from "./scripts/view/main.js";


/*
    Import custom css
*/
import './styles/style.css';


document.addEventListener('DOMContentLoaded', main);

