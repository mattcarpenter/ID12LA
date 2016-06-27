(function () {
  'use strict';

  var serialport = require('serialport');
  var SerialPort = serialport.SerialPort;
  var deviceName = '/dev/ttyO1';

  var port = new SerialPort(deviceName, {
    baudrate: 9600,
    parser: serialport.parsers.readline('\n')
  });

  port.on('data', function (data) {
    // todo: calculate checksum
    // see: http://cdn.sparkfun.com/datasheets/Sensors/ID/ID-2LA,%20ID-12LA,%20ID-20LA2013-4-10.pdf
    console.log('Data:', data);
  });

})();

