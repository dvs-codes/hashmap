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

  keys() {
    let keysArray = []
    if (this.table) {
      this.table.forEach(bucket => {
        if (bucket) {
          let newkey = Object.keys(bucket)[0]
          keysArray.push(newkey)
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            let newkey = Object.keys(bucket)[0]
            keysArray.push(newkey)
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
          let newValue = Object.values(bucket)[0]
          valueArray.push(newValue)
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            let newValue = Object.values(bucket)[0]
            valueArray.push(newValue)
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
          let pairArray = []
          let newValue = Object.values(bucket)[0]
          let newkey = Object.keys(bucket)[0]
          pairArray.push(newkey)
          pairArray.push(newValue)
          entriesArray.push(pairArray)
          while (bucket.nextNode!==null) {
            bucket = bucket.nextNode
            let pairArray = []
            let newValue = Object.values(bucket)[0]
            let newkey = Object.keys(bucket)[0]
            pairArray.push(newkey)
            pairArray.push(newValue)
            entriesArray.push(pairArray)
          }
        }
      })
      return entriesArray
    }
  }
}

class Node{
  constructor(key,value, nextNode=null) {
    this[key] = value
    this.nextNode = nextNode
  }
}

let hashmap = new HashMap()

hashmap.set('carlos', "a1")
hashmap.set('carla', "b1")
hashmap.set('jon', "b2")
hashmap.set('jon', "j2")
hashmap.set('carsol', "c3")



// hashmap.remove('jon')
hashmap.remove('carsol')
// console.log(hashmap.get('carsol'))
console.log(hashmap.length())
console.log(hashmap.keys())
console.log(hashmap.values())
console.log(hashmap.entries())

