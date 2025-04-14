const { Tree } = require('../tree');

describe('Tree', () => {
    it('Should create root element tree', () => {
        // Arrange
        const tree = new Tree();
        const valueToAdd = 1;

        // Act
        const node = tree.addValue(valueToAdd);

        // Assert
        expect(node.value).toBe(valueToAdd);
    });

    it('Should create left element tree', () => {
        // Arrange
        const tree = new Tree();
        const valueToAdd = 7;

        // Act
        tree.addValue(10);
        tree.addValue(valueToAdd);

        // Assert
        expect(tree.root.left.value).toBe(valueToAdd);
    });

    it('Should create right element tree', () => {
        // Arrange
        const tree = new Tree();
        const valueToAdd = 12;

        // Act
        tree.addValue(10);
        tree.addValue(valueToAdd);

        // Assert
        expect(tree.root.right.value).toBe(valueToAdd);
    });

    it('Should create right and left elements tree', () => {
        // Arrange
        const tree = new Tree();
        const leftValueToAdd = 8
        const rightValueToAdd = 12;

        // Act
        tree.addValue(10);
        tree.addValue(leftValueToAdd);
        tree.addValue(rightValueToAdd)

        // Assert
        expect(tree.root.left.value).toBe(leftValueToAdd)
        expect(tree.root.right.value).toBe(rightValueToAdd)
    });

    it('Should have height 0 when tree is empty', () => {
        // Arrange
        const tree = new Tree();

        // Act
        const height = tree.height();

        // Assert
        expect(height).toBe(0);
    });

    it('Should have height 2 when left child exists', () => {
        // Arrange
        const tree = new Tree();

        // Act
        tree.addValue(10);
        tree.addValue(8);
        const height = tree.height();

        // Assert
        expect(height).toBe(2);
    }); 

    it('Should have height 2 when left child exists', () => {
        // Arrange
        const tree = new Tree();

        // Act
        tree.addValue(10);
        tree.addValue(12);
        const height = tree.height();

        // Assert
        expect(height).toBe(2);
    });   
    
    it('Should have height 4 when left child exists', () => {
        // Arrange
        const tree = new Tree();

        // Act
        tree.addValue(10);
        tree.addValue(9);
        tree.addValue(8);
        tree.addValue(7);
        const height = tree.height();

        // Assert
        expect(height).toBe(4);
    });  
    
    it('Should find existing value', () => {
        // Arrange
        const tree = new Tree();
        const valueToFind = 7;

        // Act
        tree.addValue(10);
        tree.addValue(9);
        tree.addValue(8);
        tree.addValue(7);
        const node = tree.findValue(valueToFind);

        // Assert
        expect(node.value).toBe(valueToFind);
    });  
    
    it('Should not find non-existing value', () => {
        // Arrange
        const tree = new Tree();
        const valueToFind = 6;

        // Act
        tree.addValue(10);
        tree.addValue(9);
        tree.addValue(8);
        tree.addValue(7);
        const node = tree.findValue(valueToFind);

        // Assert
        expect(node).toBe(null);
    });      
});
