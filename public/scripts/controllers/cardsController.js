angular.module('CardsAgainstAssembly')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'CardsIndexCtrl'
      })
      .when('/cards/:id', { // the "id" parameter 
        templateUrl: 'templates/showTemplate.html',
        controller: 'CardShowCtrl'
      });
});

angular.module('CardsAgainstAssembly')
 .factory('CardService', function($resource){
    return  $resource('https://shielded-forest-41789.herokuapp.com/api/flashcards/:id') ;
});

angular.module('CardsAgainstAssembly')
.controller('CardsIndexCtrl', function($scope, CardService){
  console.log("Cards Index");
  $scope.cards= CardService.query();
  console.log($scope.cards);
});

angular.module('CardsAgainstAssembly')
.controller('CardShowCtrl', function ($scope, CardService, $routeParams) {
    $scope.card = CardService.get({id: $routeParams.id});
    console.log($scope.card);
});

  // var vm = this;
  // vm.questionsList = [
  //   {question: "What is Batman's guilty pleasure?"},
  //   {question: "I'm sorry professor, I couldn't complete my homework because _________."},
  //   {question: "I get by with a little help from _________."},
  //   {question: "_________. It's a trap!"},
  //   {question: "The class field trip was completely ruined by _________."},
  //   {question: "What's my secret power?"}
  // ]
