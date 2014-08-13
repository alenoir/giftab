'use strict';

/**
 * @ngdoc function
 * @name giftabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giftabApp
 */
angular.module('giftabApp')
  .controller('MainCtrl', function ($scope, $http) {
    var token = 'b0cdb95cca00131';
    $scope.imgTitle = '';
    $scope.imgSrc = '/images/ignore/loader.gif';
    $scope.imgSrcLoad = '/images/ignore/loader.gif';

    $http({method: 'GET', url: 'https://api.imgur.com/3/gallery/r/reactiongifs', headers: {'Authorization': 'Client-ID ' + token}}).
      success(function(result) {
        var items = result.data;
        var item = items[Math.floor(Math.random()*items.length)];

        $scope.imgTitle = item.title;
        $scope.imgSrc = item.link;
    });
  });