console.log(hashmap.table)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjbGFzcyBIYXNoTWFwe1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhYmxlID0gW11cbiAgfVxuXG4gIGhhc2goa2V5KSB7XG4gICAgbGV0IGhhc2hDb2RlID0gMFxuICAgIGxldCBoYXNoU2l6ZSA9IDE2XG4gICAgY29uc3QgcHJpbWVOdW1iZXIgPSAzMVxuICAgIGZvciAobGV0IGk9MDsgaTwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpXG4gICAgICBoYXNoQ29kZSAlPSBoYXNoU2l6ZVxuICAgIH1cblxuICAgIHJldHVybiBoYXNoQ29kZSBcbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgLy9pZiBrZXkgZXhpc3QsIHNpbXBseSB1cGRhdGUgdGhlIHZhbHVlXG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggdG8gZmluZCBtYXRjaCBhbmQgdXBkYXRlIHZhbHVlXG4gICAgICAgIHdoaWxlICghY3VycmVudE5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgfSBjdXJyZW50Tm9kZVtrZXldID12YWx1ZVxuICAgICAgfSBlbHNlIHsgXG4gICAgICAgIC8vZWxzZSB3ZSBnbyB0aHJvdWdoIGxvb3AgYW5kIGluc2VydCBhdCB0aGUgZW5kIG9mIHNhbWUgaW5kZXhcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlIChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2Vsc2UgdHJlYXQgYXMgbmV3IHZhbHVlIHRvIGJlIGluc2VydGVkXG4gICAgICB0aGlzLnRhYmxlW2luZGV4XSA9IG5ldyBOb2RlIChrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG4gICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgICB3aGlsZSAoIWN1cnJlbnROb2RlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIH0gXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZVtrZXldXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGhhcyhrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG5cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIHdoaWxlICghY3VycmVudE5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBjdXJyZW50Tm9kZS5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnROb2RlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuICAgIGxldCBwcmV2Tm9kZSA9IG51bGxcblxuICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgaWYgKHRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgd2hpbGUgKCFjdXJyZW50Tm9kZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcHJldk5vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgfSBpZiAocHJldk5vZGU9PT1udWxsKSB7XG4gICAgICAgICAgdGhpcy50YWJsZVtpbmRleF0gPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldk5vZGUubmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBsZW5ndGgoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDBcbiAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZS5mb3JFYWNoKGJ1Y2tldCA9PiB7XG4gICAgICAgIC8vb25seSBjb3VudCBpZiBidWNrZXQgaGFzIHZhbHVlXG4gICAgICAgIGlmIChidWNrZXQpIHtcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICAgIHdoaWxlIChidWNrZXQubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0Lm5leHROb2RlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGxlbmd0aFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudGFibGUgPSBbXVxuICB9XG5cbiAga2V5cygpIHtcbiAgICBsZXQga2V5c0FycmF5ID0gW11cbiAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZS5mb3JFYWNoKGJ1Y2tldCA9PiB7XG4gICAgICAgIGlmIChidWNrZXQpIHtcbiAgICAgICAgICBsZXQgbmV3a2V5ID0gT2JqZWN0LmtleXMoYnVja2V0KVswXVxuICAgICAgICAgIGtleXNBcnJheS5wdXNoKG5ld2tleSlcbiAgICAgICAgICB3aGlsZSAoYnVja2V0Lm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0Lm5leHROb2RlXG4gICAgICAgICAgICBsZXQgbmV3a2V5ID0gT2JqZWN0LmtleXMoYnVja2V0KVswXVxuICAgICAgICAgICAga2V5c0FycmF5LnB1c2gobmV3a2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBrZXlzQXJyYXlcbiAgICB9XG4gIH1cblxuICB2YWx1ZXMoKSB7XG4gICAgbGV0IHZhbHVlQXJyYXkgPSBbXVxuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IE9iamVjdC52YWx1ZXMoYnVja2V0KVswXVxuICAgICAgICAgIHZhbHVlQXJyYXkucHVzaChuZXdWYWx1ZSlcbiAgICAgICAgICB3aGlsZSAoYnVja2V0Lm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgICAgYnVja2V0ID0gYnVja2V0Lm5leHROb2RlXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBPYmplY3QudmFsdWVzKGJ1Y2tldClbMF1cbiAgICAgICAgICAgIHZhbHVlQXJyYXkucHVzaChuZXdWYWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdmFsdWVBcnJheVxuICAgIH1cbiAgfVxuXG4gIGVudHJpZXMoKSB7XG4gICAgbGV0IGVudHJpZXNBcnJheSA9IFtdXG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuZm9yRWFjaChidWNrZXQgPT4ge1xuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAgbGV0IHBhaXJBcnJheSA9IFtdXG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gT2JqZWN0LnZhbHVlcyhidWNrZXQpWzBdXG4gICAgICAgICAgbGV0IG5ld2tleSA9IE9iamVjdC5rZXlzKGJ1Y2tldClbMF1cbiAgICAgICAgICBwYWlyQXJyYXkucHVzaChuZXdrZXkpXG4gICAgICAgICAgcGFpckFycmF5LnB1c2gobmV3VmFsdWUpXG4gICAgICAgICAgZW50cmllc0FycmF5LnB1c2gocGFpckFycmF5KVxuICAgICAgICAgIHdoaWxlIChidWNrZXQubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgICAgICBidWNrZXQgPSBidWNrZXQubmV4dE5vZGVcbiAgICAgICAgICAgIGxldCBwYWlyQXJyYXkgPSBbXVxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gT2JqZWN0LnZhbHVlcyhidWNrZXQpWzBdXG4gICAgICAgICAgICBsZXQgbmV3a2V5ID0gT2JqZWN0LmtleXMoYnVja2V0KVswXVxuICAgICAgICAgICAgcGFpckFycmF5LnB1c2gobmV3a2V5KVxuICAgICAgICAgICAgcGFpckFycmF5LnB1c2gobmV3VmFsdWUpXG4gICAgICAgICAgICBlbnRyaWVzQXJyYXkucHVzaChwYWlyQXJyYXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGVudHJpZXNBcnJheVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBOb2Rle1xuICBjb25zdHJ1Y3RvcihrZXksdmFsdWUsIG5leHROb2RlPW51bGwpIHtcbiAgICB0aGlzW2tleV0gPSB2YWx1ZVxuICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZVxuICB9XG59XG5cbmxldCBoYXNobWFwID0gbmV3IEhhc2hNYXAoKVxuXG5oYXNobWFwLnNldCgnY2FybG9zJywgXCJhMVwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJiMVwiKVxuaGFzaG1hcC5zZXQoJ2pvbicsIFwiYjJcIilcbmhhc2htYXAuc2V0KCdqb24nLCBcImoyXCIpXG5oYXNobWFwLnNldCgnY2Fyc29sJywgXCJjM1wiKVxuXG5cblxuLy8gaGFzaG1hcC5yZW1vdmUoJ2pvbicpXG5oYXNobWFwLnJlbW92ZSgnY2Fyc29sJylcbi8vIGNvbnNvbGUubG9nKGhhc2htYXAuZ2V0KCdjYXJzb2wnKSlcbmNvbnNvbGUubG9nKGhhc2htYXAubGVuZ3RoKCkpXG5jb25zb2xlLmxvZyhoYXNobWFwLmtleXMoKSlcbmNvbnNvbGUubG9nKGhhc2htYXAudmFsdWVzKCkpXG5jb25zb2xlLmxvZyhoYXNobWFwLmVudHJpZXMoKSlcblxuY29uc29sZS5sb2coaGFzaG1hcC50YWJsZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=