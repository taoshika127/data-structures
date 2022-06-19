var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueued = 0;
  var dequeued = 0;

  someInstance.enqueue = function (val) {
    storage[enqueued] = val;
    enqueued++;
  };

  someInstance.dequeue = function () {
    if (dequeued >= enqueued) {
      return undefined;
    }
    var dequeuedItem = storage[dequeued];
    delete storage[dequeued];
    dequeued++;
    return dequeuedItem;
  };

  someInstance.size = function () {
    return enqueued - dequeued;
  };


  return someInstance;
};