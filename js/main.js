var app = angular.module("CurriculoApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "telaInicial.html"
  })
  .when("/jogo", {
    templateUrl : "jogo.html"
  })
  .when("/sobre", {
    templateUrl : "sobre.html"
  });
});