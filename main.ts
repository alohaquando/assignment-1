input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    led.stopAnimation()
    basic.showString("" + ("" + randint(0, 10)))
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    control.reset()
})
basic.showString("A+B TO START")
