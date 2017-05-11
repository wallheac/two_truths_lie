$(document).ready(function(){

/*Assertion class. truthiness should be a boolean value*/
function Assertion(statement, truthiness) {
  this.statement = statement;
  this.truthiness = truthiness;
}


var statementsAmy = [
  new Assertion("Amy is 41 years old", true),
  new Assertion("Amy owns two cats named Augustus and Agrippa", false),
  new Assertion("Amy knows how to both tune and play the piano", true)
];

var statementsFred = [
  new Assertion("Fred is 48 years old", true),
  new Assertion("Fred loves dogs more than people", true),
  new Assertion("Fred is an extrovert", false)
];

var statementsJess = [
  new Assertion("Jess is awesome", true),
  new Assertion('Jess loves loud noises', false),
  new Assertion('Jess makes om nom nom noises when she eats', false)
];

var allStatements = [statementsAmy, statementsFred, statementsJess];

var buttons = $.map(statementsAmy, function(val, index){
  var buttonItem = $('<button id=button'+index+' data-truth='+val.truthiness+'></button>');
  $(buttonItem).append(val.statement);
  return buttonItem;
});
$('.container').append(buttons);
var originalState = $('.container').html();

$('body').on('click','button', function(){
  var truth = $(this).data('truth');
  if(truth){
    $('h1').html('Wrong, Try Again').css({'color': '#DB6F6F', 'text-align':'center'});
    $(this).css({'border':'2px solid #DB6F6F', 'color':'#DB6F6F'});
    setTimeout(function(){
      $('.container').html(originalState);
    }, 3000);
  }
  else{
    $('h1').html('Correct!').css({'color': '#56A589', 'text-align':'center'});
    $(this).css({'border':'2px solid #56A589', 'color':'#56A589'});
    $('.container').append('<button id=next>NEXT</button>');
  }

});

});
