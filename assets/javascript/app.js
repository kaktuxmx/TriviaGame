$(document).ready(function(){
  var varq1a1;
  var varq1a2;
  var varq1a3;
  var varq2a1;
  var varq2a2;
  var varq2a3;
  var varq3a1;
  var varq3a2;
  var varq3a3;
  var varq4a1;
  var varq4a2;
  var varq4a3;
  var varq5a1;
  var varq5a2;
  var varq5a3;

  scorewinques = 0;
  scorelooseques = 0;
  scorenoanswer = 0;

  // Q1A1, Q2A2, Q3A1, Q4A3, Q5A3 are the correct answers...

  //Click event for the ratio buttons
  $(".radio-inline").click(function(){
      varq1a1 = $("#q1a1").val();
      varq1a2 = $("#q1a2").val();
      varq1a3 = $("#q1a3").val();

      varq2a1 = $("#q2a1").val();
      varq2a2 = $("#q2a2").val();
      varq2a3 = $("#q2a3").val();

      varq3a1 = $("#q3a1").val();
      varq3a2 = $("#q3a2").val();
      varq3a3 = $("#q3a3").val();

      varq4a1 = $("#q4a1").val();
      varq4a2 = $("#q4a2").val();
      varq4a3 = $("#q4a3").val();

      varq5a1 = $("#q5a1").val();
      varq5a2 = $("#q5a2").val();
      varq5a3 = $("#q5a3").val();
    });

  $("#donebutton").click(function(){
      gamestart();

  });
// Q1A1, Q2A2, Q3A1, Q4A3, Q5A3 are the correct answers...

    function gamestart() {
            //Question 1 logic Q1A1
        if (varq1a1 === 1 && varq1a2 === 0 && varq1a3 === 0) {
              scorewin++;
        } else if(varq1a1 === 0 && varq1a2 ===1 || varq1a3 === 1) {
              scoreloose++;
  //I NEED TO KNOW HOW TO DO A COMPARATION TO NOTHING ON VARIABLES NOT CLICKED
        } else if (varq1a1 === varq1a2 === varq1a3) {
              scorenoanswer++;
        //Question 2 logic Q2A2
        } else if (varq2a2 === 1 && varq2a1 === 0 && varq2a3 === 0) {
              scorewin++;
        } else if (varq2a2 === 0 && varq2a1 === 1 || varq2a3 === 1) {
              scoreloose++;
        } else if (varq2a1 === varq2a2 === varq2a3){
              scorenoanswer++;
        //Question 3 logic Q3A1
        } else if (varq3a1 === 1 && varq3a2 === 0 && varq3a3 === 0) {
              scorewin++;
        } else if (varq3a1 === 0 && varq3a2 === 1 || varq3a3 === 1) {
              scoreloose++;
        } else if (varq3a1 === varq3a2 === varq3a3) {
              scorenoanswer++;
        // Question 4 logic Q4A3
        } else if (varq4a3 === 1 && varq4a1 === 0 && varq4a2 === 0) {
              scorewin++;
        } else if (varq4a3 === 0 && varq4a1 === 1 || varq4a2 === 0) {
              scoreloose++;
        } else if (varq4a1 === varq4a2 === varq4a3) {
              scorenoanswer++;
        // Question 5 logic Q5A3
        } else if (varq5a3 === 1 && varq5a1 === 0  && varq5a2 === 0) {
              scorewin++;
        } else if (varq5a3 === 0 && varq5a1 === 1 || varq5a2 === 1) {
              scoreloose++;
        } else if (varq5a1 === varq5a2 === varq5a3) {
              scorenoanswer++;
              gamefinish();
        }
      }

        function gamefinish() {
          $("#scores").html("Your Correct answers are: " + scorewin);
          $("#scores").html("Your incorrect answers are: " + scoreloose);
          $("#scores").html("Your unanswered are: " + scorenoanswer);
        }
});
