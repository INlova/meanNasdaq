angular.module('meannasdaq', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
      templateUrl: 'public/index.html',
      access: {
        restricted: false
      }
    })
    // .when('/stocks', {
    //   templateUrl: 'angular-app/hotel-list/hotels.html',
    //   controller: HotelsController,
    //   controllerAs: 'vm',
    //   access: {
    //     restricted: false
    //   }
    // })
    // .when('/profile', {
    //   templateUrl: 'angular-app/profile/profile.html',
    //   access: {
    //     restricted: true
    //   }
    // })
    .otherwise({
      redirectTo: '/'
    });
}

// function run($rootScope, $location, $window, AuthFactory) {
//   $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
//     if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
//       event.preventDefault();
//       $location.path('/');
//     }
//   });
// }