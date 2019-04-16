export class Node {
  constructor(name) {
    this._name = name;
  }

  getNodeName() {
    return this._name;
  }

  // Will be overrideen by classes extending this class
  getType() {}
  getDepth() {};
  addChildNode(component) {}
  getChildNodeByIndex(index) {}

  static visualizeNodeTree(root) {
    let structure = '';
    function traverse(node, indent = 0) {
      structure += `${'-->'.repeat(indent)} ${node.getNodeName()}\n`;
      indent++;
      for (let i = 0, length = node.getDepth(); i < length; i++) {
        traverse(node.getChildNodeByIndex(i), indent);
      }
    }
    traverse(root);
    return structure;
  }
}

Object.freeze(Node);

export class LeafNode extends Node {
  constructor(name) {
    super(name);
    this._type = 'Leaf Node';
  }

  getType() {
    return this._type;
  }

  getDepth() {
    return 0;
  }
}

export class CompositeNode extends Node {
  constructor(name) {
    super(name);
    this._type = 'Composite Node';
    this._children = [];
  }

  getType() {
    return this._type;
  }

  addChildNode(component) {
    this._children = [...this._children, component];
  }

  getChildNodeByIndex(index) {
    return this._children[index];
  }

  getDepth() {
    return this._children.length;
  }
}