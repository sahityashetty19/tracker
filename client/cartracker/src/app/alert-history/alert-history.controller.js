/**
 * Created by Shetty on 6/13/2017.
 */
(function(){
    angular.module('cartracker')
        .controller('AlertHistoryController', AlertHistoryControllerFn);

    AlertHistoryControllerFn.$inject = ['DataService','$scope','$stateParams'];

    function AlertHistoryControllerFn(DataService, $scope, $stateParams) {

        $scope.vinNumber = $stateParams.vinNumber;

        DataService.getAlertsByVehicle($scope.vinNumber).then(function(data){
            $scope.alerts = data;
        }, function(error){
            console.log(error);
        });
    }

})();
