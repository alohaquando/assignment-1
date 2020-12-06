input.onButtonPressed(Button.A, function () {
    Answer = 1
})
function change_binary (n: number) {
    while (n >= 1) {
        remainder = n % 2
        n = Math.idiv(n, 2)
        result += 10 ** idx * remainder
        idx += 1
    }
    return result
}
input.onButtonPressed(Button.AB, function () {
    let List_ = 0
    if (List_ == 0) {
        Reset()
    }
    if (List_ == 1) {
        Reset()
    }
    if (List_ == 2) {
        Flip()
    }
})
input.onButtonPressed(Button.B, function () {
    Answer = 1
})
function Flip () {
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
}
function Reset () {
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
    Convert_Value_1 = change_binary(Value)
    Convert_Value_2 = change_binary(Value_2)
    basic.showString("WHAT IS THE BINARY VALUE OF")
    basic.showNumber(Value)
    if (Answer == change_binary(Value)) {
        basic.showString("WHAT IS THE RESET VALUE WITH ")
        basic.showNumber(Convert_Value_2)
        if (true) {
            for (let Convert_Value_1 = 0; Convert_Value_1 <= Convert_Value_1.length - 1; Convert_Value_1++) {
                Length_Reset += 1
                if (Convert_Value_1[Length_Reset] == Convert_Value_2[Length_Reset]) {
                    result_reset = Convert_Value_1[Length_Reset]
                } else {
                    result_reset = 0
                }
            }
        } else {
            game.gameOver()
        }
    } else {
        game.gameOver()
    }
}
function Set () {
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
}
let Length_Reset = 0
let Convert_Value_2 = 0
let Convert_Value_1 = 0
let Value_2 = 0
let Value = 0
let idx = 0
let result = 0
let n = 0
let remainder = 0
let Answer = 0
let result_reset = ""
result_reset = ""
basic.showString("SET RESET FLIP GAME")
basic.forever(function () {
	
})
