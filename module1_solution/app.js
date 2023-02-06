(function () {
    'use strict';
    angular.module("LunchCheck",[]).controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.checkItems = function(){
            if(!$scope.items) {
                $scope.message = "Please enter data first";
            }
            else{
                var list_of_items = ($scope.items).split(',');
                if(list_of_items.length<=3) {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                }
            }
        };
    };
})();