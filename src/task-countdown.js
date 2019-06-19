// Description:
//   A hubot script for announcing task countdowns and allowing user snoozing.
//
// Dependencies:
//   node-schedule: ^1.3.2
//   yargs: ^13.2.4
//
// Commands:
//   hubot start timer (opts) -- Start timer with specified options.
//   hubot snooze timer (timer-desc) -- Snooze the named timer.
//   hubot timer help -- List all available options.
//
// Options:
//
//   -name    : Timer name.
//   -secs    : Seconds until timer elapses.
//   -mins    : Minutes until timer elapses.
//   -minutes : Minutes until timer elapses
//   -hours   : Hours until timer elapses.
//   -message : Description of timer or message to be shown when timer is complete.
//   -snooze  : Time to snooze. If null, defaults resets original timer. Uses same unit of time as original timer.
//
// Configuration:
//   Optional persistent hubot brain. If hubot brain is persisted, this script will attempt to store and resume jobs on after a temporary shutdown.
// 
// Author: 
//   kwandrews7
//

const yargs = require('yargs');
const schedule = require('node-schedule');

module.exports = function (robot) {

    if (!robot.brain.data.stock_checker_favs) {
      robot.brain.data.stock_checker_favs = {};
    }
  
    robot.respond(/^start timer/i, function (msg) {
        // response code
    });

    robot.respond(/^snooze timer/i, function (msg) {
        // response code
    });

    robot.respond(/^timer help/i, function (msg) {
        // response code
    });
};