'use strict';

/**
 * @ngdoc overview
 * @name giftabApp
 * @description
 * # giftabApp
 *
 * Main module of the application.
 */
angular
  .module('giftabApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
