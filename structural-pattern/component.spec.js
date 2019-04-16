
import { Node, CompositeNode, LeafNode } from './component';

describe('component', () => {
  test('it should place node at correct level', () => {
    // usage
    const node = new CompositeNode('root');
    node.addChildNode(new LeafNode('left'));

    const right = new CompositeNode('right');
    node.addChildNode(right);
    right.addChildNode(new LeafNode('right-left'));
    
    const rightMid = new CompositeNode('right-middle');
    right.addChildNode(rightMid);
    right.addChildNode(new LeafNode('right-right'));
    rightMid.addChildNode(new LeafNode('left-end'));
    rightMid.addChildNode(new LeafNode('right-end'));

    expect(Node.visualizeNodeTree(node)).not.toBeNull();
  });
});