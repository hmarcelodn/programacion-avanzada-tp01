class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    };
}

class Tree {
    constructor(){
        this.root = null;
    }

    addValue(value) {
        if (!this.root) {
            this.root = new Node();
            this.root.value = value;
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

    #calculateHeight(node, height = 0) {
        if (!node) {
            return height;
        }

        const leftHeight = this.#calculateHeight(node.left, height + 1);
        const rightHeight = this.#calculateHeight(node.right, height + 1);

        return Math.max(leftHeight, rightHeight);
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
                node.right = new Node();
                node.right.value = value;
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
