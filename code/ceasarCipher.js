const ceasarCipher = (string, shift) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];
    let cipherArray = [];
    for (let i=0; i < string.length; i++) {
        let charIndex = alphabet.indexOf(string[i].toLowerCase());
        let cipherCharIndex =  (charIndex + shift + 26) % 26
        if (charIndex < 0) {
            cipherArray.push(string[i]);
            continue;
        };
        if (string[i].toUpperCase() === string[i]) {
            cipherArray.push(alphabet[cipherCharIndex].toUpperCase())
        }
        else {
            cipherArray.push(alphabet[cipherCharIndex])
        }
    }
    return cipherArray.join('')
}

module.exports = ceasarCipher;