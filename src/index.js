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