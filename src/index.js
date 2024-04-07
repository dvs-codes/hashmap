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
    this.table[index] = new Node(value)
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
  constructor(value, nextNode=null) {
    this.value = value
    this.nextNode = nextNode
  }
}
let hashmap = new HashMap()

hashmap.set('carlos', "value1")
hashmap.set('carlos', "value2")
hashmap.set('carla', "n1")
console.log(hashmap.get('john'))
console.log(hashmap.get('carla'))

console.log(hashmap.table)
console.log(hashmap.length())
