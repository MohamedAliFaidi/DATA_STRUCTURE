<<<<<<< HEAD
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._size = 0;
  };


Stack.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

Stack.prototype.size = function() {
  return this._size;
};
=======
var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {};

Stack.prototype.pop = function () {};

Stack.prototype.size = function () {};
>>>>>>> 455de41f01636bb5290609163f5ae89e2ba71513
