function Queue(){
  this.array = [];
  this.head = 0;
  this.tail = 0;
  this.counter = 0;
}

Queue.prototype.enqueue = function(val){
  this.array[this.tail] = val;
  this.tail++;
  this.counter++;
}

Queue.prototype.dequeue = function(){
  if (!this.array[0]){
    return this.array[0];
  }
  if (this.counter > 0){
    this.counter--;
  }
  var firstHead = this.array[this.head];
  this.head++;
  return firstHead;
}

Queue.prototype.size = function(){
  return this.counter;
}