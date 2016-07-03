#!/usr/bin/env node

var forever = require('forever'),
  path = require('path');

/**
 * aest start
 * 
 * Start - The 20-20-20 Rule: Preventing Digital Eye Strain
 */
module.export = function () {

  try {
    forever.stop('../scheduler.js');
  } catch (err) {
    // Error handled
  }

  forever.startDaemon('../scheduler.js', {
    logFile: path.resolve(__dirname, './logs/aest.log'),
    pidFile: path.resolve(__dirname, './pids/aest.pid')
  });
}