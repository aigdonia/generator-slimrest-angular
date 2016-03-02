<?php
	// this returns the configuration to database
	return [
		"database" => [
			"connections" => array(
				"development" => "mysql://root:root@localhost/database",
				"test" => "mysql://root:root@localhost/database",
				"primary" => "mysql://root:root@localhost/database"
			) ,
			"models_dir" => "app/Model"
		]
	];
