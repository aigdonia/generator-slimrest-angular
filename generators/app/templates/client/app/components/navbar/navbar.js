'use strict';

angular.module('<%= app_name%>')
	.config(function($stateProvider) {
		$stateProvider
		.state('dashboard', {
		  url: '/',
		  templateUrl: 'components/navbar/navbar.html'
		});
	})
	.controller('NAvbarCtrl', function($scope){
		$scope.n='t';
	});
