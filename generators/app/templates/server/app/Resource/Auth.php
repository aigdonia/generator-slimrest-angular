<?php
namespace Tarqim\Resource;

use \Tarqim\Resource as Resource;

class Auth extends Resource{

	public function routes(){
		$this->get('/login', [$this, 'doLogin']);
		$this->post('/login', [$this, 'postLogin']);
	}

	public function doLogin($req, $res, $args){
		return $this->respond($res, ['state' => true]);
	}

	public function postLogin($req, $res, $args){
		return $this->respond($res, ['state' => false]);
	}

}
