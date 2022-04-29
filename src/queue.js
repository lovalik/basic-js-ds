const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = {
      "value": null,
      "next": null
    };
  }

  enqueue( elem ){
    let obj = {}
      
      if( this.list.value === null && this.list.next === null ){
        console.log(1)
        this.list.value = elem;
      } else if( this.list.value !== null && this.list.next === null ){
        console.log(2)

        obj.value = elem;
        obj.next = null;
        this.list.next = obj;

      } else {
        console.log(3)
        this.list = createObject( this.list, elem );
      }

      function createObject( list, elem ){
        let obj = {};
        const updatedList = {};

        if( list.next === null ){
          console.log(5)

          obj.value = elem;
          obj.next = null;

          updatedList.value = list.value;
          updatedList.next = obj

          return updatedList
        } else {
          console.log(6)

          updatedList.value = list.value;
          updatedList.next = list.next
          updatedList.next = createObject( updatedList.next, elem )
          return updatedList
        }
      }
  }

  dequeue(){
      if( this.list.value === null && this.list.value == null ){
        return this.list.value;
      } else if( this.list.value !== null && this.list.next === null ){
          this.list.value = null;
          return this.list.value;
      } else {
          let elem = this.list.value;
          this.list.value = this.list.next.value;
          this.list.next = this.list.next.next;
          return elem;
      }
  }

  getUnderlyingList(){
    return this.list
  }
}

module.exports = {
  Queue
};
