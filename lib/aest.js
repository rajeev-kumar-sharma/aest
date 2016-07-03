#!/usr/bin/env node

// AEST CLI
var program = require('commander'),
  version = require('../package.json').version;

program.version(version, '-v, --version');

// $ aest start
var cmd;
cmd = program.command('start');
cmd.description('Start - The 20-20-20 Rule: Preventing Digital Eye Strain');
cmd.action(require('./aest-start'));

// $ aest stop
var cmd;
cmd = program.command('stop');
cmd.description('Stop - The 20-20-20 Rule: Preventing Digital Eye Strain');
cmd.action(require('./aest-stop'));

// $ aest
program.parse(process.argv);

// print help with no args
if (program.args.length < 1) {
  program.help();
}