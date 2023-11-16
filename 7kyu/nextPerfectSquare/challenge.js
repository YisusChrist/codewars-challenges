/**
 * Challenge: Find the next perfect square!
 */

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let root = Math.sqrt(sq);
  return Number.isInteger(root) ? Math.pow(root + 1, 2) : -1;
}
