
// Capitalizes the first letter of the string.
// TODO: If first letter is a space, this won't capitalize the next one.
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substr(1)
 }
 
// Capitalizes all letters of the string.
String.prototype.allCaps() = function() {
    return this.toUpperCase()
}

// Capitalizes the first character of each word, in a space separated string
String.prototype.capitalizeWords() = function() {
    result = []
    this.split(" ").forEach(word => {
        result.push(capitalize(word))
    });
    return result.join(" ")
}

// Capitalizes the first character of each headline word, in a space separated string
// Headline words exclude the, in, a, an, and, but, for, at, by, from
String.prototype.capitalizeHeadline() = function() {
    result = []
    exceptions = new Set(["the", "in", "a", "an", "and", "but", "for", "at", "by", "from"])
    this.split(" ").forEach(word => {
        if (exceptions.has(word) === false) {
            result.push(capitalize(word))
        }
    });
    return result.join(" ")
}