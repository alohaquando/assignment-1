input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    basic.showString("" + (randint(0, 10)))
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
basic.showString("A+B TO START")
