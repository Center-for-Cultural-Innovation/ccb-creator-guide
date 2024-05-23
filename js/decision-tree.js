$(document).ready(function() {

	// When the page loads, restart the decision tree quiz and reset it.
	restart();

	// If the user starts over, restart the process.
	$("#restart").click(function(){
		restart();
	});

	function restart(){
		// reset the main screen to the welcome screen
		$(".dt-section").hide();
		$("#q0").show();

		// clear the side navigation
		$("#decision-tree-nav > .dt-question").remove();
		$("#decision-tree-nav > .line-vertical").remove();

		// reset button states
		$(".dt-button").removeClass("disabled");
		$(".dt-button").removeClass("selected");
	}



	// If the user selects a button, collect relevant metadata on the question/answer they chose and feed that to the main function.
	$(".dt-button").click(function(e){
		// don't do anything if button is disabled
		if (!$(this).hasClass("disabled")) {
			var currentId = $(this).parent().parent()[0].id;
			var nextId = $(this).data("next-question")

			if (currentId !== "q0") { $(this).addClass("selected"); };
			goToQuestion(currentId, nextId, e);
		}
	})


	// This manages the core logic for the decision tree. It determines what answer to show in the left navigation pane, and determines what next question a user sees.
	function goToQuestion(currentQuestionId, nextQuestionId, selectedElement){

		// console.log("currentQuestionId = " + currentQuestionId);
		// console.log("nextQuestionId = " + nextQuestionId);

		// if not beginning question, update selected answer in nav 
		if (currentQuestionId !== "q0") {
			
			// add the selected answer to the sidebar
			$("#decision-tree-nav > #" + currentQuestionId).append("<br><br><span class='dt-answer'>" + $(selectedElement)[0].target.innerHTML + "</span>");

			// get all buttons for currentQuestionId
			// console.log($("#" + currentQuestionId + " > .dt-options > .dt-button"))
			$("#" + currentQuestionId + " > .dt-options > .dt-button").each(function(){
				if (!$(this).hasClass("selected")) {
					$(this).addClass("disabled");
				}
			});
		}

		// remove active state from previous question
		$(".dt-question").removeClass("active");

		// show new question in nav + connector line
		if (currentQuestionId !== "q0") {
			$("#decision-tree-nav").append('<div class="line-vertical">')
		}
		var questionText = $("#" + nextQuestionId + " > .dt-h2").text()
		$("#decision-tree-nav").append('</div><div class="dt-question active" id="' + nextQuestionId + '">' + questionText + '</div>')

		// hide other contents
		$(".dt-section").hide();

		// show new quesiton in main view
		$(".dt-section#" + nextQuestionId).show()

		$("#decision-tree-nav").scrollTop($("#decision-tree-nav").prop("scrollHeight"));
	}

});


	// If the user wants to go back to a previous question from the side navigation, guide them back. The buttons will be disabled but they can at least move back and forth.
$(document).on('click', '.dt-question', function(e) { 
	// get the ID of the question we need to display
	var currentId = $(this)[0].id;
	console.log(currentId);

	// hide all questions
	$(".dt-section").hide();

	// show the specific question that's relevant
	$("#" + currentId + ".dt-section").show();
});