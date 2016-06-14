/*eslint-disable*/
var moment = require('moment');

// console.log(moment().format());

var now = moment();

// console.log('Current timestamp', now.unix());

// var timestamp = now.unix();
// var currentMoment = moment.unix(timestamp);
// console.log('currentMoment', currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('formatted date', now.format('MMMM Do, Y @ h:mm A'));