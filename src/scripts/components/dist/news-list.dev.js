"use strict";

var _dataSource = _interopRequireDefault(require("./../data/dataSource.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NewsList =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(NewsList, _HTMLElement);

  function NewsList() {
    _classCallCheck(this, NewsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewsList).apply(this, arguments));
  }

  _createClass(NewsList, [{
    key: "connectedCallback",
    //on set [category, articles]
    value: function connectedCallback() {
      this.category = this.getAttribute('category') || null;
      this.dataCall(this.category);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'category') {
        this.category = newValue;
        this.dataCall(this.category);
      }
    }
  }, {
    key: "dataCall",
    value: function dataCall(category) {
      var _this = this;

      if (typeof category === "undefined") {
        _dataSource["default"].getTopHeadlinesArticles().then(function (results) {
          _this.articles = results;

          _this.render();
        })["catch"](function (message) {
          _this.renderError(message);
        });
      } else {
        _dataSource["default"].getTopHeadlinesArticles(category).then(function (results) {
          _this.articles = results;

          _this.render();
        })["catch"](function (message) {
          _this.renderError(message);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n            ".concat(this.style(), "\n            <div class=\"container\">\n                <div class=\"d-flex bd-highlight\">\n                    <div class=\"p-2 flex-grow-1 bd-highlight\">\n                        <h2 class=\"kategori-title\">").concat(this.category ? this.category.toUpperCase() : "Umum", "</h2>\n                    </div>\n                    <div class=\"p-2 bd-highlight slide-button swiper-slide-button-prev\">\n                        <img src=\"./src/images/icons/keyboard_arrow_left-24px.svg\" alt=\"left arrow\">\n                    </div>\n                    <div class=\"p-2 bd-highlight slide-button swiper-slide-button-next\">\n                        <img src=\"./src/images/icons/keyboard_arrow_right-24px.svg\" alt=\"right arrow\">\n                    </div>\n                </div>\n                \n                <div class=\"swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        ").concat(this.printArticles(this.articles), "\n                    </div>\n                    <!-- <div class=\"swiper-pagination\"></div> -->\n                </div>\n            </div>");
      this.swiper();
    }
  }, {
    key: "renderError",
    value: function renderError(message) {
      console.log(message);
    }
  }, {
    key: "swiper",
    value: function swiper() {
      new Swiper('.swiper-container', {
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        //  autoplay: {
        //      delay: 3000
        //  }, 
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-slide-button-next',
          prevEl: '.swiper-slide-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            centeredSlides: false,
            spaceBetween: 40
          }
        }
      });
    }
  }, {
    key: "printArticles",
    value: function printArticles(articles) {
      var el = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var article = _step.value;
          el += "\n                <article class=\"swiper-slide\">\n                    <a href=\"".concat(article.url, "\" target=\"_blank\">\n                        <figure class=\"figure\">\n                            <img src=\"").concat(article.urlToImage, "\"\n                                class=\"figure-img img-fluid rounded\" alt=\"...\">\n                            <figcaption class=\"figure-caption\">\n                                <h5>").concat(article.title.slice(0, 100), "</h5>\n                                <p>").concat(article.description, "</p>\n                                <p class=\"tanggal\">").concat(article.publishedAt.slice(0, 10), "</p>\n                            </figcaption>\n                        </figure>\n                    </a>\n                </article>\n                ");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return el;
    }
  }, {
    key: "style",
    value: function style() {
      return "\n            <style>\n            news-list {\n                display: block;\n                margin-top: 1rem;\n            }\n\n            .swiper-container {\n                width: 100%;\n                height: 425px;\n            }\n\n            .kategori-title {\n                border-left: 4px solid turquoise; \n                padding-left: 10px;\n            }\n\n            .slide-button {\n                cursor: pointer;\n            }\n\n            .slide-button img {\n                width: 40px;\n                height: 40px;\n            }\n\n            .swiper-slide {\n                text-align: center;\n                font-size: 18px;\n\n                /* Center slide text vertically */\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: -webkit-flex;\n                display: flex;\n                -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                -webkit-justify-content: center;\n                justify-content: center;\n                -webkit-box-align: center;\n                -ms-flex-align: center;\n                -webkit-align-items: center;\n                align-items: center;\n            } \n            \n            .swiper-slide img {\n                max-height: 50vh;\n            } \n\n            .swiper-slide h5 {\n                color: black;\n            }\n\n            figcaption {\n                text-align: left;\n            }\n\n            .tanggal {\n                font-size: .9rem;\n            }\n            </style>\n        ";
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['category'];
    }
  }]);

  return NewsList;
}(_wrapNativeSuper(HTMLElement));

customElements.define('news-list', NewsList);