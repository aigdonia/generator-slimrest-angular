'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantabulous ' + chalk.red('slimrest-angular') + ' generator!'
    ));
	var app_name =  _.camelCase( this.destinationRoot().replace(path.dirname( this.destinationRoot() )+"/", '' ) );
	app_name = _.upperFirst(app_name);

    var prompts = [{
			type: 'input',
			name: 'app_name',
			message: 'What is your application name?',
			default: app_name
		}];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },

  writing: function () {
	var kebab_name = _.kebabCase(this.props.app_name);
	// global copy all files
	this.fs.copy( this.templatePath('**/*.*'), this.destinationPath());
	this.fs.copy( this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
	this.fs.copy( this.templatePath('_bowerrc'), this.destinationPath('.bowerrc'));
	this.fs.copy( this.templatePath('_jshintrc'), this.destinationPath('.jshintrc'));
	// inject app name in selected files
    this.fs.copyTpl( this.templatePath('package.json'), this.destinationPath('package.json'), { app_name: kebab_name } );
    this.fs.copyTpl( this.templatePath('bower.json'), this.destinationPath('bower.json'), { app_name: kebab_name } );
    this.fs.copyTpl( this.templatePath('client/app/index.html'), this.destinationPath('client/app/index.html'), { app_name: kebab_name } );
    this.fs.copyTpl( this.templatePath('client/app/**/*.js'), this.destinationPath('client/app'), { app_name: kebab_name } );
    this.fs.copyTpl( this.templatePath('server/**/*.php'), this.destinationPath('server'), { app_name: _.upperFirst(this.props.app_name) } );
    this.fs.copyTpl( this.templatePath('server/composer.json'), this.destinationPath('server/composer.json'), { app_name: _.upperFirst(this.props.app_name) } );
  },

  install: function () {
	this.log('# '+ chalk.bold('Update composer to latest version') );
	var update_composer = this.spawnCommand('./composer.phar', ['self-update']);
	var generator = this;
	update_composer.on('close', function(){
		generator.log('# '+ chalk.bold('Install Backend Dependencies') );
		generator.spawnCommand('./composer.phar', ['-d=./server/', 'install'])
	});

	this.log('# '+ chalk.bold('Install frontend Dependencies') );
	this.installDependencies();
  }
});
