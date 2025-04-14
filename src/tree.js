class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };
}

class Tree {
    constructor() {
        this.root = null;
    }

    addValue(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this.root;
        } else {
            return this.#addValueToTree(value, this.root);
        }
    }

    height() {
        return this.#calculateHeight(this.root, 0);
    }

    findValue(value) {
        return this.#findValueFromTree(value, this.root);
    }

    #findValueFromTree(value, node) {
        if (!node) {
            return null;
        }

        const isSameValue = node.value === value;

        if (isSameValue) {
            return node;
        }

        if (value < node.value && !isSameValue) {
            return this.#findValueFromTree(value, node.left);
        }

        if (value >= node.value && !isSameValue) {
            return this.#findValueFromTree(value, node.right);
        }
    }

    #calculateHeight(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = this.#calculateHeight(node.left);
        const rightHeight = this.#calculateHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    #addValueToTree(value, node) {
        if (value < node.value) {
            if (!node.left) {
                node.left = new Node();
                node.left.value = value;
                return node.left;
            } else {
                return this.#addValueToTree(value, node.left);
            }
        } 
        
        if (value >= node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return node.right;
            } else {
                return this.#addValueToTree(value, node.right);
            }
        }
    }
}

module.exports = {
    Tree
};
