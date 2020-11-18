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
// Use ? for lazy matching > shortest possible substring
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
  let calRegex = /^Cal/; // Change this line
  let result = calRegex.test(rickyAndCal);
  console.log("Should be true >", result);
}
