'use strict';

angular.module('zapateria', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url:'/',
		views: {
			'header': {
				templateUrl : 'templates/header.html',
			},
			'content': {
				templateUrl : 'templates/home.html',
				controller  : 'IndexController'
			},
			'footer': {
				templateUrl : 'templates/footer.html',
			}
		}
	})

	.state('app.contacto', {
		url:'contacto',
		views: {
			'content@': {
				templateUrl : 'templates/contacto.html',
				controller  : 'ContactoController'                  
			}
		}
	})

	.state('app.productos', {
		url: 'productos',
		views: {
			'content@': {
				templateUrl : 'templates/productos.html',
				controller  : 'ProductosController'
			}
		}
	})

	.state('app.detalle', {
		url: 'producto/:id',
		views: {
			'content@': {
				templateUrl : 'templates/detalle.html',
				controller  : 'DetalleController'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/');
})
;
