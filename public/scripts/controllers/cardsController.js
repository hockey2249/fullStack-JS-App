angular.module('CardsAgainstAssembly')
.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/indexTemplate.html',
        controller: 'CardsIndexCtrl'
      })
      .when('/cards/:id', { 
        templateUrl: 'templates/showTemplate.html',
        controller: 'CardShowCtrl'
      });
});

angular.module('CardsAgainstAssembly')
 .factory('CardService', function($resource){
    return $resource('http://localhost:3000/api/cards/:id') ;
});

angular.module('CardsAgainstAssembly')
  .controller('CardsIndexCtrl', function($scope, CardService){
    $scope.cards= CardService.query();
});

angular.module('CardsAgainstAssembly')
  .controller('CardShowCtrl', function ($scope, CardService, $routeParams) {
   $scope.card = CardService.get({id: $routeParams.id});
   console.log($scope.card);
});

angular.module('CardsAgainstAssembly')
  .controller('CardCreateCtrl', function($scope, CardService) {
    $scope.newCard = {};
    $scope.submit = function() {
      console.log($scope.newCard);
      CardService.save($scope.newCard);
      window.location.assign('/');
      
    };
});
