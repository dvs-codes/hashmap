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