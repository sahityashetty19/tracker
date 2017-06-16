/**
 * Created by Shetty on 6/13/2017.
 */
(function(){
   angular.module("cartracker")
    .controller("PlotSignalController", PlotSignalControllerFn);

    PlotSignalControllerFn.$inject=['DataService','$scope','$stateParams'];

   function PlotSignalControllerFn(DataService, $scope, $stateParams){
        $scope.vinNumber = $stateParams.vinNumber;
        $scope.speed = [];

       DataService.getAllReadings($scope.vinNumber).then(function(data){
           $scope.readings = data;
           $scope.readings.forEach(function(reading) {
               $scope.speed.push(reading.speed);
           });
       }, function(error){
           console.log(error);
       });

       $scope.myJson = {
           type : 'line',
           series : [
             { values :  $scope.speed }
           ]
       };

    }
})();