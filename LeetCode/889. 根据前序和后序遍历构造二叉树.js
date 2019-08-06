//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

//返回与给定的前序和后序遍历匹配的任何二叉树。
//pre 和 post 遍历中的值是不同的正整数。

pre = [1, 2, 4, 5, 3, 6, 7], post = [4, 5, 2, 6, 7, 3, 1]

var constructFromPrePost = function (pre, post) {
    if (pre.length === 0) {
        return null
    }
    let root = pre[0]
    let lroot = post.indexOf(pre[1])
    let tree = new TreeNode(root)
    tree.left = constructFromPrePost(pre.slice(1, lroot + 2), post.slice(0, lroot + 1))
    tree.right = constructFromPrePost(pre.slice(lroot + 2), post.slice(lroot + 1, post.length - 1))
    return tree
};

t = constructFromPrePost(pre, post)