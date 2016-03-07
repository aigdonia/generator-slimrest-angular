'use strict';

angular.module('<%= app_name%>',[
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngTouch',
	'ui.router',
	'satellizer',
]);

angular.module('<%= app_name%>').config(function($locationProvider){
	$locationProvider.html5Mode(true);
});
