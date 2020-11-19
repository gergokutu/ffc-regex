// Exact match
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("Should be true >", result);

// Check with test()
{
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log("Should be true >", result);
}

// Alternatives with |
{
  let petString = "James has a pet cat.";
  let petRegex = /dog|cat|bird|fish/;
  let result = petRegex.test(petString);
  console.log("Should be true >", result);
}

// Case insensitivity
{
  let myString = "freeCodeCamp";
  let fccRegex = /freecodecamp/i;
  let result = fccRegex.test(myString);
  console.log("Should be true >", result);
}

// Extract with mach()
{
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/;
  let result = extractStr.match(codingRegex);
  console.log("Should be coding... >", result);
}

// Do not stop at the first match > global flag 'g'
{
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /twinkle/gi;
  let result = twinkleStar.match(starRegex);
  console.log("Should be [ 'Twinkle', 'twinkle' ] >", result);
}

// Wildcard dot (.)
{
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/;
  let result = unRegex.test(exampleStr);
  console.log("Should be true >", result);
}

// character classes > e.g [abc]
{
  let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
  let vowelRegex = /[aeiou]/gi;
  let result = quoteSample.match(vowelRegex);
  console.log("Match result for all vowels:", result);
}

{
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z]/gi;
  let result = quoteSample.match(alphabetRegex);
  console.log("Match result for all letter characters:", result);
}

{
  let quoteSample = "Blueberry 3.141592653s are delicious.";
  let myRegex = /[h-s2-6]/gi;
  let result = quoteSample.match(myRegex);
  console.log("Match result for all letters h through s & numbers 2 through 6:", result);
}

// Negate char set with caret (^)
{
  let quoteSample = "3 blind mice.";
  let myRegex = /[^aeiou0-9]/gi;
  let result = quoteSample.match(myRegex);
  console.log("Negated:", result);
}

// Once or more times in sequence
{
  let difficultSpelling = "Mississippi";
  let myRegex = /s+/gi;
  let result = difficultSpelling.match(myRegex);
  console.log("Should be [ 'ss', 'ss' ] >", result);
}

// Zero or more times
{
  let chewieQuote = "Aaarrgh";
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
  console.log("Should be [ 'Aaa' ] >", result);
}

// Lazy vs greedy mathing
// Default is greedy > longest possible substring
// Use ? (after the quantifier) for lazy matching > shortest possible substring
{
  let text = "<h1>Winter is coming</h1>";
  let myRegex1 = /<.*>/;
  let myRegex2 = /<.*?>/;
  let result1 = text.match(myRegex1);
  let result2 = text.match(myRegex2);
  console.log(`Greedy: ${result1}\nLazy: ${result2}`);
}

// Find criminals > C
const regexCriminals = /C+/g;
const peopleString = "sdafcasCCCfdsCCdASDFCVBCC";
const criminals = peopleString.match(regexCriminals);
console.log("Criminals should be [ 'CCC', 'CC', 'C', 'CC' ] >", criminals);

// Match beginning string patterns
// Use caret (^) outside of char set ([])
// Caret inside is for negation > [^abc]
{
  let rickyAndCal = "Cal and Ricky both like racing.";
  let calRegex = /^Cal/;
  let result = calRegex.test(rickyAndCal);
  console.log("Should be true >", result);
}

// Match Ending String Patterns ($)
{
  let caboose = "The last car on a train is the caboose";
  let lastRegex = /caboose$/;
  let result = lastRegex.test(caboose);
  console.log("Should be true >", result);
}

// Shorthand for char set [A-Za-z0-9_] > \w
// Count alphanumeric characters
{
  let quoteSample = "The five boxing wizards jump quickly.";
  let alphabetRegexV2 = /\w/g;
  let result = quoteSample.match(alphabetRegexV2).length;
  console.log("Should be 31 >", result);
}

// [^A-Za-z0-9_] > \W
{
  let quoteSample = "The five boxing wizards jump quickly.";
  let nonAlphabetRegex = /\W/g;
  let result = quoteSample.match(nonAlphabetRegex).length;
  console.log("Should be 6 >", result);
}

// [0-9] > \d
{
  let movieName = "2001: A Space Odyssey";
  let numRegex = /\d/g;
  let result = movieName.match(numRegex).length;
  console.log("Should be 4 >", result);
}

// [^0-9] > \D
{
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /\D/g;
  let result = movieName.match(noNumRegex).length;
  console.log("Should be 17 >", result);
}

