<?php

require_once "vendor/autoload.php";
$conf = require 'config.php';

$app = new \<%= app_name %>\App($conf);

// Register Entity Resource
// init resources
// end init resources

$app->run();
