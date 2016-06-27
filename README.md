# ID-12LA RFID Card Reader - UART Example

### Getting Started on the BeagleBone Black

Red wire -> P9.3 (3.3v)
Gray wire -> P9.1 (Gnd)
Orange wire -> P9.26 (UART1 Rx)

UART1 must be enabled on the BBB. This may be done at boot time using the following instructions:
http://beaglebone.cameon.net/home/serial-ports-uart


To enable UART1 manually, execute the following commands:

```
> sudo su

# Enable device tree overlay
> echo BB-UART1 > /sys/devices/bone_capemgr.*/slots

# Verify overlay added
> cat /sys/devices/bone_capemgr.*/slots
```

### Running

```
node index.js
```
