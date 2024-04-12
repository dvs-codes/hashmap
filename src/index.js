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