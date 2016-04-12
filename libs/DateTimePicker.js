'use strict';

var React = require('react-native');
var {
    Platform
} = React;

var DateTimePickerAndroid = require('./DateTimePicker.android.js');
var DateTimePickerIOS= require('./DateTimePicker.ios.js');
var DateTimePicker = (Platform.OS === 'android') ? DateTimePickerAndroid : DateTimePickerIOS;


module.exports = DateTimePicker;
