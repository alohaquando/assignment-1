def on_button_pressed_a():
    global List
    List += -1
    if List < 0:
        List = 0
        if List == 0:
            basic.show_string("Set")
        elif List == 1:
            basic.show_string("Reset")
        else:
            basic.show_string("Flip")
input.on_button_pressed(Button.A, on_button_pressed_a)

def change_binary(n: number):
    global remainder, result, idx
    while n >= 1:
        remainder = n % 2
        n = Math.idiv(n, 2)
        result += 10 ** idx * remainder
        idx += 1
    return result

def on_button_pressed_ab():
    if List == 0:
        Reset()
    if List == 1:
        Reset()
    if List == 2:
        Flip()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global List
    List += 1
    if List >= 3:
        List = 0
    if List == 0:
        basic.show_string("Set")
    elif List == 1:
        basic.show_string("Reset")
    else:
        basic.show_string("Flip")
input.on_button_pressed(Button.B, on_button_pressed_b)

def Flip():
    global Value, Value_2
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
def Reset():
    global Value, Value_2, Convert_Value_1, Convert_Value_2
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
    Convert_Value_1 = change_binary(Value)
    Convert_Value_2 = change_binary(Value_2)
    basic.show_string("Reset bit ")
    basic.show_number(Value)
    basic.show_string(" of ")
    basic.show_number(Value_2)
def Set():
    global Value, Value_2
    Value = randint(0, 10)
    Value_2 = randint(0, 10)
Convert_Value_2 = 0
Convert_Value_1 = 0
Value_2 = 0
Value = 0
idx = 0
result = 0
n = 0
remainder = 0
List = 0
basic.show_string("SET RESET FLIP GAME")

def on_forever():
    if List == 0:
        basic.show_string("Set")
    elif List == 1:
        basic.show_string("Reset")
    else:
        basic.show_string("Flip")
basic.forever(on_forever)
