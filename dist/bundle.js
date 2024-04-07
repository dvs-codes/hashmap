/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
class HashMap{
  constructor() {
    this.table = []
  }

  hash(key) {
    let hashCode = 0
    let hashSize = 16
    const primeNumber = 31
    for (let i=0; i< key.length; i++) {
      hashCode = primeNumber* hashCode + key.charCodeAt(i)
      hashCode %= hashSize
    }

    return hashCode 
  }

  set(key, value) {
    let index = this.hash(key)
    this.table[index] = new Node(value)
  }

  get(key) {
    let index = this.hash(key)
    if (this.table[index]) {
      return this.table[index]
    } else {
      return null
    }
  }

  has(key) {
    let index = this.hash(key)
    if (this.table[index]) {
      return true
    } else {
      return false
    }
  }

  remove(key) {
    let index = this.hash(key)
    if (this.table[index]) {
      delete this.table[index]
      return true
    } else {
      return false
    }
  }

  length() {
    return this.table.length
  }

  clear() {
    this.table = []
  }
}

class Node{
  constructor(value, nextNode=null) {
    this.value = value
    this.nextNode = nextNode
  }
}
let hashmap = new HashMap()

hashmap.set('carlos', "value1")
hashmap.set('carlos', "value2")
hashmap.set('carla', "n1")
console.log(hashmap.get('john'))
console.log(hashmap.get('carla'))

console.log(hashmap.table)
console.log(hashmap.length())

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgSGFzaE1hcHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cblxuICBoYXNoKGtleSkge1xuICAgIGxldCBoYXNoQ29kZSA9IDBcbiAgICBsZXQgaGFzaFNpemUgPSAxNlxuICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzFcbiAgICBmb3IgKGxldCBpPTA7IGk8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaENvZGUgJT0gaGFzaFNpemVcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGUgXG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgdGhpcy50YWJsZVtpbmRleF0gPSBuZXcgTm9kZSh2YWx1ZSlcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGlmICh0aGlzLnRhYmxlW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFibGVbaW5kZXhdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgaWYgKHRoaXMudGFibGVbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBpZiAodGhpcy50YWJsZVtpbmRleF0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlW2luZGV4XVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlLmxlbmd0aFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cbn1cblxuY2xhc3MgTm9kZXtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5leHROb2RlPW51bGwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGVcbiAgfVxufVxubGV0IGhhc2htYXAgPSBuZXcgSGFzaE1hcCgpXG5cbmhhc2htYXAuc2V0KCdjYXJsb3MnLCBcInZhbHVlMVwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxvcycsIFwidmFsdWUyXCIpXG5oYXNobWFwLnNldCgnY2FybGEnLCBcIm4xXCIpXG5jb25zb2xlLmxvZyhoYXNobWFwLmdldCgnam9obicpKVxuY29uc29sZS5sb2coaGFzaG1hcC5nZXQoJ2NhcmxhJykpXG5cbmNvbnNvbGUubG9nKGhhc2htYXAudGFibGUpXG5jb25zb2xlLmxvZyhoYXNobWFwLmxlbmd0aCgpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9