// JavaScript Document

$(function(){

  // priorities.html: Toggle
  $('#toggle-urgent-important').on('click', function(){
    $('#ui-explain').slideToggle(200);
  });
	
	
	
	$('#hover-card').on('mouseenter', function(){
    $('#hover-title').text('Tip: Turn off notifications after work');
    $('#hover-msg').html('Set a clear end time. Silence Slack/email. Breathe ✨');
  }).on('mouseleave', function(){
    $('#hover-title').text('Set Boundaries');
    $('#hover-msg').html('Hover over this card to see a simple boundary tip.');
  });

});


// ---------------- Quiz 1 ----------------
window.wrongAnswer1a = function() {
  $("#feedback1").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Not urgent. This is forward-looking planning, not an immediate issue.</h2>');
  $("#priorities_quiz").show();
}

window.rightAnswer1 = function() {
  $("#feedback1").html('<h2 style="color:#2F5D50;"><img src="img/icon_correct.png" width="60" height="60" style="vertical-align:middle;"> Correct! This task helps with long-term growth, so it’s important but not time-sensitive.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer1b = function() {
  $("#feedback1").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Not quite. This is a strategic task that needs your own attention.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer1c = function() {
  $("#feedback1").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;">It’s not something to ignore. Planning is vital to long-term success.</h2>');
  $("#priorities_quiz").hide();
}



// ---------------- Quiz 2 ----------------
window.rightAnswer2 = function() {
  $("#feedback2").html('<h2 style="color:#2F5D50;"><img src="img/icon_correct.png" width="60" height="60" style="vertical-align:middle;"> Correct! This task is both urgent and important. It directly impacts users and requires immediate attention.</h2>');
  $("#priorities_quiz").show();
}

window.wrongAnswer2a = function() {
  $("#feedback2").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Not at all. The issue is happening now, so delaying it would cause serious disruption.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer2b = function() {
  $("#feedback2").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> While urgent, this one’s too critical to hand off unless someone equally skilled can act immediately</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer2c = function() {
  $("#feedback2").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Ignoring a system outage is not an option. It must be addressed right away.</h2>');
  $("#priorities_quiz").hide();
}


// ---------------- Quiz 3 ----------------
window.rightAnswer3 = function() {
  $("#feedback3").html('<h2 style="color:#2F5D50;"><img src="img/icon_correct.png" width="60" height="60" style="vertical-align:middle;"> Correct! Urgent and important tasks should be handled immediately.</h2>');
  $("#priorities_quiz").show();
}

window.wrongAnswer3a = function() {
  $("#feedback3").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Not quite. Urgent but not important tasks can usually be delegated.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer3b = function() {
  $("#feedback3").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Try again. Important but not urgent tasks can be scheduled for later.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer3c = function() {
  $("#feedback3").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> That’s not right. Tasks that are neither urgent nor important can be minimized or removed.</h2>');
  $("#priorities_quiz").hide();
}


// ---------------- Quiz 4 ----------------
window.rightAnswer4 = function() {
  $("#feedback4").html('<h2 style="color:#2F5D50;"><img src="img/icon_correct.png" width="60" height="60" style="vertical-align:middle;"> Correct! Preparing tomorrow’s briefing is an important and time-sensitive task.</h2>');
  $("#priorities_quiz").show();
}

window.wrongAnswer4a = function() {
  $("#feedback4").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Nope. Checking social media isn’t a priority task right now.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer4b = function() {
  $("#feedback4").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> Not exactly. Organizing files can wait—it’s not urgent.</h2>');
  $("#priorities_quiz").hide();
}

window.wrongAnswer4c = function() {
  $("#feedback4").html('<h2 style="color:#8F3B3B;"><img src="img/icon_wrong.png" width="60" height="60" style="vertical-align:middle;"> No. Reading unrelated news doesn’t align with your current goals.</h2>');
  $("#priorities_quiz").hide();
}



window.toggleMatrix = function(){
  $("#matrix_panel").slideToggle(160);
};




