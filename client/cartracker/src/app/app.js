/**
 * Created by Shetty on 6/12/2017.
 */
(function() {
    'use strict';

    angular.module('cartracker', ['ui.router','ngMap','zingchart-angularjs'])
           .config(moduleConfig);

    moduleConfig.$inject=['$stateProvider','$urlRouterProvider'];

    function  moduleConfig($stateProvider,$urlRouterProvider) {
     $stateProvider
         .state('carList',{
             url:'/carlist',
             templateUrl:'app/car-list/car-list.tmpl.html',
             controller:'CarListController'
         })
         .state('highAlerts',{
             url:'/highalerts',
             templateUrl:'app/high-alerts/high-alerts.tmpl.html',
             controller:'HighAlertsController'
         })
         .state('plotSignal',{
             url:'/carlist/plotsignal/:vinNumber',
             templateUrl:'app/plot-signal/plot-signal.tmpl.html',
             controller:'PlotSignalController'
         })
         .state('geoLocation',{
             url:'/geolocation',
             templateUrl:'app/geolocation/geolocation.tmpl.html'

         })
         .state('alertHistory',{
             url:'/carlist/alerthistory/:vinNumber',
             templateUrl:'app/alert-history/alert-history.tmpl.html',
             controller:'AlertHistoryController'
         })


        $urlRouterProvider.otherwise('/carlist');

    }

})();