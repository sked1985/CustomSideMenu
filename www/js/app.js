// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic.contrib.drawer'])

.directive('drawerToggle', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var el = $element[0];
      if($attrs.animate === "true") {
        $element.addClass('animate drawerToggle');
      }

      $element.bind('click', function(){
        if($attrs.animate === "true") {
          if($scope.toggleDrawer() === "open") {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + -5 + 'px, 0, 0)';
          } else {
            el.style.transform = el.style.webkitTransform = 'translate3d(' + 0 + 'px, 0, 0)';
          }
        } else {
            $scope.toggleDrawer();
        }
      });
    }
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
