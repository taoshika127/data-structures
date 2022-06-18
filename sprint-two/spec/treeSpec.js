describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree._addChild).to.be.a('function');
    expect(tree._contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree._addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree._addChild(5);
    expect(tree._contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree._addChild(5);
    expect(tree._contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree._addChild(5);
    tree.children[0]._addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree._addChild(5);
    tree._addChild(6);
    tree.children[0]._addChild(7);
    tree.children[1]._addChild(8);
    expect(tree._contains(7)).to.equal(true);
    expect(tree._contains(8)).to.equal(true);
  });

  it('should add another level to the tree and correctly detect the nested children', function() {
    tree._addChild(1);
    tree.children[0]._addChild(2);
    tree.children[0].children[0]._addChild(3);
    expect(tree.children[0].children[0].children[0].value).to.equal(3);
    expect(tree._contains(3)).to.equal(true);
  });

});
