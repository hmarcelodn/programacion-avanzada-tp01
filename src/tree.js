class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };
}

class Tree {
    constructor(comparator = null) {
        this.root = null;
        this.compare = comparator || ((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

    addValue(value) {
        if (this.root === null) {
            this.root = new Node(value);
            console.log(`Nodo raiz insertado con registro = ${value.nro_registro}`);
            return this.root;
        } else {
            return this.#addValueToTree(value, this.root);
        }
    }

    height() {
        return this.#calculateHeight(this.root);
    }

    findValue(value) {
        // if (!value || !value.nro_registro) {
        //     console.warn('findValue called with invalid value or missing nro_registro', value);
        //     return null;
        // }
        // if (isNaN(parseInt(value.nro_registro))) {
        //     console.warn('findValue called with invalid nro_registro', value.nro_registro);
        //     return null;
        // }
        return this.#findValueFromTree(value, this.root);
    }

    #findValueFromTree(value, startNode) {
        let currentNode = startNode;
        while (currentNode !== null) {
            const cmp = this.compare(value, currentNode.value);
            
            if (cmp === 0) {
                return currentNode;
            } else if (cmp < 0) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    #calculateHeight(node) {
        if (!node) return 0;
        
        let height = 0;
        const queue = [{ node, level: 1 }];
        
        while (queue.length > 0) {
            const { node: current, level } = queue.shift();
            height = Math.max(height, level);
            
            if (current.left) {
                queue.push({ node: current.left, level: level + 1 });
            }
            if (current.right) {
                queue.push({ node: current.right, level: level + 1 });
            }
        }
        
        return height;
    }

    #addValueToTree(value, startNode) {
        let currentNode = startNode;
        while (true) {
            const cmp = this.compare(value, currentNode.value);
            
            if (cmp === 0) {
                return currentNode; // Duplicate
            } else if (cmp < 0) {
                if (!currentNode.left) {
                    currentNode.left = new Node(value);
                    return currentNode.left;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new Node(value);
                    return currentNode.right;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

module.exports = {
    Tree
};
