const reverseString = string => {
    let array = string.split('');
    let reversedArray = array.reverse();
    let joinedString = reversedArray.join('');
    return joinedString;
}

module.exports = reverseString;