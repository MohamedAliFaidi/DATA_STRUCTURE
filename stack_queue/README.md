# Sprint One: Object-Oriented Programming

---

In this assignment, we'll implement and test two basic data structures:

## 1. [Queue]

A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (_FIFO_: first in, first out).

![queue image]

### Great examples for queue usage

Files waiting to be printed.

> **_Can you think of more examples?_**

## 2. [Stack]

A stack works like a stack of plates -- plates are added and removed from the the top of the stack (_LIFO_: last in, first out).

![stack image]

### A stack would be great for...

Implementing your browser's back button.

> **_Can you think of more examples?_**

## Goal

Implement both **stack** and **queue** data structures in each of five instantiation styles. The functional style is stubbed out in `src/functional/queue.js` and `src/functional/stack.js` to get you started.

## Coding Style

This repo uses [Husky](https://typicode.github.io/husky/#/) to check your code quality.
Husky will check your code for syntax errors and violations against the [standard style](https://github.com/standard/eslint-config-standard#readme) before each commit.

It uses a pre-commit hook to run staged files through `eslint` before each commit. `eslint` is a linter that will block your commit should you have any syntax errors, or, should you violate the standard style guide. There are some preferred whitespace style rules that will give warnings but not block your commit. Your work will be of a higher quality if you follow the instructions of the linter. That said, if the linter gives you any funny bugs, these bugs are not intentional, and you should feel free to call for one of the HiRs or skip using it during commits with the `--no-verify` option.

## Requirements

- No arrays! Instead, use an object with numeric keys
- Pass all the tests (open `SpecRunner.html` in a browser to see which tests are passing)

## Data Structure Specs

- Implement a [stack] with the following methods:

  - `push(string)` - Add a string to the top of the stack
  - `pop()` - Remove and return the string on the top of the stack
  - `size()` - Return the number of items on the stack

- Implement a [queue] with the following methods:
  - `enqueue(string)` - Add a string to the back of the queue
  - `dequeue()` - Remove and return the string at the front of the queue
  - `size()` - Return the number of items in the queue

## Instantiation Styles

1. **Functional instantiation**: a simple "maker" pattern
    - _Do:_
      - Work within the `src/functional/` folder
      - Define all functions and properties within the maker function
    - _Don't:_
      - Use the keyword `new`, the keyword `this`, or any `prototype` chains
      - Capitalize the maker function name
    - _Example_: The provided classes `Stack` and `Queue` already follow this pattern
2. **Functional instantiation with shared methods**: same as step 1, but with shared methods
    - _Do:_
      - Work within the `src/functional-shared/` folder
      - Create an object that holds the methods that will be shared by all instances of the class
      - Use the keyword `this` in your methods
      - Use [`_.extend`][_.extend] to copy the methods onto the instance
    - _Don't:_
      - Use the keyword `new` or `prototype` chains
    - _Example_: [functional instantiation example]
3. **Prototypal instantiation**: using `Object.create`
    - _Do:_
      - Work within the `src/protoypal/` folder.
      - Use [`Object.create`][object.create] with the object from step 2 to create instances of your class
    - _Don't:_
      - Use the keyword `new`
    - _Example:_ [prototypal instantiation example]
4. **Pseudoclassical instantiation**: create instances with the keyword `new`

    - _Do:_
      - Work within the `src/pseudoclassical/` folder
      - Capitalize your function name to indicate to others that it is intended to be run with the keyword `new`
      - Use the keyword `new` when instantiating your class
      - Use the keyword `this` in your constructor
    - _Don't:_
      - Declare the instance explicitly
      - Return the instance explicitly
    - _Example:_ [pseudoclassical instantiation example]

5. **ES6 instantiation**: declare classes with the keyword `class`
    - _Do:_ - Work within the `src/es6/` folder - Capitalize your function name to indicate to others that it is intended to be run with the keyword `new` - Use the keyword `new` when instantiating your `class` - Use the keyword `this` in your constructor - Explicitly declare a class method named `constructor` - Declare all other class methods within the class declaration
      - _Don't:_
        - Declare the instance explicitly
        - Return the instance explicitly
        - Add class methods to the class prototype directly
      - _Example:_ [es6 instantiation example]

[functional instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeExtend.js
[prototypal instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePrototype.js
[pseudoclassical instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffePseudoClassical.js
[es6 instantiation example]: https://github.com/hackreactor/giraffeMaker/blob/master/src/giraffeES6.js
[stack image]: http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/200px-Data_stack.svg.png
[queue image]: http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/200px-Data_Queue.svg.png
[stack]: http://en.wikipedia.org/wiki/Stack_(abstract_data_type)
[queue]: http://en.wikipedia.org/wiki/Queue_(abstract_data_type)
[array]: http://mdn.io/Array
[array methods]: http://mdn.io/Array#Methods_of_Array_instances
[object.create]: http://mdn.io/Object.create
[_.extend]: http://underscorejs.org/#extend
