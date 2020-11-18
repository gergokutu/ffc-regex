let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("Should be true >", result);

{
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /Waldo/;
  let result = waldoRegex.test(waldoIsHiding);
  console.log("Should be true >", result);
}

{
  let petString = "James has a pet cat.";
  let petRegex = /dog|cat|bird|fish/;
  let result = petRegex.test(petString);
  console.log("Should be true >", result);
}

{
  let myString = "freeCodeCamp";
  let fccRegex = /freecodecamp/i;
  let result = fccRegex.test(myString);
  console.log("Should be true >", result);
}

{
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/;
  let result = extractStr.match(codingRegex);
  console.log("Should be coding... >", result);
}

{
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /twinkle/gi;
  let result = twinkleStar.match(starRegex);
  console.log("Should be [ 'Twinkle', 'twinkle' ] >", result);
}

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
  let myRegex = /s+/gi; // Change this line
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