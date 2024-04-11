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
        length++
        while (bucket.nextNode!==null) {
          length++
          bucket = bucket.nextNode
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
hashmap.clear()

console.log(hashmap.table)