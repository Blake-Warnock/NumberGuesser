$(document).ready(function () {
  //establishes the restart
  $("#restart").click(function () {
    //generates computers number
    comNum = Math.floor(Math.random() * 500 + 1);

    kickout = false;

    //sets number of guesses back to ten
    counter = 10;
    $("#guesses").val(counter);

    //empties the users guess field
    $("#guess").val("");

    //empties the result field
    $("#result").val("");
  });

  //triggers the restart
  $("#restart").trigger("click");

  $("#gbutton").click(function () {
    while (counter > 1 && kickout != true) {
      // shows computer's number
     //   $("#computer").html(comNum);

      //Intakes the users guess
      var userNum = $("#guess").val();

      //counts down for each attempt
      counter -= 1;
      $("#guesses").val(counter);

      //checks the user's number against the computer's
      if (userNum > comNum) {
        $("#result").val("Too High");
      } else if (userNum < comNum) {
        $("#result").val("Too Low");
      } else {
        $("#result").val("You guessed it!");
        alert("You Won! \nPress Play Again, to play again!");
        kickout = true;
        return kickout;
      }
      //if user guessed wrong all 10 times
      return kickout;
    }

    //the user guesses the right number on their last try
    //also ensures that when the user has won and continues to press the guess button, they will get the victory message
    var userNum = $("#guess").val();
    if (userNum == comNum) {
      $("#result").val("You guessed it!");
      kickout = true;
      alert("You Won! \nPress Play Again, to play again!");
    }

    //if user got kicked out
    if (kickout == false) {
      alert("GAMEOVER\nPress Play Again, to play again!");
      $("#guesses").val(0);
      $("#result").val("GAMEOVER!");
    }
  });
});
