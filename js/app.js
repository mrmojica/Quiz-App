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

    // variables**********

    var questionList = [

        {
            question: 'An object falls out of an airplane, and falls freely downward. Its...',
            choices: ['mass increases', 'acceleration increases', 'velocity increases', 'gravity increases'],
            correctAnswer: 2
        },

        {
            question: 'You brake suddenly. The passengers in your car lurch forward. This demonstrates...',
            choices: ['gravity', 'weight', 'mass', 'inertia'],
            correctAnswer: 3
        },

        {
            question: 'A truck is travelling at 10 m/s. A package drops off the truck. Neglecting air resistance, as the package hits the ground, its horizontal speed is',
            choices: ['0 m/s', '10 m/s', '20 m/s', 'depends on the weight of the package'],
            correctAnswer: 1
        },

        {
            question: 'A truck is decelerating. A package is dropped from the midpoint of the ceiling of the truck\'s storage compartment. The package hits the floor',
            choices: ['immediately beneath the midpoint of the ceiling', 'closer to the back of the truck than the midpoint', 'closer to the front of the truck than the midpoint', 'all of the above'],
            correctAnswer: 2
        },

        {
            question: 'You tie a rock to a string and whirl it in a horizontal circle. The string breaks. In the absence of gravity, the rock',
            choices: ['travels in a circle', 'falls in a straight line down to the earth', 'flies in a straight line vertically up into the air', 'travels in a straight line horizontally away from you'],
            correctAnswer: 3
        }
    ];

    var currentQuestionIndex = 0;
    var totalCorrect = 0;
    var currentNumber = 1;
    var totalQuestions = questionList.length;

    //start button wire up ***************

    $('.start-button').click(function() {
        //alert('this works!');
        //hide landing page
        $('.startPage').hide();
        //show questions in order
        $('.question-counter, .question-section').css('display', 'block');

        //display function that shows questions and choices.
        // hints: .clone()
        // yo
        var clone = $('.inputList').clone();
        $('.choices').append(clone)
            //var html = '';
            // hints: html += "<p>some markup</p>"
            // LOOP
            // html += '<li><input class="user-option" type="radio" name="option" value="1"></li>'
            // $('.choices ul.inputList').append(html);
        var html = '';
        for (var i = 0; i < questionList[currentQuestionIndex]["choices"].length; i++) {
            // console.log(q);
            $('.question').text(questionList[currentQuestionIndex].question);
            html += '<li><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label><input class="user-option" type="radio" name="option" value=' + i + '>' + '</li>';
        };
        $('.choices ul.inputList').append(html);

    });
 
    //Hints: Flash out or empty content in an element
    // $(selector).empty();





    //select question function
    $('.question-section').on('click', '.user-option', function() {
        currentQuestionIndex++;
        $('.question').text(questionList[currentQuestionIndex].question);
        var userAnswer = $(this).val();
        var html = '';
        var correctAnswer = questionList[currentQuestionIndex].correctAnswer;

        //Displays current question number
        currentNumber++
        $('.numberCount').text('Question ' + currentNumber + ' of 5');

        //checks/displays for correct answer
        if(userAnswer == correctAnswer){
        	totalCorrect++
        	$('.numberCorrect').text('Questions Correct ' + totalCorrect);
        }




        for (var i = 0; i < questionList[currentQuestionIndex]["choices"].length; i++) {

            html += '<li><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label><input class="user-option" type="radio" name="option" value=' + i + '></li>';
        }
        //clears input list
        $('.choices ul.inputList').empty();

        //adds new input list
        $('.choices ul.inputList').append(html);

        
    });

    //Result Page
        //  if((currentQuestionIndex + 1) == totalQuestions){
        // 	$('question-counter question-section').hide();
        // 	$('.result-section').show();
        // }



function newGame(){
	location.reload();

	// $('.numberCorrect').text('Questions Correct 0');
	// $('.numberCount').text('Question 1 of 10');
	// currentQuestionIndex = 0;
 //    totalCorrect = 0;
 //    currentNumber = 1;
 //    $('.startPage').show();
 //    $('.question-counter, .question-section').css('display', 'none');



}


$('#button-reset').click(newGame);








});