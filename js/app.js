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
            question: 'question1',
            choices: ['answer1a', 'answer2a', 'answer3a', 'answer4a'],
            correctAnswer: 0
        },

        {
            question: 'question2',
            choices: ['answer1b', 'answer2b', 'answer3b', 'answer4b'],
            correctAnswer: 0
        },

        {
            question: 'question3',
            choices: ['answer1c', 'answer2c', 'answer3c', 'answer4c'],
            correctAnswer: 0
        },

        {
            question: 'question4',
            choices: ['answer1d', 'answer2d', 'answer3d', 'answer4d'],
            correctAnswer: 0
        },

        {
            question: 'question5',
            choices: ['answer1e', 'answer2e', 'answer3e', 'answer4e'],
            correctAnswer: 0
        }
    ];

    var currentQuestionIndex = 0;
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
            html += '<li><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label><input class="user-option" type="radio" name="option" value="1">' + '</li>';
        };
        $('.choices ul.inputList').append(html);

    });
    //display function
    // console.log(questionList[0].choices[0]);
    // function questionDisplay(arrayToSearch, key){
    // 	//looping over an array of objects	
    // 	for (var i = 0; i < questionList.length; i++){
    // 		if(questionList[i][key] == arrayToSearch){
    // 			return i;
    // 		}

    // 	}
    //Hints: Flash out or empty content in an element
    // $(selector).empty();

    //declare var for userInput




    //select question function
    $('.question-section').on('click', '.user-option', function() {
        currentQuestionIndex++;
        $('.question').text(questionList[currentQuestionIndex].question);
        var userAnswer = $(this).val();
        var html = '';
        for (var i = 0; i < questionList[currentQuestionIndex]["choices"].length; i++) {

            html += '<li><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label><input class="user-option" type="radio" name="option" value="1"></li>';
        }
        //????
        $('.choices ul.inputList').empty();
        $('.choices ul.inputList').append(html);

        console.log(userAnswer);
    });






});