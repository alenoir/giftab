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
  .config(function ($routeProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|chrome-extension):/);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/popup', {
        templateUrl: 'views/popup.html',
        controller: 'PopupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
