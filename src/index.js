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


