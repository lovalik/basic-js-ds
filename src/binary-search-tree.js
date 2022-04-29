const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root

  constructor() {
    this.#root = null
  }

  root() {
    return this.#root
  }

  add(data) {
    if (!this.#root) {
      this.#root = {
        data
      }

      return
    }

    let currentNode = this.#root

    while (currentNode) {
      if (data === currentNode.data) {
        break
      }

      if (data < currentNode.data) {
        if (currentNode.leftChild) {
          currentNode = currentNode.leftChild
        } else {
          currentNode.leftChild = {
            data
          }
        }
      } else {
        if (currentNode.rightChild) {
          currentNode = currentNode.rightChild
        } else {
          currentNode.rightChild = {
            data
          }
        }
      }
    }
  }

  remove(data) {
    if (data === this.#root.data) {
      this.#root = null
      return
    }

    let parentNode = null
    let nodeName = ''

    let currentNode = this.#root

    while (currentNode) {
      if (data === currentNode.data) {
        delete parentNode[nodeName]
        break
      }

      parentNode = currentNode
      nodeName = (data < currentNode.data) ? 'leftChild' : 'rightChild'
      currentNode = currentNode[nodeName]
    }
  }

  find(data) {
    let answer = null
    let currentNode = this.#root

    while (currentNode) {
      if (data === currentNode.data) {
        answer = currentNode
        break
      }

      currentNode = (data < currentNode.data) ? currentNode.leftChild : currentNode.rightChild
    }

    return answer
  }

  has(data) {
    return Boolean(this.find(data))
  }

  min() {
    let currentNode = this.#root
    let answer = currentNode ? currentNode.data : null

    while (currentNode && currentNode.leftChild) {
      answer = currentNode.leftChild.data
      currentNode = currentNode.leftChild
    }

    return answer
  }

  max() {
    let currentNode = this.#root
    let answer = currentNode ? currentNode.data : null

    while (currentNode && currentNode.rightChild) {
      answer = currentNode.rightChild.data
      currentNode = currentNode.rightChild
    }

    return answer
  }

}

module.exports = {
  BinarySearchTree
};