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
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
      variant: "dark",
      style: {
        'max-width': '600px'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "d-block w-100",
          src: "/images/rafting.jpg",
          alt: "First slide"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Caption, {
          style: {
            'color': '#3e3e3e'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "First slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Nulla vitae elit libero, a pharetra augue mollis interdum."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "d-block w-100",
          src: "/images/skiing.jpg",
          alt: "Second slide"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Caption, {
          style: {
            'color': '#3e3e3e'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Second slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "d-block w-100",
          src: "/images/trekking.jpg",
          alt: "Third slide"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__.default.Caption, {
          style: {
            'color': '#3e3e3e'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Third slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1tpZF0uanMiXSwibmFtZXMiOlsiRXZlbnREZXRhaWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXZlbnRJRCIsInF1ZXJ5IiwiaWQiLCJldmVudCIsImdldEV2ZW50QnlJZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQTdCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyx5REFBWSxDQUFDSixPQUFELENBQTFCOztBQUVBLE1BQUksQ0FBQ0csS0FBTCxFQUFZO0FBQ1Ysd0JBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwyREFBMkNBLEtBQUssQ0FBQ0UsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw2REFBRDtBQUFVLGFBQU8sRUFBQyxNQUFsQjtBQUF5QixXQUFLLEVBQUU7QUFBQyxxQkFBWTtBQUFiLE9BQWhDO0FBQUEsOEJBQ0UsOERBQUMsa0VBQUQ7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsZUFEWjtBQUVFLGFBQUcsRUFBQyxxQkFGTjtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSw4REFBQyxxRUFBRDtBQUFrQixlQUFLLEVBQUU7QUFBQyxxQkFBUTtBQUFULFdBQXpCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRSw4REFBQyxrRUFBRDtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxlQURaO0FBRUUsYUFBRyxFQUFDLG9CQUZOO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FLDhEQUFDLHFFQUFEO0FBQWtCLGVBQUssRUFBRTtBQUFDLHFCQUFRO0FBQVQsV0FBekI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixlQXdCRSw4REFBQyxrRUFBRDtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxlQURaO0FBRUUsYUFBRyxFQUFDLHNCQUZOO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FLDhEQUFDLHFFQUFEO0FBQWtCLGVBQUssRUFBRTtBQUFDLHFCQUFRO0FBQVQsV0FBekI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0dBekRRUixZO1VBQ1FFLGtEOzs7S0FEUkYsWTtBQTJEVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvW2lkXS4wYjAxZmQ3NWY4MGE2ZGMyMDM0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEV2ZW50QnlJZCB9IGZyb20gXCIuLi8uLi9kdW1teS1kYXRhXCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnXHJcblxyXG5mdW5jdGlvbiBFdmVudERldGFpbHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZXZlbnRJRCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBjb25zdCBldmVudCA9IGdldEV2ZW50QnlJZChldmVudElEKTtcclxuXHJcbiAgaWYgKCFldmVudCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+Tm8gU3VjaCBldmVudCBmb3VuZCEhPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5UaGlzIGlzIHRoZSBldmVudCBkZXRhaWxzIHUgYXNrZWQgZm9yIHtldmVudC50aXRsZX08L2gxPlxyXG4gICAgICA8Q2Fyb3VzZWwgdmFyaWFudD1cImRhcmtcIiBzdHlsZT17eydtYXgtd2lkdGgnOic2MDBweCd9fT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcmFmdGluZy5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcm91c2VsLkNhcHRpb24gc3R5bGU9e3snY29sb3InOicjM2UzZTNlJ319PlxyXG4gICAgICAgICAgICA8aDM+Rmlyc3Qgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2tpaW5nLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIHN0eWxlPXt7J2NvbG9yJzonIzNlM2UzZSd9fT5cclxuICAgICAgICAgICAgPGgzPlNlY29uZCBzbGlkZSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdHJla2tpbmcuanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbiBzdHlsZT17eydjb2xvcic6JyMzZTNlM2UnfX0+XHJcbiAgICAgICAgICAgIDxoMz5UaGlyZCBzbGlkZSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==