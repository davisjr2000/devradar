module.exports = function parseStringAsArray(arrayAsString = []) {
    return arrayAsString.split(',').map((tech) => tech.trim());
}

// This method converts a String to an Array
