'use strict';

angular.module('<%= app_name%>')
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
