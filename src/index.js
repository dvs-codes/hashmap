class LinkedList {
 constructor() {
  this.list = null
 }

  append(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode 
      }
      currentNode.nextNode = new Node(value)
    }
  }

  prepend(value) {
    if (this.list===null) {
      this.list = new Node(value)
    } else {
      this.list = new Node(value, this.list)
    }
  }

  get size() {
    let length = 0
    let currentNode = this.list
    if (currentNode===null) {
      return length
    } else  {
      while (currentNode.nextNode!==null) {
        currentNode =  currentNode.nextNode
        length++
      } return length+1
    }
  }

  get head() {
    return this.list
  }

  get tail() {
    if (this.list.nextNode===null) {
      return this.list
    } else {
      let currentNode = this.list
      while (currentNode.nextNode!==null) {
        currentNode = currentNode.nextNode
      } return currentNode
    }
  }

  at(index) {
    let currentNode = this.list
    for (let i=0; i<index;i++) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  pop() {
    let currentNode = this.list
    while(currentNode.nextNode.nextNode!==null) {
      currentNode = currentNode.nextNode
    }
    currentNode.nextNode = null 
  }

  contains(value) {
    let currentNode=this.list
    if (currentNode.value===value) {
      return true
    } else {
      while(currentNode.nextNode!==null) {
        if(currentNode.nextNode.value===value) {
          return true
        } 
        currentNode = currentNode.nextNode
      } return false
    }
  }

  find(value) {
    let currentNode=this.list
    let index = 0
    if (currentNode.value===value) {
      return index
    } else {
      index = 1
      while(currentNode.nextNode!==null) {
        if(currentNode.nextNode.value===value) {
          return index
        } 
        index++
        currentNode = currentNode.nextNode
      } return null
    }
  }

  get toString() {
    let currentNode = this.list
    let stringedList = ''
    if (this.list ===null) {
      return `(null)`
    } else {
      while(currentNode.nextNode!==null) {
        stringedList += `(${currentNode.value})->`
        currentNode = currentNode.nextNode
      }
      return stringedList += `(${currentNode.value})-> null`
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let newList = new LinkedList()

newList.append('val1')
newList.append('val2')
newList.append('val3')
newList.prepend('head')
newList.append('val4')
newList.append('tail')
newList.append('tails2')
newList.prepend('head2')

console.log(newList)
console.log(newList.toString)