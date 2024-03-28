class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  constructor() {

    this._storage = {};
    this._size = 0;
      }


  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size && this._size--;
    var result = this._storage[this._size];

    delete this._storage[this._size];

    return result;
  }

  size() {
    return this._size;
  }
  }
=======
  constructor() {}

  push(value) {}

  pop() {}

  size() {}
}
>>>>>>> 455de41f01636bb5290609163f5ae89e2ba71513
