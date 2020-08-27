"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataSource =
/*#__PURE__*/
function () {
  function DataSource() {
    _classCallCheck(this, DataSource);
  }

  _createClass(DataSource, null, [{
    key: "getEverythingArticles",
    value: function getEverythingArticles(category) {
      var url = 'https://newsapi.org/v2';
      var endpoint = '/top-headlines';
      var parameterOption = "?country=id&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7"; //

      category ? parameterOption += "&category=".concat(category) : "";
      return fetch("".concat(url + endpoint + parameterOption)).then(function (response) {
        //convert response to JSON
        response = response.json();
        /* response.totalResults */

        if (response.articles) {
          return Promise.resolve(response.articles);
        } else {
          return Promise.reject("".concat(response.status, ", Gagal mengambil data"));
        }
      });
    }
  }, {
    key: "getTopHeadlinesArticles",
    value: function getTopHeadlinesArticles() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url = 'https://newsapi.org/v2';
      var endpoint = '/top-headlines';
      var parameterOption = "?country=id&apiKey=27de8fd90e3d48f8a9cccba3b51a07f7"; //

      category ? parameterOption += "&category=".concat(category) : "";
      return fetch(url + endpoint + parameterOption).then(function (response) {
        //convert response to JSON
        return response.json();
      }).then(function (responseJson) {
        console.log(responseJson.articles);
        /* response.totalResults */

        if (responseJson.articles) {
          return Promise.resolve(responseJson.articles);
        } else {
          return Promise.reject("".concat(responseJson.status, ", Gagal mengambil data"));
        }
      });
    }
  }]);

  return DataSource;
}();

var _default = DataSource;
exports["default"] = _default;