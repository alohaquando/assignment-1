def on_button_pressed_a():
    answer.append(1)

def game_over():
    print("""
 GAME OVER! {high_score}""")
    game.game_over()

def show_question():
    for i in range(8):
        question.append(randint(0, 1))
        print(question[i])
        control.wait_micros(250000)

def ask():
    input.button_is_pressed(Button.A)
    input.button_is_pressed(Button.B)

def on_button_pressed_b():
    answer.append(0)

def validate():
    global high_score
    j = 0
    while j <= bit - 1:
        if question[j] == answer[j]:
            print("X #{i}")
            game_over()
        else:
            print("CORRECT!")
        j += 1
    high_score = high_score + 1

def main():
    global question, answer
    question = []
    answer = []
    show_question()
    ask()
    validate()

high_score = 0
answer: List[number] = []
bit = 0
question: List[number] = []
bit = 4
timer = 60


def on_button_pressed_logo():
    while True:
        main()

input.logo_is_pressed()
