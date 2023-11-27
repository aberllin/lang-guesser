const detectLang = require('franc');
const langs = require('langs');
const colors = require('colors');


const langInput = process.argv[2];

const minLengthInput = 4;

const langCode = detectLang(langInput, {minLength: minLengthInput});

if (langInput.length < minLengthInput) {
    return console.error((`Minimum required length of input is: ${minLengthInput}`).red)
}

if (langCode === 'und') {
   return console.error(('Language is not found, check if everything is spelled correctly.').red)
}
const language = langs.where(3, langCode);
if (!language) {
    return console.error(('Sorry we could not detect the language, try another sample.').red)
}
console.log((`Out best guess is: ${language.name}`).green);