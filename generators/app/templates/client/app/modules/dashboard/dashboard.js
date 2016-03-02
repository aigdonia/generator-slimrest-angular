'use strict';

angular.module('lis-web')
	.config(function($stateProvider) {
		$stateProvider
		.state('dashboard', {
		  url: '/',
		  templateUrl: 'modules/dashboard/home.html'
		});
	})
	.controller('DashboardCtrl', function($scope){
		$scope.n='t';
	});
