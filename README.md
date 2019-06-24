# hubot-task-countdown
A hubot script for announcing task countdowns and allowing user snoozing. 

[![NPM](https://nodei.co/npm/hubot-task-countdown.png?downloads=true&&downloadRank=true&stars=true)](https://nodei.co/npm/hubot-task-countdown/)

Have question, comment, or feature request? Reach out to me on Twitter [@kwandrews7](https://twitter.com/kwandrews7) or open up an issue here in the GitHub repo.

## Commands

 * `hubot start timer (opts)` - Start timer with specified options.
 * `hubot timer help` - Provide example and list all available options.

### Options:

 *  -name    : Name of timer.
 *   -seconds : Length of timer in seconds.
 *   -message : Message to be sent when timer is complete.

### Configuration:
 *   HUBOT_TASK_DEFAULT_SECONDS : Seconds to use when setting and snoozing timers. Default: 300

## Installation

Run the following command 

    $ npm install hubot-task-countdown --save

To enable the script, add a `hubot-task-countdown` entry to the `external-scripts.json`
file (you may need to create this file).

    ["hubot-task-countdown"]

## Dependencies

 * node-schedule: ^1.3.2
 * yargs: ^13.2.4

## Release Notes

### 0.1.0

* Initial release. 
* Published to npm for alpha testing.
* Supports kicking off timers.
* **Does not yet support persisting timers to hubot brain. Timers may be lost during a bounce of the hubot instance.**
* **Does not yet support snoozing the timer.**
