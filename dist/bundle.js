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
    this.capacity =4
    this.loadFactor = 0.75
    this.primeNumber = 31
  }

  hash(key) {
    let hashCode = 0

    // case for when loadfactor is reached
    if (this.length()/this.capacity> this.loadFactor) {
      this.resize()
    }

    for (let i=0; i< key.length; i++) {
      hashCode = this.primeNumber* hashCode + key.charCodeAt(i)
      hashCode %= this.capacity
    }

    return hashCode 
  }

  resize() {
    const tempTable = this.table.slice()
    this.clear()
    this.capacity *=2

    tempTable.forEach(bucket => {
      let hashCode = 0
      if (bucket) {
        while (bucket.nextNode !==null) {
          const tempNode = new Node ( bucket.key, bucket.value)
          hashCode =0
          for (let i=0; i< bucket.key.length; i++) {
            hashCode = this.primeNumber* hashCode + bucket.key.charCodeAt(i)
            hashCode %= this.capacity
          }
          this.table[hashCode] = tempNode
          bucket = bucket.nextNode
        } 
        this.set(bucket.key, bucket.value)
      }
    })
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
// console.log(hashmap.has('baisju'))

hashmap.remove('jon')
console.log(hashmap.table)
console.log(hashmap.entries())
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QiIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIEhhc2hNYXB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFibGUgPSBbXVxuICAgIHRoaXMuY2FwYWNpdHkgPTRcbiAgICB0aGlzLmxvYWRGYWN0b3IgPSAwLjc1XG4gICAgdGhpcy5wcmltZU51bWJlciA9IDMxXG4gIH1cblxuICBoYXNoKGtleSkge1xuICAgIGxldCBoYXNoQ29kZSA9IDBcblxuICAgIC8vIGNhc2UgZm9yIHdoZW4gbG9hZGZhY3RvciBpcyByZWFjaGVkXG4gICAgaWYgKHRoaXMubGVuZ3RoKCkvdGhpcy5jYXBhY2l0eT4gdGhpcy5sb2FkRmFjdG9yKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaT0wOyBpPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhhc2hDb2RlID0gdGhpcy5wcmltZU51bWJlciogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKVxuICAgICAgaGFzaENvZGUgJT0gdGhpcy5jYXBhY2l0eVxuICAgIH1cblxuICAgIHJldHVybiBoYXNoQ29kZSBcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB0ZW1wVGFibGUgPSB0aGlzLnRhYmxlLnNsaWNlKClcbiAgICB0aGlzLmNsZWFyKClcbiAgICB0aGlzLmNhcGFjaXR5ICo9MlxuXG4gICAgdGVtcFRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgIGxldCBoYXNoQ29kZSA9IDBcbiAgICAgIGlmIChidWNrZXQpIHtcbiAgICAgICAgd2hpbGUgKGJ1Y2tldC5uZXh0Tm9kZSAhPT1udWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVtcE5vZGUgPSBuZXcgTm9kZSAoIGJ1Y2tldC5rZXksIGJ1Y2tldC52YWx1ZSlcbiAgICAgICAgICBoYXNoQ29kZSA9MFxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgYnVja2V0LmtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaENvZGUgPSB0aGlzLnByaW1lTnVtYmVyKiBoYXNoQ29kZSArIGJ1Y2tldC5rZXkuY2hhckNvZGVBdChpKVxuICAgICAgICAgICAgaGFzaENvZGUgJT0gdGhpcy5jYXBhY2l0eVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRhYmxlW2hhc2hDb2RlXSA9IHRlbXBOb2RlXG4gICAgICAgICAgYnVja2V0ID0gYnVja2V0Lm5leHROb2RlXG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuc2V0KGJ1Y2tldC5rZXksIGJ1Y2tldC52YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG4gICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUua2V5IT09a2V5ICYmIGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICB9IFxuICAgICAgaWYgKGN1cnJlbnROb2RlLmtleT09PWtleSkge1xuICAgICAgICBjdXJyZW50Tm9kZS52YWx1ZSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZSA9IG5ldyBOb2RlIChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2Vsc2UgdHJlYXQgYXMgbmV3IHZhbHVlIHRvIGJlIGluc2VydGVkXG4gICAgICB0aGlzLnRhYmxlW2luZGV4XSA9IG5ldyBOb2RlIChrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG4gICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUua2V5IT09a2V5ICYmIGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICB9IGlmIChjdXJyZW50Tm9kZS5rZXk9PT1rZXkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGhhcyhrZXkpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmhhc2goa2V5KVxuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudGFibGVbaW5kZXhdXG5cbiAgICBpZiAoY3VycmVudE5vZGUpIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5rZXkhPT1rZXkgJiYgY3VycmVudE5vZGUubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5rZXk9PT1rZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5oYXNoKGtleSlcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRhYmxlW2luZGV4XVxuICAgIGxldCBwcmV2Tm9kZSA9IG51bGxcblxuICAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUua2V5IT09a2V5ICYmIGN1cnJlbnROb2RlLm5leHROb2RlIT09bnVsbCkge1xuICAgICAgICAgIHByZXZOb2RlID0gY3VycmVudE5vZGVcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlXG4gICAgICAgIH0gaWYgKHByZXZOb2RlPT09bnVsbCkge1xuICAgICAgICAgIHRoaXMudGFibGVbaW5kZXhdID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZOb2RlLm5leHROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGVcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGxlbmd0aCgpIHtcbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgICAgLy9vbmx5IGNvdW50IGlmIGJ1Y2tldCBoYXMgdmFsdWVcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgIGxlbmd0aCsrXG4gICAgICAgICAgd2hpbGUgKGJ1Y2tldC5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgICAgIGxlbmd0aCsrXG4gICAgICAgICAgICBidWNrZXQgPSBidWNrZXQubmV4dE5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuICAgIFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50YWJsZSA9IFtdXG4gIH1cblxuICBrZXlzKCkge1xuICAgIGxldCBrZXlzQXJyYXkgPSBbXVxuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgIGtleXNBcnJheS5wdXNoKGJ1Y2tldC5rZXkpXG4gICAgICAgICAgd2hpbGUgKGJ1Y2tldC5uZXh0Tm9kZSE9PW51bGwpIHtcbiAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldC5uZXh0Tm9kZVxuICAgICAgICAgICAga2V5c0FycmF5LnB1c2goYnVja2V0LmtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4ga2V5c0FycmF5XG4gICAgfVxuICB9XG5cbiAgdmFsdWVzKCkge1xuICAgIGxldCB2YWx1ZUFycmF5ID0gW11cbiAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZS5mb3JFYWNoKGJ1Y2tldCA9PiB7XG4gICAgICAgIGlmIChidWNrZXQpIHtcbiAgICAgICAgICB2YWx1ZUFycmF5LnB1c2goYnVja2V0LnZhbHVlKVxuICAgICAgICAgIHdoaWxlIChidWNrZXQubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgICAgICBidWNrZXQgPSBidWNrZXQubmV4dE5vZGVcbiAgICAgICAgICAgIHZhbHVlQXJyYXkucHVzaChidWNrZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHZhbHVlQXJyYXlcbiAgICB9XG4gIH1cblxuICBlbnRyaWVzKCkge1xuICAgIGxldCBlbnRyaWVzQXJyYXkgPSBbXVxuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmZvckVhY2goYnVja2V0ID0+IHtcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgIGVudHJpZXNBcnJheS5wdXNoKFtidWNrZXQua2V5LCBidWNrZXQudmFsdWVdKVxuICAgICAgICAgIHdoaWxlIChidWNrZXQubmV4dE5vZGUhPT1udWxsKSB7XG4gICAgICAgICAgICBidWNrZXQgPSBidWNrZXQubmV4dE5vZGVcbiAgICAgICAgICAgIGVudHJpZXNBcnJheS5wdXNoKFtidWNrZXQua2V5LCBidWNrZXQudmFsdWVdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBlbnRyaWVzQXJyYXlcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgTm9kZXtcbiAgY29uc3RydWN0b3Ioa2V5LHZhbHVlLCBuZXh0Tm9kZT1udWxsKSB7XG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGVcbiAgfVxufVxuXG5sZXQgaGFzaG1hcCA9IG5ldyBIYXNoTWFwKClcblxuaGFzaG1hcC5zZXQoJ2R2cycsIFwiYTFcIilcbmhhc2htYXAuc2V0KCdiYWlqdScsIFwiYjFcIilcbmhhc2htYXAuc2V0KCdwcmFqZXNoJywgXCJiMlwiKVxuaGFzaG1hcC5zZXQoJ2NhcmxhJywgXCJqMlwiKVxuaGFzaG1hcC5zZXQoJ2pvbicsIFwiYzNcIilcbmhhc2htYXAuc2V0KCdkdnMnLCBcImMzXCIpXG5oYXNobWFwLnNldCgnYScsIFwiYTFcIilcbmhhc2htYXAuc2V0KCdjYXJsYScsIFwiYXNkYXNkYXNkXCIpXG4vLyBjb25zb2xlLmxvZyhoYXNobWFwLmhhcygnYmFpc2p1JykpXG5cbmhhc2htYXAucmVtb3ZlKCdqb24nKVxuY29uc29sZS5sb2coaGFzaG1hcC50YWJsZSlcbmNvbnNvbGUubG9nKGhhc2htYXAuZW50cmllcygpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==