const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(){
    this.stack = []
  }

  push( item ) {
    // throw new NotImplementedError('Not implemented');
    this.stack.push( item );
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    if ( this.stack.length !== 0 ){
      return this.stack.pop();
    } else {
        return undefined;
    }
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    return this.stack[this.stack.length - 1];

  }
}

module.exports = {
  Stack
};
