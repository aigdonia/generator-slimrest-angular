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
