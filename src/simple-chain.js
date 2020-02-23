const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) &&
        position <= this.chain.length &&
        position > 0) {
          this.chain.splice(position - 1, 1);
          return this;
        } else {
          this.chain = [];
          throw new Error();
        }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    var res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
