var count=0;
do
{
  var theguess = prompt("Guess a number between 1 and 5");
  while(theguess > 5 || theguess < 1) 
  { 
    alert ("You entered a number not between 1 and 5.  Guess again!");
    var theguess = prompt("Guess a number between 1 and 5");
  }


  var number = Math.floor(Math.random() * 5);
  if (theguess != number) {
    alert ("You guessed " + theguess + " This is wrong. Guess again!" );
  }
count=count+1;
}
while(theguess != number)
alert ("You guessed " + number + ". You were right!"+" The number of guesses you took was "+ count);
