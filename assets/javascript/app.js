
$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button
  	var number = 60;
  	alert("Lets Start The Game!");
    $("#start-button").on("click", start);  // starts game
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts game
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
    	clearInterval(counter); // stops the timer
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    	clearInterval(counter); // stops the timer
    	timer();
    }
    
    // scripts here:

    function submit() {
    console.log('submitted');

    // get each answer score
    function answerScore (qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
          if (radiosNo[i].checked) {
      // do something with radiosNo
          var answerValue = Number(radiosNo[i].value);
        }
      }
      // change NaNs to zero
      if (isNaN(answerValue)) {
        answerValue = 0;
      }
      return answerValue;
    }

    // calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore); // it works!

    // function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
      console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
      return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
        (document.getElementById(correctStringNo).innerHTML) + "</strong>");
      }

    // calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
    }

    // show score as "score/possible score"
    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    // if 4/4, "perfect score!"
    if (calcScore === questionCounter) {
      showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
  }

  $(document).ready(function() {

  $('#submitButton').click(function() {
    $(this).addClass('hide');
  });

});

    function restart(){
    	number = 60;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

// ----------------------------------------------------------------
//calling functions
  	start(); // calls the start function
  });
});

// I tried and tried but I could not get my answers to tally up. The goal was to string together the correct results and display them.



