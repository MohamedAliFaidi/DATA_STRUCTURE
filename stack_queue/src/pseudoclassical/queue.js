<<<<<<< HEAD
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._start = 0;
  this._end = 0;
  };


Queue.prototype.enqueue = function(value) {
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var result = this._storage[this._start];
  delete this._storage[this._start];

  this.size() && this._start++;

  return result;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};
=======
var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function (value) {};

Queue.prototype.dequeue = function () {};

Queue.prototype.size = function () {};
>>>>>>> 455de41f01636bb5290609163f5ae89e2ba71513
