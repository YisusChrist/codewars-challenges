/**
 * Challenge: Replace With Alphabet Position
 */

function alphabetPosition(text) {
  let result = text.replace(/[a-z]/gi, (char) => {
    return char.toLowerCase().charCodeAt(0) - 96;
  });

  return result.substring(0, result.length - 1);
}
