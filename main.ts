input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    List += -1
    if (List < 0) {
        List = 0
        if (List == 0) {
            basic.showString("Set")
        } else if (List == 1) {
            basic.showString("Reset")
        } else {
            basic.showString("Flip")
        }
        
    }
    
})
function change_binary(n: number) {
    
    while (n >= 1) {
        remainder = n % 2
        n = Math.idiv(n, 2)
        result += 10 ** idx * remainder
        idx += 1
    }
    return result
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    if (List == 0) {
        Reset()
    }
    
    if (List == 1) {
        Reset()
    }
    
    if (List == 2) {
        Flip()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    List += 1
    if (List >= 3) {
        List = 0
    }
    
    if (List == 0) {
        basic.showString("Set")
    } else if (List == 1) {
        basic.showString("Reset")
    } else {
        basic.showString("Flip")
    }
    
})
function Flip() {
    
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
}

function Reset() {
    
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
    Convert_Value_1 = change_binary(Value)
    Convert_Value_2 = change_binary(Value_2)
    basic.showString("Reset bit ")
    basic.showNumber(Value)
    basic.showString(" of ")
    basic.showNumber(Value_2)
}

function Set() {
    
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
}

let Convert_Value_2 = 0
let Convert_Value_1 = 0
let Value_2 = 0
let Value = 0
let idx = 0
let result = 0
let n = 0
let remainder = 0
let List = 0
basic.showString("SET RESET FLIP GAME")
basic.forever(function on_forever() {
    if (List == 0) {
        basic.showString("Set")
    } else if (List == 1) {
        basic.showString("Reset")
    } else {
        basic.showString("Flip")
    }
    
})
