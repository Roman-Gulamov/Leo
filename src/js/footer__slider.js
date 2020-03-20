//! SlIDER //
"use strict";
let multiItemSlider = (function() {
  return function(selector, config) {
    let _mainElement = document.querySelector(selector),
      _sliderWrapper = _mainElement.querySelector(".footer__slider__wrapper"),
      _sliderItems = _mainElement.querySelectorAll(".footer__slider__item"),
      _sliderControls = _mainElement.querySelectorAll(
        ".footer__slider__control"
      ),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
      _positionLeftItem = 0,
      _transform = 0,
      _step = (_itemWidth / _wrapperWidth) * 100,
      _items = [];

    _sliderItems.forEach(function(item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    let position = {
      getItemMin: function() {
        let indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function() {
        let indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function() {
        return _items[position.getItemMin()].position;
      },
      getMax: function() {
        return _items[position.getItemMax()].position;
      }
    };

    let _transformItem = function(direction) {
      let nextItem;
      if (direction === "right") {
        _positionLeftItem++;
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >
          position.getMax()
        ) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform =
            "translateX(" + _items[nextItem].transform + "%)";
        }
        _transform -= _step;
      }
      if (direction === "left") {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform =
            "translateX(" + _items[nextItem].transform + "%)";
        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };

    let _controlClick = function(e) {
      if (e.target.classList.contains("footer__slider__control")) {
        e.preventDefault();
        let direction = e.target.classList.contains(
          "footer__slider__control_right"
        )
          ? "right"
          : "left";
        _transformItem(direction);
      }
    };

    let _setUpListeners = function() {
      _sliderControls.forEach(function(item) {
        item.addEventListener("click", _controlClick);
      });
    };

    _setUpListeners();

    return {
      right: function() {
        _transformItem("right");
      },
      left: function() {
        _transformItem("left");
      }
    };
  };
})();

let slider = multiItemSlider(".footer__slider");
//! -SlIDER- //
