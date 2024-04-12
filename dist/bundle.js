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
      while (currentNode.key!==key && currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      } 
      if (currentNode.key===key) {
        currentNode.value = value
      } else {
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
      while (currentNode.key!==key && currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      } if (currentNode.key===key) {
        return currentNode.value
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
      while (currentNode.key!==key && currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      }
      if (currentNode.key===key) {
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
        while (currentNode.key!==key && currentNode.nextNode!==null) {
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

  keys() {
    let keysArray = []
    if (this.table) {
      this.table.forEach(bucket => {
        if (bucket) {
          keysArray.push(bucket.key)
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            keysArray.push(bucket.key)
          }
        }
      })
      return keysArray
    }
  }

  values() {
    let valueArray = []
    if (this.table) {
      this.table.forEach(bucket => {
        if (bucket) {
          valueArray.push(bucket.value)
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            valueArray.push(bucket.value)
          }
        }
      })
      return valueArray
    }
  }

  entries() {
    let entriesArray = []
    if (this.table) {
      this.table.forEach(bucket => {
        if (bucket) {
          entriesArray.push([bucket.key, bucket.value])
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            entriesArray.push([bucket.key, bucket.value])
          }
        }
      })
      return entriesArray
    }
  }
}

class Node{
  constructor(key,value, nextNode=null) {
    this.key = key
    this.value = value
    this.nextNode = nextNode
  }
}

let hashmap = new HashMap()

hashmap.set('dvs', "a1")
hashmap.set('baiju', "b1")
hashmap.set('prajesh', "b2")
hashmap.set('carla', "j2")
hashmap.set('jon', "c3")
hashmap.set('dvs', "c3")
hashmap.set('a', "a1")
hashmap.set('carla', "asdasdasd")
console.log(hashmap.keys())
console.log(hashmap.values())
console.log(hashmap.entries())
// console.log(hashmap.has('baisju'))


console.log(hashmap.table)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY2xhc3MgSGFzaE1hcHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cblxuICBoYXNoKGtleSkge1xuICAgIGxldCBoYXNoQ29kZSA9IDBcbiAgICBsZXQgaGFzaFNpemUgPSAxNlxuICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzFcbiAgICBmb3IgKGxldCBpPTA7IGk8IGtleS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaENvZGUgPSBwcmltZU51bWJlciogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaENvZGUgJT0gaGFzaFNpemVcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaENvZGUgXG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50YWJsZVtpbmRleF1cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5rZXkhPT1rZXkgJiYgY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgIH0gXG4gICAgICBpZiAoY3VycmVudE5vZGUua2V5PT09a2V5KSB7XG4gICAgICAgIGN1cnJlbnROb2RlLnZhbHVlID0gdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlLm5leHROb2RlID0gbmV3IE5vZGUgKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vZWxzZSB0cmVhdCBhcyBuZXcgdmFsdWUgdG8gYmUgaW5zZXJ0ZWRcbiAgICAgIHRoaXMudGFibGVbaW5kZXhdID0gbmV3IE5vZGUgKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50YWJsZVtpbmRleF1cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5rZXkhPT1rZXkgJiYgY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgIH0gaWYgKGN1cnJlbnROb2RlLmtleT09PWtleSkge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGUudmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50YWJsZVtpbmRleF1cblxuICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLmtleSE9PWtleSAmJiBjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnROb2RlLmtleT09PWtleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG4gICAgbGV0IHByZXZOb2RlID0gbnVsbFxuXG4gICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5rZXkhPT1rZXkgJiYgY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgICAgcHJldk5vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgfSBpZiAocHJldk5vZGU9PT1udWxsKSB7XG4gICAgICAgICAgdGhpcy50YWJsZVtpbmRleF0gPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldk5vZGUubmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIGxldCBsZW5ndGggPSAwXG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuZm9yRWFjaChidWNrZXQgPT4ge1xuICAgICAgICAvL29ubHkgY291bnQgaWYgYnVja2V0IGhhcyB2YWx1ZVxuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICB3aGlsZSAoYnVja2V0Lm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldC5uZXh0Tm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG4gICAgXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnRhYmxlID0gW11cbiAgfVxuXG4gIGtleXMoKSB7XG4gICAgbGV0IGtleXNBcnJheSA9IFtdXG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuZm9yRWFjaChidWNrZXQgPT4ge1xuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAga2V5c0FycmF5LnB1c2goYnVja2V0LmtleSlcbiAgICAgICAgICB3aGlsZSAoYnVja2V0Lm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0Lm5leHROb2RlXG4gICAgICAgICAgICBrZXlzQXJyYXkucHVzaChidWNrZXQua2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBrZXlzQXJyYXlcbiAgICB9XG4gIH1cblxuICB2YWx1ZXMoKSB7XG4gICAgbGV0IHZhbHVlQXJyYXkgPSBbXVxuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgIHZhbHVlQXJyYXkucHVzaChidWNrZXQudmFsdWUpXG4gICAgICAgICAgd2hpbGUgKGJ1Y2tldC5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldC5uZXh0Tm9kZVxuICAgICAgICAgICAgdmFsdWVBcnJheS5wdXNoKGJ1Y2tldC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdmFsdWVBcnJheVxuICAgIH1cbiAgfVxuXG4gIGVudHJpZXMoKSB7XG4gICAgbGV0IGVudHJpZXNBcnJheSA9IFtdXG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuZm9yRWFjaChidWNrZXQgPT4ge1xuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAgZW50cmllc0FycmF5LnB1c2goW2J1Y2tldC5rZXksIGJ1Y2tldC52YWx1ZV0pXG4gICAgICAgICAgd2hpbGUgKGJ1Y2tldC5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldC5uZXh0Tm9kZVxuICAgICAgICAgICAgZW50cmllc0FycmF5LnB1c2goW2J1Y2tldC5rZXksIGJ1Y2tldC52YWx1ZV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGVudHJpZXNBcnJheVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBOb2Rle1xuICBjb25zdHJ1Y3RvcihrZXksdmFsdWUsIG5leHROb2RlPW51bGwpIHtcbiAgICB0aGlzLmtleSA9IGtleVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZVxuICB9XG59XG5cbmxldCBoYXNobWFwID0gbmV3IEhhc2hNYXAoKVxuXG5oYXNobWFwLnNldCgnZHZzJywgXCJhMVwiKVxuaGFzaG1hcC5zZXQoJ2JhaWp1JywgXCJiMVwiKVxuaGFzaG1hcC5zZXQoJ3ByYWplc2gnLCBcImIyXCIpXG5oYXNobWFwLnNldCgnY2FybGEnLCBcImoyXCIpXG5oYXNobWFwLnNldCgnam9uJywgXCJjM1wiKVxuaGFzaG1hcC5zZXQoJ2R2cycsIFwiYzNcIilcbmhhc2htYXAuc2V0KCdhJywgXCJhMVwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJhc2Rhc2Rhc2RcIilcbmNvbnNvbGUubG9nKGhhc2htYXAua2V5cygpKVxuY29uc29sZS5sb2coaGFzaG1hcC52YWx1ZXMoKSlcbmNvbnNvbGUubG9nKGhhc2htYXAuZW50cmllcygpKVxuLy8gY29uc29sZS5sb2coaGFzaG1hcC5oYXMoJ2JhaXNqdScpKVxuXG5cbmNvbnNvbGUubG9nKGhhc2htYXAudGFibGUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9