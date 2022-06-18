describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "_insert", "_contains", and "_depthFirstLog', function() {
    expect(binarySearchTree._insert).to.be.a('function');
    expect(binarySearchTree._contains).to.be.a('function');
    expect(binarySearchTree._depthFirstLog).to.be.a('function');
  });

  it('should _insert values at the correct location in the tree', function() {
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    binarySearchTree._insert(6);
    expect(binarySearchTree._left._right._value).to.equal(3);
    expect(binarySearchTree._right._left._value).to.equal(6);
  });

  it('should have a working "_contains" method', function() {
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    expect(binarySearchTree._contains(7)).to.equal(true);
    expect(binarySearchTree._contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "_depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree._insert(2);
    binarySearchTree._insert(3);
    binarySearchTree._insert(7);
    binarySearchTree._depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should return false for "_contains" method and undefined for "_depthFirstLog" function with empty input', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    expect(binarySearchTree._contains(1)).to.equal(false);
    expect(array).to.eql([]);
  });
});
