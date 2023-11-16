/**
 * Challenge: Rot13
 */

function rot13(message) {
  return message.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    let base = code < 91 ? 65 : 97; // Determine base ASCII value
    return String.fromCharCode(((code - base + 13) % 26) + base);
  });
}

/* Other simplified approach */
const rot13 = (str) =>
  str.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
