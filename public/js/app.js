var app = angular.module("app", ["ui.router", "ngAnimate"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "partials/home.html",
      controller: HomeController
    })
    .state("theboard", {
      url: "/theboard",
      templateUrl: "partials/theboard.html",
      controller: BoardController
    })
    .state("city", {
      url: "/:state/:city",
      templateUrl: "partials/home.html",
      controller: LocationController
    })
    .state("post", {
      url: "/:state/:city/:post",
      templateUrl: "partials/postPage.html",
      controller: PostPageController
    });
    //TODO Add a profile page route with a resolve for UsersService.get(id)

  $httpProvider.interceptors.push('apiInterceptor');
  $locationProvider.html5Mode(true);
});
