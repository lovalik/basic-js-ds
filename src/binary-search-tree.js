const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    #root
  
    constructor(...values) {
      this.#root = null
  
      for (const v of values) {
        this.add( v )
      }
    }
  
    root( ) {
      return this.#root
    }
  
    add( data ) {
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
  
    #removeFrom(data, currentNode, parentNode = null) {
      let nodeName = ''
  
      while (currentNode) {
        if (data === currentNode.data) {
  
          // вариант нет детей
          if (!currentNode.leftChild && !currentNode.rightChild) {
            if (parentNode) {
              delete parentNode[nodeName]
            } else {
              this.#root = null
            }
            break
          }
  
          // вариант с одним
          if ((currentNode.leftChild && !currentNode.rightChild) || (!currentNode.leftChild && currentNode.rightChild)) {
            const replacementNode = currentNode.leftChild || currentNode.rightChild
            if (parentNode) {
              parentNode[nodeName] = replacementNode
            } else {
              this.#root = replacementNode
            }
            break
          }
  
          // вариант с двумя
          const replacementNode = this.#findFrom(
            this.#minFrom( currentNode.rightChild ),
            currentNode.rightChild
          )
  
          this.#removeFrom( replacementNode.data, currentNode.rightChild, parentNode )
  
          if ( currentNode.leftChild ) {
            replacementNode.leftChild = currentNode.leftChild
          }
  
          if ( currentNode.rightChild !== replacementNode ) {
            replacementNode.rightChild = currentNode.rightChild
          }
  
          if ( parentNode ) {
            parentNode[ nodeName ] = replacementNode
          } else {
            this.#root = replacementNode
          }
  
          currentNode.leftChild = null
          currentNode.rightChild = null
        }
  
        parentNode = currentNode
        nodeName = ( data < currentNode.data ) ? 'leftChild' : 'rightChild'
        currentNode = currentNode[ nodeName ]
      }
    }
  
    remove( data ) {
      this.#removeFrom( data, this.#root )
    }
  
    #findFrom( data, currentNode ) {
      let answer = null
  
      while ( currentNode ) {
        if ( data === currentNode.data ) {
          answer = currentNode
          break
        }
  
        currentNode = ( data < currentNode.data ) ? currentNode.leftChild : currentNode.rightChild
      }
  
      return answer
    }
  
    find( data ) {
      return this.#findFrom( data, this.#root )
    }
  
    has( data ) {
      return Boolean(this.find( data ))
    }
  
    #minFrom( currentNode ) {
      let answer = currentNode ? currentNode.data : null
  
      while (currentNode && currentNode.leftChild) {
        answer = currentNode.leftChild.data
        currentNode = currentNode.leftChild
      }
  
      return answer
    }
  
    min() {
      return this.#minFrom( this.#root )
    }
  
    #maxFrom( currentNode ) {
      let answer = currentNode ? currentNode.data : null
  
      while ( currentNode && currentNode.rightChild ) {
        answer = currentNode.rightChild.data
        currentNode = currentNode.rightChild
      }
  
      return answer
    }
  
    max() {
      return this.#maxFrom( this.#root )
    }
  
  }

module.exports = {
  BinarySearchTree
};