const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  // throw new NotImplementedError('Not implemented');
  let newObject = [];

  if( Array.isArray( l ) ){
    l.map( ( item ) => {
      if( item === k ) {
        return
      } else {
        return newObject.push( item )
      }
    }, [])
  }

  if( typeof l === "object" ){
    return newObject = deleteElem( l );
  }

  function deleteElem( obj ){
    if( obj.next === null && checkIsMatch( obj.value ) ){
      return { value: null, next: null }
    } else if( obj.next === null && !checkIsMatch( obj.value ) ){
      return obj
    } else {
      if( obj.value === k ){
        obj = recursive( obj.next )
      } else {
        obj.next = recursive( obj.next )
      }
      
      return obj;
    }
  }

  function recursive( obj ){
    const newObj = {}

    if( obj === null ){
      return
    }

    if( obj.next === null && !checkIsMatch( obj.value ) ){
      return obj
    } else if( obj.next === null && checkIsMatch( obj.value ) ){
      return null
    } else if( obj.next !== null && !checkIsMatch( obj.value ) ){
      // newObj.value = obj.value;
      // newObj.next = obj.next;
      // newObj.next = recursive( newObj.next )
      // return newObj
      obj.next = recursive( obj.next )
      return obj
    } else if( obj.next !== null && checkIsMatch( obj.value ) ){
      // newObj.value = obj.next.value;
      // newObj.next = obj.next.next;
      // obj = recursive( newObj )
      // return obj
      obj.value = obj.next.value;
      obj.next = obj.next.next;
      obj = recursive( obj )
      return obj
    }
  }

  function checkIsMatch( value ){
    if( value === k ){
      return true;
    } else {
      return false
    }
  }

  return newObject
}

module.exports = {
  removeKFromList
};
