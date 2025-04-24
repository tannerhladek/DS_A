/**
 * Singly Linked List Node
 */
class ListNode {
  /**
   * @param {number} val - Value of the node
   * @param {ListNode} [nextNode=null] - Reference to the next node
   */
  constructor(val, nextNode = null) {
    this.val = val;
    this.next = nextNode;
  }
}

/**
 * Implementation for Singly Linked List
 */
class LinkedList {
  constructor() {
    /**
     * Initialize the list with a 'dummy' node, which makes
     * removing a node from the beginning of list easier.
     * @type {ListNode}
     */
    this.head = new ListNode(-1);
    this.tail = this.head;
  }

  /**
   * Retrieve value at index
   * @param {number} index - Index to retrieve value from
   * @returns {number} Value at index or -1 if index is out of bounds
   */
  get(index) {
    let curr = this.head.next;
    let i = 0;
    while (curr) {
      if (i === index) {
        return curr.val;
      }
      i++;
      curr = curr.next;
    }
    return -1; // Index out of bounds or list is empty
  }

  /**
   * Insert a new node at the head
   * @param {number} val - Value to insert
   */
  insertHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (!newNode.next) {
      // If list was empty before insertion
      this.tail = newNode;
    }
  }

  /**
   * Insert a new node at the tail
   * @param {number} val - Value to insert
   */
  insertTail(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  /**
   * Remove node at index
   * @param {number} index - Index to remove node from
   * @returns {boolean} True if removal was successful, false otherwise
   */
  remove(index) {
    let i = 0;
    let curr = this.head;
    while (i < index && curr) {
      i++;
      curr = curr.next;
    }

    // Remove the node ahead of curr
    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      curr.next = curr.next.next;
      return true;
    }
    return false;
  }

  /**
   * Retrieve all values in the list
   * @returns {number[]} An array containing all values in the list
   */
  getValues() {
    let curr = this.head.next;
    const res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    return res;
  }
}

// attempt 2
class ListNode {
  constructor(val, nextNode = null) {
    this.val = val;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode(-1); // init with placeholder ListNode
    this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let cur = this.head.nextNode;
    let i = 0;
    while (cur) {
      if (i === index) {
        return cur.val;
      }
      cur = cur.nextNode;
      i++;
    }

    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const curHead = this.head.nextNode;
    const newNode = new ListNode(val, curHead);
    this.head.nextNode = newNode;

    if (!newNode.nextNode) {
      this.tail = newNode;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.tail.nextNode = new ListNode(val);
    this.tail = this.tail.nextNode;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0;
    let cur = this.head; // start here as we need access to previous

    while (cur && i < index) {
      i++;
      cur = cur.nextNode;
    }

    if (cur && cur.nextNode) {
      if (cur.nextNode === this.tail) {
        this.tail = cur;
      }
      cur.nextNode = cur.nextNode.nextNode;
      return true;
    }

    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let cur = this.head.nextNode;
    const res = [];
    while (cur) {
      res.push(cur.val);
      cur = cur.nextNode;
    }
    return res;
  }
}
