'use strict';

angular.module('zapateria')

.controller('IndexController', 
			['$scope', 
			function($scope) {

			}]
)

.controller('ContactoController', 
			['$scope', 
			function($scope) {

			}]
)

.controller('ProductosController', 
			['$scope', 
			function($scope) {
				$scope.productos = [
					{
						id: 0,
						nombre: 'NIKE BLUE',
						precio: '90.25 €',
						imagen: 'shoe-1.png'
					},
					{
						id: 1,
						nombre: 'ADIDAS ULTRABOOST',
						precio: '40 €',
						imagen: 'shoe-2.png'
					},
					{
						id: 2,
						nombre: 'ADIDAS ULTRABOOST',
						precio: '40 €',
						imagen: 'shoe-3.png'
					},
					{
						id: 3,
						nombre: 'NIKE BLUE',
						precio: '90.25 €',
						imagen: 'shoe-1.png'
					},
					{
						id: 4,
						nombre: 'ADIDAS ULTRABOOST',
						precio: '40 €',
						imagen: 'shoe-2.png'
					},
					{
						id: 5,
						nombre: 'ADIDAS ULTRABOOST',
						precio: '40 €',
						imagen: 'shoe-3.png'
					}
				];

				$scope.marcas = [
					{ nombre: 'Nike' },
					{ nombre: 'Adidas' },
					{ nombre: 'Convers' },
					{ nombre: 'Vans' },
					{ nombre: 'Reebook' },
					{ nombre: 'Asics' }
				];

				$scope.categorias = [
					{ nombre: 'Zapatos de vestir' },
					{ nombre: 'Informales' },
					{ nombre: 'Sport / Zapatillas' },
					{ nombre: 'Sandalias' },
					{ nombre: 'Mocasines' },
					{ nombre: 'Botas' }
				];

				$scope.colecciones = [
					{ nombre: 'Brian Atwood' },
					{ nombre: 'Alexander McQueen' },
					{ nombre: 'Jimmy Choo' },
					{ nombre: 'Manolo Blahnik' }
				];

				$scope.colores = [
					{ nombre: 'Rojo', codigo: '#ff0000' },
					{ nombre: 'Azul', codigo: '#0040ff' },
					{ nombre: 'Verde', codigo: '#3adf00' },
					{ nombre: 'Rosa', codigo: '#ff00ff' },
					{ nombre: 'Negro', codigo: '#000000' },
					{ nombre: 'Blanco', codigo: '#ffffff' },
					{ nombre: 'Marron', codigo: '#b45f04' }
				];

				$scope.anyadirAlCarrito = function(idProducto){
					alert(idProducto);
				}

				$scope.range = function(min, max, step) {
				   step = step || 1;
				   var input = [];
				   for (var i = min; i <= max; i += step) {
				       input.push(i);
				   }
				   return input;
				};
			}]
)

.controller('DetalleController', 
			['$scope', 
			function($scope) {

			}]
)
;

