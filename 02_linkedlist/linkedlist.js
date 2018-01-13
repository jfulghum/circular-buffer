function LinkedList(){
  this.tail = undefined;
  this.head = undefined;
}

LinkedList.prototype.addToTail = function(val){
  if (this.tail === undefined){
    this.tail = new Node(val);
    this.head = this.tail
  } else {

    var oldTail = this.tail;
    this.tail = new Node(val);

    oldTail.next = this.tail; // only if it exists
    this.tail.previous = oldTail;
  }
}

LinkedList.prototype.addToHead = function(val){
  if(this.head === undefined){
    this.head = new Node(val);
    this.tail = this.head;
  } else {
    var oldHead = this.head;
    this.head = new Node(val);
    this.head.next = oldHead;
    oldHead.previous = this.head;
  }
}

LinkedList.prototype.removeHead = function(){
  if(this.head === undefined){
    return undefined;
  }
  var oldHead = this.head;
  if (oldHead.next === null){
    this.head = undefined;
    this.tail = undefined;
    return oldHead.value;
  } else {
    this.head = oldHead.next;
    this.head.previous = null;
    return oldHead.value;
  }
}

LinkedList.prototype.removeTail = function(){
  if(this.tail === undefined){
    return undefined;
  }
  var oldTail = this.tail;
  if(oldTail.previous === null){
    this.tail = undefined;
    return oldTail.value;
  } else {
    this.tail = oldTail.previous;
    this.tail.next = null;
    return oldTail.value;
  }
}

LinkedList.prototype.search = function(val){
  var currentNode = this.head;
  if(typeof val === 'function'){
    if(val(currentNode.value)){
      return currentNode.value;
    }
    while(currentNode.next){
      currentNode = currentNode.next;
      if(val(currentNode.value)){
        return currentNode.value;
      };
    }
  }
  if(this.head.value === val){
    return val;
  }
  while(currentNode.next){
    if(currentNode.next.value === val){
      return val;
    } else {
      currentNode = currentNode.next;
    }
  }
  return null;
}


function Node(val){
  this.value = val;
  this.next = null;
  this.previous = null;
}

function Queue(){
  this.list = new LinkedList;
  this.counter = 0;
}

Queue.prototype.enqueue = function(val){
  var newNode = new Node(val);
  this.list.addToTail(newNode);
  this.counter++;
}

Queue.prototype.dequeue = function(){
  if(this.counter === 0){
    return undefined;
  }
  this.counter--;
  return this.list.removeHead().value;
}

Queue.prototype.size = function(){
  return this.counter;
}