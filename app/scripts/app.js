'use strict';

/**
 * @ngdoc overview
 * @name twitchApiApp
 * @description
 * # twitchApiApp
 *
 * Main module of the application.
 */
let app = angular
  .module('twitchApiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  
  // .config(function ($routeProvider, $locationProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'mainController',
  //       controllerAs: 'main'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });

  //     $locationProvider.html5Mode(true);
  // });
