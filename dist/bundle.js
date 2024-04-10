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
    //if table is not empty we check for content
    if (this.table[index]) {
      let currentNode = this.table[index]
      // go deeper if keys dont match and also if nextNode is not null
      while (Object.keys(currentNode)[0]!==key && currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      }
      //if keys match, update value
      if (Object.keys(currentNode)[0]===key) {
        currentNode[key] = value
      } 
      //else we are at end of linkedList, add new node here
      else {
        currentNode.nextNode = new Node(key, value)
      }  
    } else {
      this.table[index] = new Node(key, value)
    }
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
  constructor(key,value, nextNode=null) {
    this[key] = value
    this.nextNode = nextNode
  }
}
let hashmap = new HashMap()

hashmap.set('carlos', "value1")
hashmap.set('carla', "n1")
hashmap.set('carla', "n2")
hashmap.set('carla', "newesr")

hashmap.set('jon', "j1")
hashmap.set('jon', "j2")
hashmap.set('carla', "n3")
hashmap.set('jon', "j3")
hashmap.set('carlos', "c3")

console.log(hashmap.table)



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIEhhc2hNYXB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFibGUgPSBbXVxuICB9XG5cbiAgaGFzaChrZXkpIHtcbiAgICBsZXQgaGFzaENvZGUgPSAwXG4gICAgbGV0IGhhc2hTaXplID0gMTZcbiAgICBjb25zdCBwcmltZU51bWJlciA9IDMxXG4gICAgZm9yIChsZXQgaT0wOyBpPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW1iZXIqIGhhc2hDb2RlICsga2V5LmNoYXJDb2RlQXQoaSlcbiAgICAgIGhhc2hDb2RlICU9IGhhc2hTaXplXG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2hDb2RlIFxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIC8vaWYgdGFibGUgaXMgbm90IGVtcHR5IHdlIGNoZWNrIGZvciBjb250ZW50XG4gICAgaWYgKHRoaXMudGFibGVbaW5kZXhdKSB7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuICAgICAgLy8gZ28gZGVlcGVyIGlmIGtleXMgZG9udCBtYXRjaCBhbmQgYWxzbyBpZiBuZXh0Tm9kZSBpcyBub3QgbnVsbFxuICAgICAgd2hpbGUgKE9iamVjdC5rZXlzKGN1cnJlbnROb2RlKVswXSE9PWtleSAmJiBjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgfVxuICAgICAgLy9pZiBrZXlzIG1hdGNoLCB1cGRhdGUgdmFsdWVcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50Tm9kZSlbMF09PT1rZXkpIHtcbiAgICAgICAgY3VycmVudE5vZGVba2V5XSA9IHZhbHVlXG4gICAgICB9IFxuICAgICAgLy9lbHNlIHdlIGFyZSBhdCBlbmQgb2YgbGlua2VkTGlzdCwgYWRkIG5ldyBub2RlIGhlcmVcbiAgICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlKGtleSwgdmFsdWUpXG4gICAgICB9ICBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZVtpbmRleF0gPSBuZXcgTm9kZShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGlmICh0aGlzLnRhYmxlW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFibGVbaW5kZXhdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgaWYgKHRoaXMudGFibGVbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBpZiAodGhpcy50YWJsZVtpbmRleF0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlW2luZGV4XVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlLmxlbmd0aFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cbn1cblxuY2xhc3MgTm9kZXtcbiAgY29uc3RydWN0b3Ioa2V5LHZhbHVlLCBuZXh0Tm9kZT1udWxsKSB7XG4gICAgdGhpc1trZXldID0gdmFsdWVcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGVcbiAgfVxufVxubGV0IGhhc2htYXAgPSBuZXcgSGFzaE1hcCgpXG5cbmhhc2htYXAuc2V0KCdjYXJsb3MnLCBcInZhbHVlMVwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJuMVwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJuMlwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJuZXdlc3JcIilcblxuaGFzaG1hcC5zZXQoJ2pvbicsIFwiajFcIilcbmhhc2htYXAuc2V0KCdqb24nLCBcImoyXCIpXG5oYXNobWFwLnNldCgnY2FybGEnLCBcIm4zXCIpXG5oYXNobWFwLnNldCgnam9uJywgXCJqM1wiKVxuaGFzaG1hcC5zZXQoJ2NhcmxvcycsIFwiYzNcIilcblxuY29uc29sZS5sb2coaGFzaG1hcC50YWJsZSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=