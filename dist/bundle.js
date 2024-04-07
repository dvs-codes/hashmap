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
class LinkedList {
 constructor() {
  this.list = null
 }

  append(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode 
      }
      currentNode.nextNode = new Node(value)
    }
  }

  prepend(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      this.list = new Node(value, this.list)
    }
  }

  get size() {
    let length = 0
    let currentNode = this.list
    if (currentNode===null) {
      return length
    } else  {
      while (currentNode.nextNode!==null) {
        currentNode =  currentNode.nextNode
        length++
      } return length+1
    }
  }

  get head() {
    return this.list
  }

  get tail() {
    if (this.list.nextNode===null) {
      return this.list
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      } return currentNode
    }
  }

  at(index) {
    let currentNode = this.list
    for (let i=0; i<index;i++) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  pop() {
    let currentNode = this.list
    while(currentNode.nextNode.nextNode!==null) {
      currentNode = currentNode.nextNode
    }
    currentNode.nextNode = null 
  }

  contains(value) {
    let currentNode=this.list
    if (currentNode.value===value) {
      return true
    } else {
      while(currentNode.nextNode!==null) {
        if(currentNode.nextNode.value===value) {
          return true
        } 
        currentNode = currentNode.nextNode
      } return false
    }
  }

  find(value) {
    let currentNode=this.list
    let index = 0
    if (currentNode.value===value) {
      return index
    } else {
      index = 1
      while(currentNode.nextNode!==null) {
        if(currentNode.nextNode.value===value) {
          return index
        } 
        index++
        currentNode = currentNode.nextNode
      } return null
    }
  }

  get toString() {
    let currentNode = this.list
    let stringedList = ''
    if (this.list ===null) {
      return `(null)`
    } else {
      while(currentNode.nextNode!==null) {
        stringedList += `(${currentNode.value})->`
        currentNode = currentNode.nextNode
      }
      return stringedList += `(${currentNode.value})-> null`
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let newList = new LinkedList()

newList.append('val1')
newList.append('val2')
newList.append('val3')
newList.prepend('head')
newList.append('val4')
newList.append('tail')
newList.append('tails2')
newList.prepend('head2')

console.log(newList)
console.log(newList.toString)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIExpbmtlZExpc3Qge1xuIGNvbnN0cnVjdG9yKCkge1xuICB0aGlzLmxpc3QgPSBudWxsXG4gfVxuXG4gIGFwcGVuZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmxpc3Q9PT1udWxsKSB7XG4gICAgICB0aGlzLmxpc3QgPSBuZXcgTm9kZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5saXN0XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGUgXG4gICAgICB9XG4gICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHByZXBlbmQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5saXN0PT09bnVsbCkge1xuICAgICAgdGhpcy5saXN0ID0gbmV3IE5vZGUodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdCA9IG5ldyBOb2RlKHZhbHVlLCB0aGlzLmxpc3QpXG4gICAgfVxuICB9XG5cbiAgZ2V0IHNpemUoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDBcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmxpc3RcbiAgICBpZiAoY3VycmVudE5vZGU9PT1udWxsKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfSBlbHNlICB7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gIGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIGxlbmd0aCsrXG4gICAgICB9IHJldHVybiBsZW5ndGgrMVxuICAgIH1cbiAgfVxuXG4gIGdldCBoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RcbiAgfVxuXG4gIGdldCB0YWlsKCkge1xuICAgIGlmICh0aGlzLmxpc3QubmV4dE5vZGU9PT1udWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5saXN0XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMubGlzdFxuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICB9IHJldHVybiBjdXJyZW50Tm9kZVxuICAgIH1cbiAgfVxuXG4gIGF0KGluZGV4KSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5saXN0XG4gICAgZm9yIChsZXQgaT0wOyBpPGluZGV4O2krKykge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudE5vZGVcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmxpc3RcbiAgICB3aGlsZShjdXJyZW50Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICB9XG4gICAgY3VycmVudE5vZGUubmV4dE5vZGUgPSBudWxsIFxuICB9XG5cbiAgY29udGFpbnModmFsdWUpIHtcbiAgICBsZXQgY3VycmVudE5vZGU9dGhpcy5saXN0XG4gICAgaWYgKGN1cnJlbnROb2RlLnZhbHVlPT09dmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlKGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICBpZihjdXJyZW50Tm9kZS5uZXh0Tm9kZS52YWx1ZT09PXZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgfSByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmaW5kKHZhbHVlKSB7XG4gICAgbGV0IGN1cnJlbnROb2RlPXRoaXMubGlzdFxuICAgIGxldCBpbmRleCA9IDBcbiAgICBpZiAoY3VycmVudE5vZGUudmFsdWU9PT12YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gMVxuICAgICAgd2hpbGUoY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGlmKGN1cnJlbnROb2RlLm5leHROb2RlLnZhbHVlPT09dmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgfSBcbiAgICAgICAgaW5kZXgrK1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICB9IHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0IHRvU3RyaW5nKCkge1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMubGlzdFxuICAgIGxldCBzdHJpbmdlZExpc3QgPSAnJ1xuICAgIGlmICh0aGlzLmxpc3QgPT09bnVsbCkge1xuICAgICAgcmV0dXJuIGAobnVsbClgXG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlKGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICBzdHJpbmdlZExpc3QgKz0gYCgke2N1cnJlbnROb2RlLnZhbHVlfSktPmBcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cmluZ2VkTGlzdCArPSBgKCR7Y3VycmVudE5vZGUudmFsdWV9KS0+IG51bGxgXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cbn1cblxubGV0IG5ld0xpc3QgPSBuZXcgTGlua2VkTGlzdCgpXG5cbm5ld0xpc3QuYXBwZW5kKCd2YWwxJylcbm5ld0xpc3QuYXBwZW5kKCd2YWwyJylcbm5ld0xpc3QuYXBwZW5kKCd2YWwzJylcbm5ld0xpc3QucHJlcGVuZCgnaGVhZCcpXG5uZXdMaXN0LmFwcGVuZCgndmFsNCcpXG5uZXdMaXN0LmFwcGVuZCgndGFpbCcpXG5uZXdMaXN0LmFwcGVuZCgndGFpbHMyJylcbm5ld0xpc3QucHJlcGVuZCgnaGVhZDInKVxuXG5jb25zb2xlLmxvZyhuZXdMaXN0KVxuY29uc29sZS5sb2cobmV3TGlzdC50b1N0cmluZykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=