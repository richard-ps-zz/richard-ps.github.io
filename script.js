	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Aqui é Body Builder Ipsum PORRA! Negativa Bambam negativa. Não vai dá não. Vamo monstro! Que não vai dá rapaiz, não vai dá essa porra. Birl! Aqui nóis constrói fibra, não é água com músculo.\nAqui nóis constrói fibra, não é água com músculo. Birl! Eu quero esse 13 daqui a pouquinho aí. É verão o ano todo vem cumpadi. Vamo monstro! Vem porra!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact me!';
	});