// Restrict possible usernames!
// 1) Usernames can only use alpha - numeric characters.
// 2) The only numbers in the username have to be at the end.
// There can be zero or more of them at the end. Username cannot start with the number.
// 3) Username letters can be lowercase and uppercase.
// 4) Usernames have to be at least two characters long.
// A two - character username can only use alphabet letters as characters.
{
  let username = "JackOfAllTrades";
  let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
  let result = userCheck.test(username);
  console.log("Should be true >", result);
  // ver2
  // {2,} > at least 2 of the preceding character
  let userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
  let result2 = userCheck2.test(username);
  console.log("Should be true >", result2);
}

// Match whitespace > \s equal to the [ \r\t\f\n\v]
// Count multiple whitespaces
{
  let sample = "Whitespace is important in separating words";
  let countWhiteSpace = /\s/g;
  let result = sample.match(countWhiteSpace).length;
  console.log("Should be 5 >", result);
}

// Match whitespace > \s equal to the [ \r\t\f\n\v]
// Count multiple whitespaces
{
  let sample = "Whitespace is important in separating words";
  let countWhiteSpace = /\S/g;
  let result = sample.match(countWhiteSpace).length;
  console.log("Should be 38 >", result);
}

// Quantity specifiers > {}
// Interval
{
  let ohStr = "Ohhh no";
  let ohRegex = /Oh{3,6}\sno/;
  let result = ohRegex.test(ohStr);
  console.log("Should be true >", result);
}

// Min number
{
  let haStr = "Hazzzzah";
  let haRegex = /Haz{4,}ah/;
  let result = haRegex.test(haStr);
  console.log("Should be true >", result);
}

// Exact number
{
  let haStr = "Hazzzzah";
  let haRegex = /Haz{3}ah/;
  let result = haRegex.test(haStr);
  console.log("Should be false >", result);
}

// Max number
{
  let haStr = "Hazzzah";
  let haRegex = /Haz{0,3}ah/;
  let result = haRegex.test(haStr);
  console.log("Should be true >", result);
}

// Optional char > ? (but NOT at the end!!!)
{
  let favWord = "favorite";
  let favRegex = /favou?rite/i;
  let result = favRegex.test(favWord);
  console.log("Should be true >", result);
}

// Lookaheads > positive, negative
// Checks the pattern but won't mach it
{
  let quit = "qu";
  let noquit = "qt";
  let quRegex = /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex); // Returns ["q"]
  noquit.match(qRegex); // Returns ["q"]
}
// Check two or more patterns in one string. 
// Password checker:
// 1. length is between 3 and 6 alphanumerical characters
// 2. and contains at least 1 number
{
  let password = "a1bcas";
  let checkPass = /^(?=\w{3,6}$)(?=\D*\d)/;
  let result = checkPass.test(password);
  console.log("Valid password should be true >", result);
}

// Other password checker:
// 1. greater than 5 characters long
// 2. do not begin with numbers
// 3. and have two consecutive digits.
{
  let sampleWord = "a22st";
  let pwRegex = /^\D(?=\w{4,})(?=\w*\d{2})/;
  let result = pwRegex.test(sampleWord);
  console.log("Valid password should be true >", result);
}

// Grouping
{
  let myString = "Eleanor Roosevelt";
  let myRegex = /(Eleanor|Franklin).*Roosevelt/;
  let result = myRegex.test(myString);
  console.log("Should be true >", result);
}

// Reuse patterns using capture groups
{
  let repeatNum = "42 42 42 42";
  let reRegex = /^(\d+)\s\1\s\1$/;
  let result = reRegex.test(repeatNum);
  console.log("Should be false >", result);
}

// Search and replace with capture groups
{
  let str = "one two three";
  let fixRegex = /^(\w+)\s(\w+)\s(\w+)$/gi;
  let replaceText = "$3 $2 $1"; // $3 refers to capture group 3
  let result = str.replace(fixRegex, replaceText);
  console.log("Should be 'three two one' >", result);
}

// Remove Whitespace from Start and End
{
  let hello = "   Hello, World!  ";
  // my version
  let wsRegex = /^(\s+)(.*)(\s+)$/g;
  let result = hello.replace(wsRegex, "$2");
  console.log("MY > Should be 'Hello, World!' >", result);
  // fcc version
  let wsRegex2 = /^\s+|\s+$/g;
  let result2 = hello.replace(wsRegex2, "");
  console.log("FCC > Should be 'Hello, World!' >", result2);
}