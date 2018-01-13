function QueueCirc(val){
  this.data = new Uint8Array(val);
  this.size = val;
  this.head = 0;
  this.tail = 0
}

QueueCirc.prototype.enqueue = function(val){
  if(val > 255 || val < 0){
    throw 'Error';
  }
  if(this.tail < this.size){
    this.data[this.tail] = val;
    this.tail++;
  } else {
    throw 'Error';
  }
}

QueueCirc.prototype.dequeue = function(){
  if(this.tail === 0){
    throw 'Error';
  }
  var oldHead = this.data[this.head];
  console.log('Old Head: ', oldHead);
  console.log(this.data);
  this.head++;
  console.log('Current head: ',this.data[this.head])
  //this.data[this.head] = this.data[this.head++];
  this.tail--;
  return oldHead;
}