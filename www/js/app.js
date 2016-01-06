angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.backgroundColorByHexString("#28A54C");
    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.manha', {
    url: '/manha',
    views: {
      'tab-manha': {
        templateUrl: 'templates/tab-manha.html'
      }
    }
  })

  .state('tab.almoco', {
    url: '/almoco',
    views: {
      'tab-almoco': {
        templateUrl: 'templates/tab-almoco.html'
      }
    }
  })

  .state('tab.tarde', {
    url: '/tarde',
    views: {
      'tab-tarde': {
        templateUrl: 'templates/tab-tarde.html'
      }
    }
  })

  .state('tab.janta', {
    url: '/janta',
    views: {
      'tab-janta': {
        templateUrl: 'templates/tab-janta.html'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});