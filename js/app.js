$(document).ready(function() {


var numChoice = prompt("Please choose a number between 1 and 100", "25");






for (var i = 1; i <= numChoice; i++) {

  
    if (i % 15 === 0) {
      $('section').append('FizzBuzz');


  } else if(i % 3 === 0){
    $('section').append('Fizz');
  

  } else if (i % 5 === 0) {
      $('section').append('Buzz');


    } else {
      $('section').append(i);
    }


    $('section').append('<br />');
  }

});





