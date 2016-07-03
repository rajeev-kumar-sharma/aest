#!/usr/bin/env node

var forever = require('forever'),
  chalk = require('chalk');

/**
 * aest stop
 * 
 * Stop - The 20-20-20 Rule: Preventing Digital Eye Strain
 */
module.export = function () {
  try {
    forever.stop('../scheduler.js');
  } catch (err) {
    console.error(chalk.red(err));
  }
}