/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction loadComics() {\n  return _loadComics.apply(this, arguments);\n}\n\nfunction _loadComics() {\n  _loadComics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var tableNode, response, masJSON;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            tableNode = document.getElementById('tableComics');\n\n            while (tableNode.childNodes[1]) {\n              tableNode.childNodes[1].remove();\n            }\n\n            document.getElementById('countcomics').value = document.getElementById('comicsname').value = document.getElementById('numbercomics').value = '';\n            _context.next = 5;\n            return fetch('/form.html');\n\n          case 5:\n            response = _context.sent;\n            _context.next = 8;\n            return response.json();\n\n          case 8:\n            masJSON = _context.sent;\n            masJSON.forEach(function (ob, i) {\n              var tr = document.createElement('tr');\n              var th1 = document.createElement('th');\n              var th2 = document.createElement('th');\n              var th3 = document.createElement('th');\n              th1.innerText = i + 1;\n              th2.innerText = ob.Comics;\n              th3.innerText = ob.Count;\n              tr.appendChild(th1);\n              tr.appendChild(th2);\n              tr.appendChild(th3);\n              document.getElementById('tableComics').appendChild(tr);\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _loadComics.apply(this, arguments);\n}\n\nloadComics();\n\nfunction createProduct() {\n  return _createProduct.apply(this, arguments);\n}\n\nfunction _createProduct() {\n  _createProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('/postcomics', {\n              method: \"POST\",\n              headers: {\n                'Content-type': 'application/json;charset=utf-8'\n              },\n              body: JSON.stringify({\n                Comics: document.getElementById('comicsname').value,\n                Count: document.getElementById('countcomics').value\n              })\n            });\n\n          case 2:\n            response = _context2.sent;\n\n            if (response.ok) {\n              loadComics();\n            } else if (response.status == 500) {\n              alert(\"Ошибка сервера. Попробуйте позже.\");\n            }\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _createProduct.apply(this, arguments);\n}\n\nfunction redactProduct() {\n  return _redactProduct.apply(this, arguments);\n}\n\nfunction _redactProduct() {\n  _redactProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var name, number, count, response;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            name = document.getElementById('comicsname').value;\n            number = document.getElementById('numbercomics').value;\n            count = document.getElementById('countcomics').value;\n\n            if (!(name == '' || number == '' || count == '')) {\n              _context3.next = 9;\n              break;\n            }\n\n            _context3.next = 6;\n            return fetch('/postcomicsredact', {\n              method: \"PATCH\",\n              headers: {\n                'Content-type': 'application/json;charset=utf-8'\n              },\n              body: JSON.stringify({\n                Number: number,\n                Comics: name\n              })\n            });\n\n          case 6:\n            response = _context3.sent;\n            _context3.next = 12;\n            break;\n\n          case 9:\n            _context3.next = 11;\n            return fetch('/postcomicsredact', {\n              method: \"PUT\",\n              headers: {\n                'Content-type': 'application/json;charset=utf-8'\n              },\n              body: JSON.stringify({\n                Number: number,\n                Comics: name,\n                Count: count\n              })\n            });\n\n          case 11:\n            response = _context3.sent;\n\n          case 12:\n            if (response.ok) {\n              loadComics();\n            } else if (response.status == 500) {\n              alert(\"Ошибка сервера. Попробуйте позже.\");\n            }\n\n          case 13:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _redactProduct.apply(this, arguments);\n}\n\nfunction deleteProduct() {\n  return _deleteProduct.apply(this, arguments);\n}\n\nfunction _deleteProduct() {\n  _deleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch('/deletecomics', {\n              method: \"DELETE\",\n              headers: {\n                'Content-type': 'application/json;charset=utf-8'\n              },\n              body: JSON.stringify({\n                Comics: document.getElementById('numbercomics').value\n              })\n            });\n\n          case 2:\n            response = _context4.sent;\n\n            if (response.ok) {\n              loadComics();\n            } else if (response.status == 500) {\n              alert(\"Ошибка сервера. Попробуйте позже.\");\n            }\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _deleteProduct.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucG0tdHV0b3JpYWwvLi9zcmMvc2NyaXB0cy9zY3JpcHRzLmpzPzI0NTciXSwibmFtZXMiOlsibG9hZENvbWljcyIsInRhYmxlTm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwidmFsdWUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIm1hc0pTT04iLCJmb3JFYWNoIiwib2IiLCJpIiwidHIiLCJjcmVhdGVFbGVtZW50IiwidGgxIiwidGgyIiwidGgzIiwiaW5uZXJUZXh0IiwiQ29taWNzIiwiQ291bnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVByb2R1Y3QiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInN0YXR1cyIsImFsZXJ0IiwicmVkYWN0UHJvZHVjdCIsIm5hbWUiLCJudW1iZXIiLCJjb3VudCIsIk51bWJlciIsImRlbGV0ZVByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7U0FDZ0JBLFU7Ozs7O3dFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxZQUFBQSxTQURQLEdBQ21CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FEbkI7O0FBRUcsbUJBQU9GLFNBQVMsQ0FBQ0csVUFBVixDQUFxQixDQUFyQixDQUFQO0FBQ0lILGNBQUFBLFNBQVMsQ0FBQ0csVUFBVixDQUFxQixDQUFyQixFQUF3QkMsTUFBeEI7QUFESjs7QUFFQUgsWUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDRyxLQUF2QyxHQUErQ0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRyxLQUF0QyxHQUE4Q0osUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDRyxLQUF4QyxHQUFnRCxFQUE3STtBQUpIO0FBQUEsbUJBS3dCQyxLQUFLLENBQUMsWUFBRCxDQUw3Qjs7QUFBQTtBQUtPQyxZQUFBQSxR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d0IsY0FBeEIsRUFBd0NHO0FBRC9CLGVBQWY7QUFMa0MsYUFBbEIsQ0FEN0I7O0FBQUE7QUFDT0UsWUFBQUEsUUFEUDs7QUFVRyxnQkFBSUEsUUFBUSxDQUFDcUIsRUFBYixFQUFpQjtBQUNiN0IsY0FBQUEsVUFBVTtBQUNiLGFBRkQsTUFHTSxJQUFHUSxRQUFRLENBQUNzQixNQUFULElBQWlCLEdBQXBCLEVBQXdCO0FBQ3pCQyxjQUFBQSxLQUFLLENBQUMsbUNBQUQsQ0FBTDtBQUNIOztBQWZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIGFzeW5jIGZ1bmN0aW9uIGxvYWRDb21pY3MoKSB7XHJcbiAgICBsZXQgdGFibGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxlQ29taWNzJyk7XHJcbiAgICB3aGlsZSAodGFibGVOb2RlLmNoaWxkTm9kZXNbMV0pXHJcbiAgICAgICAgdGFibGVOb2RlLmNoaWxkTm9kZXNbMV0ucmVtb3ZlKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRjb21pY3MnKS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21pY3NuYW1lJykudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyY29taWNzJykudmFsdWUgPSAnJztcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZm9ybS5odG1sJyk7XHJcbiAgICBsZXQgbWFzSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIG1hc0pTT04uZm9yRWFjaCgob2IsIGkpID0+IHtcclxuICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGxldCB0aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIGxldCB0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIGxldCB0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoMS5pbm5lclRleHQgPSBpICsgMTtcclxuICAgICAgICB0aDIuaW5uZXJUZXh0ID0gb2IuQ29taWNzO1xyXG4gICAgICAgIHRoMy5pbm5lclRleHQgPSBvYi5Db3VudDtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aDEpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRoMik7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGgzKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVDb21pY3MnKS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9KTtcclxufVxyXG5sb2FkQ29taWNzKCk7XHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdCgpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcG9zdGNvbWljcycsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIENvbWljczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWljc25hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgQ291bnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGNvbWljcycpLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbG9hZENvbWljcygpO1xyXG4gICAgfVxyXG4gICAgIGVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzPT01MDApe1xyXG4gICAgICAgICBhbGVydChcItCe0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsC4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS5cIik7XHJcbiAgICAgfVxyXG59XHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gcmVkYWN0UHJvZHVjdCgpIHtcclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbWljc25hbWUnKS52YWx1ZTtcclxuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyY29taWNzJykudmFsdWU7XHJcbiAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRjb21pY3MnKS52YWx1ZTtcclxuICAgIGxldCByZXNwb25zZTtcclxuICAgIGlmIChuYW1lID09ICcnIHx8IG51bWJlciA9PSAnJyB8fCBjb3VudCA9PSAnJykge1xyXG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wb3N0Y29taWNzcmVkYWN0Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIE51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgQ29taWNzOiBuYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wb3N0Y29taWNzcmVkYWN0Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBOdW1iZXI6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIENvbWljczogbmFtZSxcclxuICAgICAgICAgICAgICAgIENvdW50OiBjb3VudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbG9hZENvbWljcygpO1xyXG4gICAgfVxyXG4gICAgIGVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzPT01MDApe1xyXG4gICAgICAgICBhbGVydChcItCe0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsC4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS5cIik7XHJcbiAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KCkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kZWxldGVjb21pY3MnLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIENvbWljczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcmNvbWljcycpLnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbG9hZENvbWljcygpO1xyXG4gICAgfVxyXG4gICAgIGVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzPT01MDApe1xyXG4gICAgICAgICBhbGVydChcItCe0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsC4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS5cIik7XHJcbiAgICAgfVxyXG59Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3NjcmlwdHMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/scripts.js\n");
/******/ })()
;