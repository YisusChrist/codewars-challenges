/**
 * Challenge: Convert string to camel case
 */

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;

  return str.substring(0, index) + chr + str.substring(index + 1);
}

function removeCharAt(str, index) {
  if (index > str.length - 1) return str;

  return str.substring(0, index) + str.substring(index + 1, str.length);
}

/* Complete this function */
function toCamelCase(str) {
  const separators = ["-", "_"];

  if (!str) return "";

  if (!separators.some((s) => str.includes(s))) return str;

  let result = str.slice();

  for (const sep of separators) {
    let startIndex = 0;

    while ((index = result.indexOf(sep, startIndex)) > -1) {
      result = removeCharAt(result, index);
      result = setCharAt(result, index, result.charAt(index).toUpperCase());
      startIndex = index + sep.length;
    }
  }

  return result;
}
