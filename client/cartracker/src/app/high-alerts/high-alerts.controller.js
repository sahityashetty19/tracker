/**
 * Created by Shetty on 6/13/2017.
 */
(function(){

     angular.module("cartracker")
            .controller("HighAlertsController", HighAlertsControllerFn);

    HighAlertsControllerFn.$inject = ['DataService', '$http','$scope'];

    function HighAlertsControllerFn(DataService, $http,$scope) {

        DataService.getAllAlerts().then(function(data){

            $scope.allAlerts = data.filter(function(value) {
                return value.alertPriority == "HIGH";
            })
        }).then(function () {
            $scope.vehicles.forEach(function(vehicle) {
                var count = 0;
                $scope.allAlerts.forEach(function(alert) {
                    if (vehicle.vin == alert.vin) {
                        count++;
                        vehicle.hightAlertCount = count;
                    }
                })
            });
        });

        DataService.getAllVehicles().then(function(data){
            $scope.vehicles = data;
        });
    }
})();