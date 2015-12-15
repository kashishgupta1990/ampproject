angular.module('propTiger',[])

angular.module('propTiger').controller('IndexCtrl',['$scope','$timeout',function($scope, $timeout){
    console.log('IndexCtrl');

    $scope.bank = {
      image:"assets/images/funny.jpg"
    };


    console.log($scope.bank.image);

    $timeout(function(){
      $scope.bank.image = "assets/images/buddha.jpg";
      console.log($scope.bank.image);

      $scope.$apply();
    },500);
}]);
