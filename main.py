high_score = 0
bit = 4
timer = 60
question = []
answer = []

def show_question():
    for i in range(bit):
        question.append(randint(0, 1))
        print('\r', '', end='')
        time.sleep(0.25)
        print('\r', question[i], end='')
        time.sleep(0.5)


def ask():
    user_input = input('Your answer: ')
    for entry in user_input:
        answer.append(int(entry))


def game_over():
    print(f'\n GAME OVER! • Your high score is: {high_score}')
    os._exit(1)


def validate():
    global high_score
    for i in range(bit):
        if question[i] == answer[i]:
            print(f'Incorrect answer at bit #{i}')
            game_over()
        else:
            print("CORRECT!")

    high_score = high_score + 1


def close_if_time_pass(seconds):
    time.sleep(seconds)
    game_over()


def main():
    global timer, question, answer
    t = threading.Thread(target=close_if_time_pass, args=(timer,))
    t.start()
    question = []
    answer = []
    show_question()
    ask()
    validate()

while True:
    main()

