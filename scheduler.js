var os = require('os'),
  chalk = require('chalk'),
  cron = require('node-cron'),
  exec = require('child_process').exec,
  conf = require('./config.json'),
  system = os.type(),
  options = conf[system];

cron.schedule('*/20 * * * *', function () {
  exec('xset dpms force off | xinput set-prop 11 "Device Enabled" 0 | xinput set-prop 12 "Device Enabled" 0', (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`exec error: ${error}`));
    }
    // console.log(chalk.bold.cyan(``));

    setTimeout(function () {
      exec('xset dpms force on | xinput set-prop 11 "Device Enabled" 1 | xinput set-prop 12 "Device Enabled" 1', function (error, stdout, stderr) {
        if (error) {
          console.error(chalk.red(`exec error: ${error}`));
        }
      });
    }, 20000)


  })
})
