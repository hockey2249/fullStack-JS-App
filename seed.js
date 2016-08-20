var db = require('./models');

var question_answer = [
  {
    question: 'Who is the greatest Actor?',
    answer: 'Leonardo Dicaprio',
    answerHidden: 'false'
  },
   {
    question: 'Who is the greatest Actor?',
    answer: 'Leonardo Dicaprio',
    answerHidden: 'false'
  },
   {
    question: 'Who is the greatest Actor?',
    answer: 'Leonardo Dicaprio',
    answerHidden: 'false'
  }
];

db.Card.remove({}, function(err, cards){
   if(err) {
    console.log('Error occurred in remove', err);
   } else {
     console.log('removed blog');
    db.Card.create(question_answer, function(err, cards){
  if (err) { return console.log('err', err); }
    console.log("created", cards.length, "cards");
    process.exit();
  });
  }
});