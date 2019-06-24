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
//   hubot timer help -- Provide example and list all available options.
//
// Options:
//
//   -name    : Name of timer.
//   -seconds : Length of timer in seconds.
//   -message : Message to be sent when timer is complete.
//
// Configuration:
//   HUBOT_TASK_DEFAULT_SECONDS : Seconds to use when setting and snoozing timers. Default: 300
// 
// Author: 
//   kwandrews7
//

const schedule = require('node-schedule');
const yargs = require('yargs')
    .option('n', {
        alias: 'name',
        description: 'Name of the timer.'
    })
    .option('s', {
        alias: 'seconds',
        description: 'Length of timer in seconds.',
        default: process.env.HUBOT_TASK_DEFAULT_SECONDS || '300'
    })
    .option('m', {
        alias: 'message',
        description: 'Message to be sent when timer is complete.'
    })
    .option('channel', {
        description: 'Announce timer completion using `@channel` tag.',
        type: 'boolean'
    })
    .option('here', {
        description: 'Announce timer completion using `@here` tag.',
        type: 'boolean'
    });

module.exports = function (robot) {

    if (!robot.brain.data.task_countdown) {
        robot.brain.data.task_countdown = {};
    }

    robot.respond(/start timer/i, function (msg) {
        robot.logger.debug("HERE!!!");
        let parsedYargs = yargs.parse(msg.message.text);
        msg.send(`Name: ${parsedYargs.name}`);
        msg.send(`Seconds: ${parsedYargs.seconds}`);
        msg.send(`Message: ${parsedYargs.message}`);
        msg.send(`Announce: [Channel:${parsedYargs.channel === true}] [Here:${parsedYargs.here === true}]`);
    });

    robot.respond(/snooze timer/i, function (msg) {
        // response code
    });

    robot.respond(/timer help/i, function (msg) {
        let help = [
            'Example Usage: Start 15 minute timer for deploying a new version into UAT.',
            '`jarvis start timer -n "Deploy v2 to UAT" -t 900 -m "UAT is currently preparing for a deployment. Exit all sessions immediately."',
            '',
            'Options:',
            '-n, --name     Name of the timer.',
            '-s, --seconds  Length of timer in seconds.',
            '-m, --message  Message to be sent when timer is complete.',
            '--channel      Announce timer completion using `@channel` tag.',
            '--here         Announce timer completion using `@here` tag.'
        ]
    });
};