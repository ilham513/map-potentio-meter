let resis = 0
let derajat = 0
basic.forever(function () {
    resis = pins.analogReadPin(AnalogPin.P0)
    derajat = pins.map(
    resis,
    0,
    1023,
    0,
    180
    )
    basic.showNumber(derajat)
    pins.servoWritePin(AnalogPin.P1, derajat)
})
