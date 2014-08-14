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
    $scope.imgTitle = '';
    $scope.imgSrc = 'images/ignore/loader.gif';

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if(changes.subreddit != undefined)
          searchImgurImage(changes.subreddit.newValue);
      });

    chrome.storage.sync.get('subreddit', function(obj){
      searchImgurImage(obj.subreddit)
    });

    function searchImgurImage(subreddit){
      $scope.imgTitle = '';
      $scope.imgSrc = 'images/ignore/loader.gif';
      var token = 'b0cdb95cca00131';
      $http({method: 'GET', url: 'https://api.imgur.com/3/gallery/r/'+subreddit, headers: {'Authorization': 'Client-ID ' + token}}).
          success(function(result) {
            var items = result.data;
            var item = items[Math.floor(Math.random()*items.length)];
            if(items.length > 0) {
              $scope.imgTitle = item.title;
              $scope.imgSrc = item.link;            
            }
            else {
              $scope.imgTitle = 'No image...';
              $scope.imgSrc = 'http://i.imgur.com/43maTbc.gif';                 
            }
  
        });
    }

      
  })
  .controller('PopupCtrl', function ($scope) {
    
    $scope.user = {};
    chrome.storage.sync.get('subreddit', function(obj){
      $scope.user.subreddit = obj.subreddit;
    });
    console.log($scope.user);
    $scope.update = function(user) {
        console.log(user);
        // Get a value saved in a form.
        var theValue = user.subreddit;
        // Check that there's some code there.
        if (!theValue) {
          console.log('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'subreddit': theValue}, function() {
          // Notify that we saved.
          console.log('Settings saved');
        });
      };
  });
