"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var main = function main() {
  navbarActiveSign();
  jakartaTimeDisplay();
  swiperSlider();
  categoryBtnGroup();
};

var navbarActiveSign = function navbarActiveSign() {
  var navLinks = document.querySelectorAll('.nav-link');

  var navLinkActive = function navLinkActive(selectedNavLink) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = navLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var navLink = _step.value;

        if (navLink.classList.contains('active')) {
          navLink.classList.remove('active');
        }
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

    selectedNavLink.classList.add('active');
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = navLinks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var navLink = _step2.value;
      navLink.addEventListener('click', function () {
        navLinkActive(this);
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var jakartaTimeDisplay = function jakartaTimeDisplay() {
  var timeClock = document.querySelector('.time');

  var displayTime = function displayTime() {
    var now = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta'
    });
    timeClock.innerHTML = now;
  };

  var updateTime = function updateTime() {
    displayTime();
    setTimeout(updateTime, 1000);
  };

  updateTime();
};

var swiperSlider = function swiperSlider() {
  var swiper = new Swiper('.swiper-container', {
    //  slidesPerView: '3',
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
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
};

var categoryBtnGroup = function categoryBtnGroup() {
  var newsListEl = document.querySelector('news-list');
  var btnsSelectNewsCategory = document.querySelectorAll('.btn');
  btnsSelectNewsCategory.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var categoryAtt = this.getAttribute('category') || null;

      if (categoryAtt) {
        newsListEl.setAttribute('category', this.getAttribute('category'));
      } else {
        newsListEl.removeAttribute('category');
      }
    });
  });
};

var _default = main;
exports["default"] = _default;