//start with landing page and start button
	//wire start button
//5 q's
	//upon start click, q's and a's .show one at a time 
	//prevent empty answer
	//no skipping q's 
	//display q# and score
	//immediately inform user if question was answered correctly
		//conditional statement
	//overall score screen at end
	//restart function
	//**************************************
//create questions and answers as objects
//start button wire up
	//create restart function
		//click handler
		//hide landing page
		//show questions in order
			//create and call display function
			//looping over an array of objects	
			//declare var for userInput
			//compare userInput to correctAnswer
			//increment counter variable
			//figure out how to display # of correct answers
				//conditional contingent on value of object
					//assign variable
			//summary page
$(document).ready(function() {
	var question1 = {
		question: 'question1',
		choices: ['answer1','answer2', 'answer3', 'answer4'],
		correctAnswer: question1.choices[0];
	}

	var question2 = {
		question: 'question1',
		choices: ['answer1','answer2', 'answer3', 'answer4'],
		correctAnswer: question1.choices[0];
	}

	var question3 = {
		question: 'question1',
		choices: ['answer1','answer2', 'answer3', 'answer4'],
		correctAnswer: question1.choices[0];
	}

	var question4 = {
		question: 'question1',
		choices: ['answer1','answer2', 'answer3', 'answer4'],
		correctAnswer: question1.choices[0];
	}

	var question5 = {
		question: 'question1',
		choices: ['answer1','answer2', 'answer3', 'answer4'],
		correctAnswer: question1.choices[0];
	}
});