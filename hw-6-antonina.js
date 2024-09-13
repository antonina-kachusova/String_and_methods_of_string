// 1-String concatenation: Compose a message about your favorite movie, its genre and year of release, 
// using concatenation via the + operator and pattern strings.
// // example of initial data
// let film = "Interstellar";
// let genre = "science fiction";
// let year = 2014;

// option 1
let film = "'Why Women Kill' ";
let genres = "Comedy, Crime, Drama ";
let year = 2019 ;
let storyline = "\n'Why Women Kill details the lives of three women living in three \ndifferent decades: a housewife in the '60s, a socialite in the '80s, \nand a lawyer in 2019, each dealing with infidelity in their marriages. \nThe series examines how the roles of women have changed, but how their \nreaction to betrayal - has not.'";
let taglines = "'1 House. 3 Decades. 3 Women - same problem.'";
const result = film + genres + year + storyline + taglines;
console.log(result); 

// option 2
let film1 = "'Why Women Kill' ";
let genres1 = "Comedy, Crime, Drama ";
let year1 = 2019 ;
let storyline1 = `"Why Women Kill" details the lives of three women living in three different decades: 
\t\t\t\a housewife in the '60s, a socialite in the '80s, and a lawyer in 2019, each dealing with infidelity 
\t\t\t\in their marriages. The series examines how the roles of women have changed,
\t\t\t\ but how their reaction to betrayal - has not.`;
let taglines1 = "'1 House. 3 Decades. 3 Women - same problem.'";
const result1 = `Film: ${film1} \nGenres: ${genres1} \nYear: ${year1} \nStoryline: ${storyline1} \nTaglines: ${taglines1}`; 
console.log(result1);

// 2-Work with escaping characters: Form a string with your favorite expression, 
// using different types of quotes and including newline and tab characters in it.
// // example of initial data:
// // Better to 'light' a candle than 'curse' the darkness

let phrase1 = '\'Live fast, die young\'';
console.log(phrase1);
let phrase2 = "\"No Money, No Honey\"";
console.log(phrase2);
let phrase3 = "Become \"a YouTube star\"";
console.log(phrase3);

// 3-Line Search: Find the position of the word "light" and "dark" in the poem, 
// and check if the word "light" occurs at the beginning or end of the string.
// // example of initial data:
let v = "Light at the end of the tunnel, only darkness behind"
console.log(v.indexOf('Light')); 
console.log(v.indexOf('darkness'));
console.log(v.startsWith('Light'));
console.log(v.endsWith('Light'));

console.log(v.includes('darkness'));
// console.log(v.lastIndexOf('light')); 
// console.log(v.lastIndexOf('darkness'));

// 4-Change case and replace part of the string: Convert all characters of the string to lowercase, then replace the word "sun" with "moon".
// // example of initial data:
let phrase = "The Sun shines brightly";
console.log(phrase.toLowerCase().replace("sun", 'moon'));
console.log(phrase.replace("Sun", 'Moon'));









    
    
 

