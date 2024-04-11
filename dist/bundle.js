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
    let currentNode = this.table[index]
    if (currentNode) {
      //if key exist, simply update the value
      if (this.has(key)) {
        // loop through to find match and update value
        while (!currentNode.hasOwnProperty(key)) {
          currentNode = currentNode.nextNode
        } currentNode[key] =value
      } else { 
        //else we go through loop and insert at the end of same index
        while (currentNode.nextNode!==null) {
          currentNode = currentNode.nextNode
        }
        currentNode.nextNode = new Node (key, value)
      }
    } else {
      //else treat as new value to be inserted
      this.table[index] = new Node (key, value)
    }
  }

  get(key) {
    let index = this.hash(key)
    let currentNode = this.table[index]
    if (currentNode) {
      if (this.has(key)) {
        while (!currentNode.hasOwnProperty(key)) {
          currentNode = currentNode.nextNode
        } 
        return currentNode[key]
      } else {
        return null
      }
    } else {
      return null
    }
  }

  has(key) {
    let index = this.hash(key)
    let currentNode = this.table[index]

    if (currentNode) {
      while (!currentNode.hasOwnProperty(key) && currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      }
      if (currentNode.hasOwnProperty(key)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  remove(key) {
    let index = this.hash(key)
    let currentNode = this.table[index]
    let prevNode = null

    if (currentNode) {
      if (this.has(key)) {
        while (!currentNode.hasOwnProperty(key)) {
          prevNode = currentNode
          currentNode = currentNode.nextNode
        } if (prevNode===null) {
          this.table[index] = currentNode.nextNode
          return true
        } else {
          prevNode.nextNode = currentNode.nextNode
          return true
        }
      } else {
        return false
      }
    } else {
      return false
    }
  }

  length() {
    let length = 0
    if (this.table) {
      this.table.forEach(bucket => {
        //only count if bucket has value
        if (bucket) {
          length++
          while (bucket.nextNode!==null) {
            length++
            bucket = bucket.nextNode
          }
        }
      })
      return length
    }
    
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

hashmap.set('a', "a1")
hashmap.set('b', "b1")
hashmap.set('c', "c1")
hashmap.set('d', "d1")
hashmap.set('e', "e1")
hashmap.set('f', "f1")
hashmap.set('g', "g1")
hashmap.set('h', "h1")
hashmap.set('i', "i1")
hashmap.set('j', "j1")
hashmap.set('k', "k1")
hashmap.set('l', "l1")
hashmap.set('m', "m1")
hashmap.set('n', "n1")
hashmap.set('o', "o1")
hashmap.set('p', "p1")
hashmap.set('q', "q1")
hashmap.set('q', "q2")


// hashmap.remove('jon')
// hashmap.remove('carsol')
// console.log(hashmap.get('carsol'))
console.log(hashmap.length())
console.log(hashmap.remove('q'))
console.log(hashmap.length())

console.log(hashmap.table)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgSGFzaE1hcHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cblxuICBoYXNoKGtleSkge1xuICAgIGxldCBoYXNoQ29kZSA9IDBcbiAgICBsZXQgaGFzaFNpemUgPSAxNlxuICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzFcbiAgICBmb3IgKGxldCBpPTA7IGk8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaENvZGUgJT0gaGFzaFNpemVcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGUgXG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50YWJsZVtpbmRleF1cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIC8vaWYga2V5IGV4aXN0LCBzaW1wbHkgdXBkYXRlIHRoZSB2YWx1ZVxuICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRvIGZpbmQgbWF0Y2ggYW5kIHVwZGF0ZSB2YWx1ZVxuICAgICAgICB3aGlsZSAoIWN1cnJlbnROb2RlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIH0gY3VycmVudE5vZGVba2V5XSA9dmFsdWVcbiAgICAgIH0gZWxzZSB7IFxuICAgICAgICAvL2Vsc2Ugd2UgZ28gdGhyb3VnaCBsb29wIGFuZCBpbnNlcnQgYXQgdGhlIGVuZCBvZiBzYW1lIGluZGV4XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUubmV4dE5vZGUgPSBuZXcgTm9kZSAoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9lbHNlIHRyZWF0IGFzIG5ldyB2YWx1ZSB0byBiZSBpbnNlcnRlZFxuICAgICAgdGhpcy50YWJsZVtpbmRleF0gPSBuZXcgTm9kZSAoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBnZXQoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgd2hpbGUgKCFjdXJyZW50Tm9kZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGVba2V5XVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBoYXMoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuXG4gICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICB3aGlsZSAoIWN1cnJlbnROb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGtleSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50YWJsZVtpbmRleF1cbiAgICBsZXQgcHJldk5vZGUgPSBudWxsXG5cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHdoaWxlICghY3VycmVudE5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHByZXZOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIH0gaWYgKHByZXZOb2RlPT09bnVsbCkge1xuICAgICAgICAgIHRoaXMudGFibGVbaW5kZXhdID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZOb2RlLm5leHROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIGxldCBsZW5ndGggPSAwXG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuZm9yRWFjaChidWNrZXQgPT4ge1xuICAgICAgICAvL29ubHkgY291bnQgaWYgYnVja2V0IGhhcyB2YWx1ZVxuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICB3aGlsZSAoYnVja2V0Lm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldC5uZXh0Tm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG4gICAgXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhYmxlID0gW11cbiAgfVxufVxuXG5jbGFzcyBOb2Rle1xuICBjb25zdHJ1Y3RvcihrZXksdmFsdWUsIG5leHROb2RlPW51bGwpIHtcbiAgICB0aGlzW2tleV0gPSB2YWx1ZVxuICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZVxuICB9XG59XG5cbmxldCBoYXNobWFwID0gbmV3IEhhc2hNYXAoKVxuXG5oYXNobWFwLnNldCgnYScsIFwiYTFcIilcbmhhc2htYXAuc2V0KCdiJywgXCJiMVwiKVxuaGFzaG1hcC5zZXQoJ2MnLCBcImMxXCIpXG5oYXNobWFwLnNldCgnZCcsIFwiZDFcIilcbmhhc2htYXAuc2V0KCdlJywgXCJlMVwiKVxuaGFzaG1hcC5zZXQoJ2YnLCBcImYxXCIpXG5oYXNobWFwLnNldCgnZycsIFwiZzFcIilcbmhhc2htYXAuc2V0KCdoJywgXCJoMVwiKVxuaGFzaG1hcC5zZXQoJ2knLCBcImkxXCIpXG5oYXNobWFwLnNldCgnaicsIFwiajFcIilcbmhhc2htYXAuc2V0KCdrJywgXCJrMVwiKVxuaGFzaG1hcC5zZXQoJ2wnLCBcImwxXCIpXG5oYXNobWFwLnNldCgnbScsIFwibTFcIilcbmhhc2htYXAuc2V0KCduJywgXCJuMVwiKVxuaGFzaG1hcC5zZXQoJ28nLCBcIm8xXCIpXG5oYXNobWFwLnNldCgncCcsIFwicDFcIilcbmhhc2htYXAuc2V0KCdxJywgXCJxMVwiKVxuaGFzaG1hcC5zZXQoJ3EnLCBcInEyXCIpXG5cblxuLy8gaGFzaG1hcC5yZW1vdmUoJ2pvbicpXG4vLyBoYXNobWFwLnJlbW92ZSgnY2Fyc29sJylcbi8vIGNvbnNvbGUubG9nKGhhc2htYXAuZ2V0KCdjYXJzb2wnKSlcbmNvbnNvbGUubG9nKGhhc2htYXAubGVuZ3RoKCkpXG5jb25zb2xlLmxvZyhoYXNobWFwLnJlbW92ZSgncScpKVxuY29uc29sZS5sb2coaGFzaG1hcC5sZW5ndGgoKSlcblxuY29uc29sZS5sb2coaGFzaG1hcC50YWJsZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=