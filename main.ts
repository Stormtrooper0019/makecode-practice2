input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("HELLO!")
    music.playMelody("C5 A B G A F G E ", 180)
})
input.onGesture(Gesture.TiltRight, function () {
    while (input.rotation(Rotation.Roll) > 10) {
        led1 += 1
        basic.clearScreen()
        if (led1 >= 4) {
            led1 = 4
        }
        led.plot(led1, led2)
        pico()
        basic.pause(800)
    }
})
input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    led1 = 2
    led2 = 2
    led.plot(led1, led2)
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.rotation(Rotation.Roll) < -10) {
        led1 += -1
        basic.clearScreen()
        if (led1 <= 0) {
            led1 = 0
        }
        led.plot(led1, led2)
        pico()
        basic.pause(800)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    while (input.rotation(Rotation.Pitch) > 10) {
        led2 += 1
        basic.clearScreen()
        if (led2 >= 4) {
            led2 = 4
        }
        led.plot(led1, led2)
        pico()
        basic.pause(800)
    }
})
function pico () {
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
}
input.onGesture(Gesture.LogoDown, function () {
    while (input.rotation(Rotation.Pitch) < -10) {
        led2 += -1
        basic.clearScreen()
        if (led2 <= 0) {
            led2 = 0
        }
        led.plot(led1, led2)
        pico()
        basic.pause(800)
    }
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.clearScreen()
})
let led2 = 0
let led1 = 0
led1 = 2
led2 = 2
led.plot(led1, led2)
music.setVolume(90)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
	
})
