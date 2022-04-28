'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function getProjectTask(task) {
	const gulpFunction = require(`../${task}`)(gulp, plugins);
	gulpFunction.displayName = task;
	return gulpFunction;
}

module.exports = {
	getProjectTask,
};
