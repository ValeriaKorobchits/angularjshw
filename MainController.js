app.controller('MainController', ['$scope', function($scope) { 
    $scope.product = { 
        name: 'The Book of Trees', 
        price: 10,
      pubdate: new Date('2014', '03', '08') 
      }
  }]);