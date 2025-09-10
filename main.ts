let potentio = 0
let volume = 0
input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    potentio = pins.analogReadPin(AnalogPin.P0)
    volume = pins.map(
    potentio,
    0,
    1023,
    0,
    255
    )
    basic.showNumber(volume)
    music.setVolume(volume)
})
