# generator-slimrest-angular

<!-- [![Github All Releases](https://img.shields.io/github/downloads/aigdonia/generator-slimrest-angular/total.svg?style=flat-square)]() -->
[![npm](https://img.shields.io/npm/dt/generator-slimrest-angular.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/generator-slimrest-angular.svg?style=flat-square)]()


[![Twitter Follow](https://img.shields.io/twitter/follow/aigdonia.svg?style=social)]()

Yeoman generator that scaffold AngularJS application with PHP Slimframework 3.0

---

## Introduction
This generator scaffolds angularJS web application with PHP RESTful backend.

RESTful backend is implemented on top of PHP [Slimframework 3.0](http://www.slimframework.com/), configured with [PHPActiveRecord](http://www.phpactiverecord.org/) ORM to connect to database. [JWT](http://jwt.io/) based authentication/authorization is presented as well.

#### Jader? I'm Jade/SASS guy as well
Frontend is backed with **optional** Jade and SASS support.

## Another Generator ?!

I created this generator inspired by the awesome [angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) generator, every module is boxed within one directory contains controllers, views, services, specs, etc...

Backend is PHP-based uses the awesome PHP [SlimFramework 3.0](http://www.slimframework.com/docs/), backed with [PHPActiveRecord](http://www.phpactiverecord.org/projects/main/wiki) to serve database manipulation tasks, the architecture is very flexible and straight forward to alter with your own preferred ORM library.

## Get Started

First thing to do install the generator using npm  
`npm install -g generator-slimrest-angular`  
the command will scaffold the project and install dependecies in for both angular and PHP.

<a id="get-start-guide"></a>

### First Run

Once generator finishes installing dependencies for both frontend and backend, the project is ready.

Run `grunt serve` to preview frontend while doing development, **no thing new!**, for backend run `grunt serve:api`, API instance will be accessible through [http://localhost:9005](http://localhost:9005).


## Directory Structure
Application is separated in two directories, directory structure looks like the following:

![Directory Structure](http://i.imgur.com/0ujbfe8.png)

# Do Backend Development

Backend is based on [slimrest API](https://github.com/aigdonia/slimrest) scaffold

## Additional Tools

Additional resources and tutorials based on the scaffold will be available soon.

## Easy to start
 1. download the code or fork it to your github account.
 2. install dependencies by running `./composer.phar install`

 **note** use your own composer install if you already have one
 3. update config.php file to meet your system requirements.
 4. run through your http php-enabled server, for quick starts, run `php -S localhost:9001` from your terminal inside project directory to have quick up and running development instance.

 **tip** Don't use this way in production, deploy in reliable webserver

## Getting Started

### 1. Configure The Database Connection
This scaffold uses [PHPActiveRecord](http://www.phpactiverecord.org/) to handle database connectivity and manipulation, I've PHPActiveRecord for 3 years, and it is really quick awesome solution if you still using the `mysqli` or `PDO`, give it a look.

Configuration is straight in this scaffold, edit your `/config.php` file to add as many connections as you want,

**Note** that the `'development'` connection is **mandatory** to be there unless you set the system environment variable `'LIS_ENV'` to whatever connection name you want.

Connection string is formatted like:

`<DB_DRIVER>://<USER>:<PASS>@<DB_SERVER>/<DB_NAME>`

for example `mysql://root:root@localhost/database`.

`models_dir` configuration key is critical for PHPActiveRecord to find the model classes, it is set by default to `app/Model`.

**Note**  if you are going to change where your models will be, point this location to where you are going to place all your models classes

### 2. Create Your First Route
This scaffold uses the term `Resource` to describe a single Entity or a Module in your system, you are free to divide your system into Resources, each Resource in your system should be included in the directory `Resource` and should extend the abstract class `\SlimRest\Resource`.

Implement the method `routes` in your own Resource subclass by adding your routes.

```php
<?php
	namespace SlimRest\Resource;
	use \SlimRest\Resource as Resource;
	class Auth extends Resource{
	 public function routes(){
		 $this->get('/login', [$this, 'doLogin']);
		 $this->post('/login', [$this, 'postLogin']);
		 ...
	 }

	 public function doLogin($req, $res, $args){
		 ...
		 return $this->respond($res, ... );
	 }

	 public function postLogin($req, $res, $args){
		 ...
	 }
	}

```
### 3. Register Resource in your index file
last thing to do is to register your created resource by creating new instance in `/index.php`
```php
	new \SlimRest\Resource\Auth();
```

Try accessing your routes through web browser or Postman

Tutorials will be available soon here.

**Tutorials will be available soon.**

## Sub Generators

No subgenerators added yet in the current generator. However, there is list of planned subgenerators to be added soon.

*   API endpoint
*   Angular Module
*   Angular Controller
*   Angular Route

<a id="contribution"></a>

## Contribution

**You have something to add?**  
Simple! fork the repo, apply your changes, and send a Pull request.

**Awesome contributors will be listed here.**
