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
        this.compare = comparator || ((a, b) => a < b ? -1 : a > b ? 1 : 0);
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
        return this.#calculateHeight(this.root);
    }

    findValue(value) {
        return this.#findValueFromTree(value, this.root);
    }

    #findValueFromTree(value, node) {
        if (!node) {
            return null;
        }

        const cmp = this.compare(value, node.value);
        if (cmp === 0) {
            return node;
        } else if (cmp < 0) {
            return this.#findValueFromTree(value, node.left);
        } else {
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
        const cmp = this.compare(value, node.value);
        if (cmp < 0) {
            if (!node.left) {
                node.left = new Node(value);
                return node.left;
            } else {
                return this.#addValueToTree(value, node.left);
            }
        } else {
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
