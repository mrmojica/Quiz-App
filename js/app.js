$(document).ready(function() {

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
    var finalCorrect;
    var currentNumber = 1;
    var totalQuestions = questionList.length;

    $('.start-button').click(function() {
        $('.startPage').hide();
        $('.question-counter, .question-section').css('display', 'block');
        var clone = $('.inputList').clone();
        $('.choices').append(clone);
        var html = '';
        for (var i = 0; i < questionList[currentQuestionIndex]["choices"].length; i++) {
            $('.question').text(questionList[currentQuestionIndex].question);
            html += '<li><input class="user-option" type="radio" name="option" value=' + i + '><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label></li>';
        };
        $('.choices ul.inputList').append(html);

    });

    $('.question-section').on('click', '.user-option', function() {
        
        $('.question').text(questionList[currentQuestionIndex].question);
        var userAnswer = $(this).val();
        var html = '';
        var correctAnswer = questionList[currentQuestionIndex].correctAnswer;
        currentQuestionIndex++;

        currentNumber++
        $('.numberCount').text('Question ' + currentNumber + ' of 5');
        
        if (userAnswer == correctAnswer) {
            totalCorrect++ 
        }

        if (currentNumber === 6) {
          $('.question-counter, .question-section, .numberCorrect').hide();
          $('.result-section').show();
          $('.question').text('You got ' + (totalCorrect) + ' questions right!')
        }
      
      $('.numberCorrect').text('Questions Correct ' + totalCorrect);
      
      console.log('totalCorrect is ' + totalCorrect);

        for (var i = 0; i < questionList[currentQuestionIndex]["choices"].length; i++) {

            html += '<li><input class="user-option" type="radio" name="option" value=' + i + '><label>' + questionList[currentQuestionIndex]["choices"][i] + '</label></li>';
        }

        $('.choices ul.inputList').empty();

        $('.choices ul.inputList').append(html);

    });

    function newGame() {
        location.reload();

    }


    $('#button-reset').click(newGame);

});