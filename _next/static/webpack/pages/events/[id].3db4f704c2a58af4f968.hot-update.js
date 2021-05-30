self["webpackHotUpdate_N_E"]("pages/events/[id]",{

/***/ "./pages/events/[id].js":
/*!******************************!*\
  !*** ./pages/events/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\training\\Next\\next-intro\\pages\\events\\[id].js",
    _s = $RefreshSig$();





function EventDetails() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var eventID = router.query.id;
  var event = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_2__.getEventById)(eventID);

  if (!event) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "No Such event found!!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["This is the event details u asked for ", event.title]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "carouselExampleIndicators",
      className: "carousel slide",
      "data-bs-ride": "carousel",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "carousel-indicators",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleIndicators",
          "data-bs-slide-to": "0",
          className: "active",
          "aria-current": "true",
          "aria-label": "Slide 1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleIndicators",
          "data-bs-slide-to": "1",
          "aria-label": "Slide 2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          "data-bs-target": "#carouselExampleIndicators",
          "data-bs-slide-to": "2",
          "aria-label": "Slide 3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "carousel-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item active",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/rafting.jpg",
            className: "d-block w-100",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/skiing.jpg",
            className: "d-block w-100",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "carousel-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/trekking.jpg",
            className: "d-block w-100",
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "carousel-control-prev",
        type: "button",
        "data-bs-target": "#carouselExampleIndicators",
        "data-bs-slide": "prev",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "carousel-control-prev-icon",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "visually-hidden",
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "carousel-control-next",
        type: "button",
        "data-bs-target": "#carouselExampleIndicators",
        "data-bs-slide": "next",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "carousel-control-next-icon",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "visually-hidden",
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(EventDetails, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = EventDetails;
/* harmony default export */ __webpack_exports__["default"] = (EventDetails);

var _c;

$RefreshReg$(_c, "EventDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tpZF0uanMiXSwibmFtZXMiOlsiRXZlbnREZXRhaWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXZlbnRJRCIsInF1ZXJ5IiwiaWQiLCJldmVudCIsImdldEV2ZW50QnlJZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBN0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHlEQUFZLENBQUNKLE9BQUQsQ0FBMUI7O0FBRUEsTUFBSSxDQUFDRyxLQUFMLEVBQVk7QUFDVix3QkFDRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDJEQUEyQ0EsS0FBSyxDQUFDRSxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXlDRTtBQUNFLFFBQUUsRUFBQywyQkFETDtBQUVFLGVBQVMsRUFBQyxnQkFGWjtBQUdFLHNCQUFhLFVBSGY7QUFBQSw4QkFLRTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsNEJBQWUsNEJBRmpCO0FBR0UsOEJBQWlCLEdBSG5CO0FBSUUsbUJBQVMsRUFBQyxRQUpaO0FBS0UsMEJBQWEsTUFMZjtBQU1FLHdCQUFXO0FBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSw0QkFBZSw0QkFGakI7QUFHRSw4QkFBaUIsR0FIbkI7QUFJRSx3QkFBVztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFlRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsNEJBQWUsNEJBRmpCO0FBR0UsOEJBQWlCLEdBSG5CO0FBSUUsd0JBQVc7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBMkJFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLHFCQUFUO0FBQStCLHFCQUFTLEVBQUMsZUFBekM7QUFBeUQsZUFBRyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxvQkFBVDtBQUE4QixxQkFBUyxFQUFDLGVBQXhDO0FBQXdELGVBQUcsRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQU9FO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsc0JBQVQ7QUFBZ0MscUJBQVMsRUFBQyxlQUExQztBQUEwRCxlQUFHLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLGVBc0NFO0FBQ0UsaUJBQVMsRUFBQyx1QkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsMEJBQWUsNEJBSGpCO0FBSUUseUJBQWMsTUFKaEI7QUFBQSxnQ0FNRTtBQUNFLG1CQUFTLEVBQUMsNEJBRFo7QUFFRSx5QkFBWTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFVRTtBQUFNLG1CQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRDRixlQWtERTtBQUNFLGlCQUFTLEVBQUMsdUJBRFo7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLDBCQUFlLDRCQUhqQjtBQUlFLHlCQUFjLE1BSmhCO0FBQUEsZ0NBTUU7QUFDRSxtQkFBUyxFQUFDLDRCQURaO0FBRUUseUJBQVk7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBVUU7QUFBTSxtQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkdEOztHQXhIUVIsWTtVQUNRRSxrRDs7O0tBRFJGLFk7QUEwSFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1tpZF0uM2RiNGY3MDRjMmE1OGFmNGY5NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRFdmVudEJ5SWQgfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YVwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIjtcclxuXHJcbmZ1bmN0aW9uIEV2ZW50RGV0YWlscygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBldmVudElEID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGV2ZW50ID0gZ2V0RXZlbnRCeUlkKGV2ZW50SUQpO1xyXG5cclxuICBpZiAoIWV2ZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5ObyBTdWNoIGV2ZW50IGZvdW5kISE8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRoaXMgaXMgdGhlIGV2ZW50IGRldGFpbHMgdSBhc2tlZCBmb3Ige2V2ZW50LnRpdGxlfTwvaDE+XHJcbiAgICAgIHsvKiA8Q2Fyb3VzZWw+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3JhZnRpbmcuanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8aDM+Rmlyc3Qgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2tpaW5nLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8aDM+U2Vjb25kIHNsaWRlIGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L3A+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy90cmVra2luZy5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJUaGlyZCBzbGlkZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8aDM+VGhpcmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZVwiXHJcbiAgICAgICAgZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgZGF0YS1icy1zbGlkZS10bz1cIjBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNsaWRlIDFcIlxyXG4gICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtc2xpZGUtdG89XCIxXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNsaWRlIDJcIlxyXG4gICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtc2xpZGUtdG89XCIyXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNsaWRlIDNcIlxyXG4gICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JhZnRpbmcuanBnXCIgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2tpaW5nLmpwZ1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RyZWtraW5nLmpwZ1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICBkYXRhLWJzLXNsaWRlPVwicHJldlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgICAgZGF0YS1icy1zbGlkZT1cIm5leHRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCJcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==