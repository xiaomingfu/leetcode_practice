/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function ismirror(p, q) {
    if (!p && !q) {
      return true;
    } else if (!p || !q) {
      return false;
    } else {
      if (p.val !== q.val) {
        return false;
      } else {
        return ismirror(p.left, q.right) && ismirror(p.right, q.left);
      }
    }
  }
  if (!root || ismirror(root.left, root.right)) {
    return true;
  } else {
    return false;
  }
};
