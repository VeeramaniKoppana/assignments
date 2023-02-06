(function () {
    'use strict';
    angular.module("LunchCheck",[]).controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.checkItems = function(){
            if(!$scope.items) {
                $scope.message = "Please enter data first";
                $scope.color_change ="red";
            }
            else{
                var list_of_items = ($scope.items).split(',');
                list_of_items = list_of_items.filter(function(e){return e}); 
                if(list_of_items.length<=3) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                }
                $scope.color_change ="green";
            }
        };
    };
})();