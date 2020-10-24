const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split("**********");
    let decoded = [];

    for(let i = 0; i < words.length; i++) {
        let word = words[i];
        let letter = "";

        for(let j = 0; j < word.length; j = j + 10) {
            letter = word.substr(j, 10);

            letter = letter.split("11").join("-");
            letter = letter.split("10").join(".");
            letter = letter.split("0").join("");

            decoded.push(MORSE_TABLE[letter]);
        }

        decoded.push(" ");
    }

    return decoded.join("").trim();
}

module.exports = {
    decode
}