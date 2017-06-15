/**
 * Created by Shetty on 6/14/2017.
 */
(function(){
    angular.module('cartracker')
        .controller('CarListController', CarListControllerFn);

    CarListControllerFn.$inject = ['DataService','$scope','$location'];

    function CarListControllerFn(DataService, $scope, $location) {
        carVm = this;


        DataService.getAllVehicles().then(function(data){
            $scope.carData = data;
        }, function(error){
            console.log(error);
        })

        carVm.sorter = {
            sortBy: 'lastServiceDate',
            sortOrder: true
        };

        $scope.goToGeolocation = function (){
            $location.path('/geolocation');
        }

    }

})();
