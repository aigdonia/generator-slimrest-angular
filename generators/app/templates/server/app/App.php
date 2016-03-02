<?php

namespace Tarqim;

class App {
	public $app;
	public $database;

	function __construct($conf){
		$this->app = new \Slim\App;
		// configure error logger
		$this->registerErrorLogger();
		// configure the database
		$this->registerDatabase($conf['database']);
	}


	public function route($verb, $route, $callback){
		if(in_array($verb, ['get', 'put', 'post', 'delete']))
			return $this->app->$verb($route, $callback);
		throw new \Exception('Invalid HTTP verb');
	}

	function run(){
		$this->app->run();
	}

	function registerErrorLogger(){
		$this->app->getContainer()['Logger'] = function($container) {
	    $logger = new \Monolog\Logger('logger');
	    $filename = 'log/error.log';
	    $stream = new \Monolog\Handler\StreamHandler($filename, \Monolog\Logger::DEBUG);
	    $fingersCrossed = new \Monolog\Handler\FingersCrossedHandler(
	        $stream, \Monolog\Logger::ERROR);
	    $logger->pushHandler($fingersCrossed);
		    return $logger;
		};
		$this->app->getContainer()['errorHandler'] = function ($c) {
	    return new \Tarqim\ErrorHandler($c['Logger']);
		};
		$this->app->getContainer()['notFoundHandler'] = function ($container) {
			return function ($request, $response) use ($container) {
				return $this->response($container['response'], json_encode(['msg'=>'Resource Not Found']), 404);
			};
		};
	}

	public function response($response, $data = '', $status = 200, $type = 'application/json') {
		return $response->withStatus($status)->withHeader('Content-type', 'application/json')->write($data);
	}

	public function registerDatabase($db_conf){
		\ActiveRecord\Config::initialize(function($cfg) use ($db_conf){
		  $cfg->set_model_directory( $db_conf['models_dir'] );
		  $cfg->set_connections( $db_conf['connections'] );
		  $cfg->set_default_connection(getenv("LIS_ENV")? getenv("LIS_ENV") : "development");
		});
	}
}
