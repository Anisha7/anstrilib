/* eslint-disable no-extend-native */

// Capitalizes the first letter of the string.
// TODO: If first letter is a space, this won't capitalize the next one.
String.prototype.capitalize = () => this.charAt(0).toUpperCase() + this.substr(1);

// Capitalizes all letters of the string.
String.prototype.allCaps = () => this.toUpperCase();

// Capitalizes the first character of each word, in a space separated string
String.prototype.capitalizeWords = () => {
  const result = [];
  this.split(' ').forEach((word) => {
    result.push(word.capitalize());
  });
  return result.join(' ');
};

// Capitalizes the first character of each headline word, in a space separated string
// Headline words exclude the, in, a, an, and, but, for, at, by, from (unless its the first word)
String.prototype.capitalizeHeadline = () => {
  const result = [];
  const exceptions = new Set(['the', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from', 'in']);
  this.split(' ').forEach((word) => {
    if (!exceptions.has(word)) {
      result.push(word.capitalize());
    } else {
      result.push(word);
    }
  });
  // Ensure the first word is always capitalized
  return result.join(' ').capitalize();
};

// Removes all spaces from the beginning and end of a string along with any extra spaces in the middle
String.prototype.removeExtraSpaces = () => {
  const result = [];
  this.trim().split(' ').forEach((word) => {
    if (word.length > 0) {
      result.push(word.trim());
    }
  });
  return result.join(' ');
};

// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// " Hello world " -> "hello-world"
String.prototype.kabobCase = () => this.removeExtraSpaces().toLowerCase().split(' ').join('-');

// Removes extra space and replaces spaces with an underscore "_", 
// and makes all characters lowercase.
// " what the heck " -> "what_the_heck"
String.prototype.snakeCase = () => this.removeExtraSpaces().toLowerCase().split(' ').join('_');

// Lowercases the first character of the first word.
// Uppercases the first character of all other words, and removes all spaces.
// Camel Case -> camelCase
String.prototype.camelCase = () => {
  const tempWordList = this.removeExtraSpaces().capitalizeWords().split(' ');
  tempWordList[0] = tempWordList[0].toLowerCase();
  return tempWordList.join('');
};
