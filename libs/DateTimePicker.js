'use strict';

var React = require('react-native');
var {
    Platform
} = React;

var DatePicker;
if (Platform.OS === 'android'){
  DatePicker = require('./DateTimePicker.android.js');
}
else {
  DatePicker = require('./DateTimePicker.ios.js');
}

module.exports = DatePicker;
